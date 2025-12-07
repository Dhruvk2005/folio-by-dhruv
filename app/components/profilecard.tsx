'use client'
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
    avatarUrl?: string;
    iconUrl?: string;
    grainUrl?: string;
    innerGradient?: string;
    behindGlowEnabled?: boolean;
    behindGlowColor?: string;
    behindGlowSize?: string;
    className?: string;
    enableTilt?: boolean;
    enableMobileTilt?: boolean;
    mobileTiltSensitivity?: number;
    miniAvatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
    showUserInfo?: boolean;
    onContactClick?: () => void;
}

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
    round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
    avatarUrl = '/Dhruv.jpg',
    iconUrl = '',
    grainUrl = '',
    innerGradient,
    behindGlowEnabled = true,
    behindGlowColor,
    behindGlowSize,
    className = '',
    enableTilt = true,
    enableMobileTilt = false,
    mobileTiltSensitivity = 5,
    miniAvatarUrl,
    name = 'Dhruv',
    title = 'Full Stack Developer',
    handle = 'dhruv',
    status = 'Online',
    contactText = 'Contact',
    showUserInfo = true,
    onContactClick
}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const shellRef = useRef<HTMLDivElement>(null);

    const enterTimerRef = useRef<number | null>(null);
    const leaveRafRef = useRef<number | null>(null);

    /* --------------------- TILT ENGINE MEMO ---------------------- */
    const tiltEngine = useMemo(() => {
        if (!enableTilt) return null;

        let rafId: number | null = null;
        let running = false;
        let lastTs = 0;

        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const DEFAULT_TAU = 0.14;
        const INITIAL_TAU = 0.6;
        let initialUntil = 0;

        const setVarsFromXY = (x: number, y: number) => {
            const shell = shellRef.current;
            const wrap = wrapRef.current;
            if (!shell || !wrap) return;

            const width = shell.clientWidth || 1;
            const height = shell.clientHeight || 1;

            const percentX = clamp((100 / width) * x);
            const percentY = clamp((100 / height) * y);

            const centerX = percentX - 50;
            const centerY = percentY - 50;

            const props = {
                '--pointer-x': `${percentX}%`,
                '--pointer-y': `${percentY}%`,
                '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
                '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                '--pointer-from-top': `${percentY / 100}`,
                '--pointer-from-left': `${percentX / 100}`,
                '--rotate-x': `${round(-(centerX / 5))}deg`,
                '--rotate-y': `${round(centerY / 4)}deg`
            };

            for (const [k, v] of Object.entries(props)) wrap.style.setProperty(k, v);
        };

        const step = (ts: number) => {
            if (!running) return;
            if (lastTs === 0) lastTs = ts;

            const dt = (ts - lastTs) / 1000;
            lastTs = ts;

            const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
            const k = 1 - Math.exp(-dt / tau);

            currentX += (targetX - currentX) * k;
            currentY += (targetY - currentY) * k;

            setVarsFromXY(currentX, currentY);

            const stillMoving =
                Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

            if (stillMoving) {
                rafId = requestAnimationFrame(step);
            } else {
                running = false;
                lastTs = 0;
                if (rafId) cancelAnimationFrame(rafId);
            }
        };

        const start = () => {
            if (running) return;
            running = true;
            lastTs = 0;
            rafId = requestAnimationFrame(step);
        };

        return {
            setImmediate(x: number, y: number) {
                currentX = x;
                currentY = y;
                setVarsFromXY(x, y);
            },
            setTarget(x: number, y: number) {
                targetX = x;
                targetY = y;
                start();
            },
            toCenter() {
                const el = shellRef.current;
                if (!el) return;
                this.setTarget(el.clientWidth / 2, el.clientHeight / 2);
            },
            beginInitial(ms: number) {
                initialUntil = performance.now() + ms;
                start();
            },
            getCurrent() {
                return { x: currentX, y: currentY, tx: targetX, ty: targetY };
            },
            cancel() {
                if (rafId) cancelAnimationFrame(rafId);
                running = false;
            }
        };
    }, [enableTilt]);

    /* --------------------- POINTER EVENTS --------------------- */
    const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const handlePointerMove = useCallback(
        (e: PointerEvent) => {
            if (!tiltEngine || !shellRef.current) return;
            const { x, y } = getOffsets(e, shellRef.current);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerEnter = useCallback(
        (e: PointerEvent) => {
            const shell = shellRef.current;
            if (!shell || !tiltEngine) return;

            shell.classList.add(styles.active);
            shell.classList.add(styles.entering);

            if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
            enterTimerRef.current = window.setTimeout(() => {
                shell.classList.remove(styles.entering);
            }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

            const { x, y } = getOffsets(e, shell);
            tiltEngine.setTarget(x, y);
        },
        [tiltEngine]
    );

    const handlePointerLeave = useCallback(() => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;

        tiltEngine.toCenter();

        const settle = () => {
            const { x, y, tx, ty } = tiltEngine.getCurrent();
            const done = Math.hypot(tx - x, ty - y) < 0.6;

            if (done) shell.classList.remove(styles.active);
            else leaveRafRef.current = requestAnimationFrame(settle);
        };

        leaveRafRef.current = requestAnimationFrame(settle);
    }, [tiltEngine]);

    /* --------------------- DEVICE ORIENTATION --------------------- */
    const handleDeviceOrientation = useCallback(
        (event: DeviceOrientationEvent) => {
            if (!tiltEngine || !shellRef.current) return;

            const { beta, gamma } = event;
            if (beta == null || gamma == null) return;

            const w = shellRef.current.clientWidth;
            const h = shellRef.current.clientHeight;

            const x = clamp(w / 2 + gamma * mobileTiltSensitivity, 0, w);
            const y = clamp(
                h / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
                0,
                h
            );

            tiltEngine.setTarget(x, y);
        },
        [tiltEngine, mobileTiltSensitivity]
    );

    /* --------------------- ATTACH EVENTS --------------------- */
    useEffect(() => {
        if (!enableTilt || !tiltEngine) return;
        const shell = shellRef.current;
        if (!shell) return;

        shell.addEventListener('pointerenter', handlePointerEnter as any);
        shell.addEventListener('pointermove', handlePointerMove as any);
        shell.addEventListener('pointerleave', handlePointerLeave as any);

        /* Mobile tilt permission */
        const onClick = () => {
            if (!enableMobileTilt || location.protocol !== 'https:') return;

            const motion = window.DeviceMotionEvent as any;
            if (motion?.requestPermission) {
                motion
                    .requestPermission()
                    .then((state: string) => {
                        if (state === 'granted') {
                            window.addEventListener(
                                'deviceorientation',
                                handleDeviceOrientation as any
                            );
                        }
                    })
                    .catch(console.error);
            } else {
                window.addEventListener('deviceorientation', handleDeviceOrientation as any);
            }
        };
        shell.addEventListener('click', onClick);

        /* Initial animation */
        const initX = shell.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        const initY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

        tiltEngine.setImmediate(initX, initY);
        tiltEngine.toCenter();
        tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

        return () => {
            shell.removeEventListener('pointerenter', handlePointerEnter as any);
            shell.removeEventListener('pointermove', handlePointerMove as any);
            shell.removeEventListener('pointerleave', handlePointerLeave as any);
            shell.removeEventListener('click', onClick);
            window.removeEventListener('deviceorientation', handleDeviceOrientation as any);
            tiltEngine.cancel();
        };
    }, [
        enableTilt,
        enableMobileTilt,
        tiltEngine,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave,
        handleDeviceOrientation
    ]);

    /* --------------------- STYLE VARS --------------------- */
    const cardStyle = useMemo(
        () =>
            ({
                '--icon': iconUrl ? `url(${iconUrl})` : 'none',
                '--grain': grainUrl ? `url(${grainUrl})` : 'none',
                '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
                '--behind-glow-color': behindGlowColor ?? 'rgba(125,190,255,0.67)',
                '--behind-glow-size': behindGlowSize ?? '50%'
            }) as React.CSSProperties,
        [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize]
    );

    /* --------------------- CONTACT CLICK --------------------- */
    const handleContactClick = useCallback(() => {
        onContactClick?.();
    }, [onContactClick]);

    /* --------------------- JSX --------------------- */
    return (
        <div ref={wrapRef} className={`${styles['pc-card-wrapper']} ${className}`} style={cardStyle}>
            {behindGlowEnabled && <div className={styles['pc-behind']} />}

            <div ref={shellRef} className={styles['pc-card-shell']}>
                <section className={styles['pc-card']}>
                    <div className={styles['pc-inside']}>
                        <div className={styles['pc-shine']} />
                        <div className={styles['pc-glare']} />

                        <div className={`${styles['pc-content']} ${styles['pc-avatar-content']}`}>
                            <img
                                className={styles.avatar}
                                src={avatarUrl}
                                alt={`${name} avatar`}
                                loading="lazy"
                                onError={e => ((e.target as HTMLImageElement).style.display = 'none')}
                            />

                            {showUserInfo && (
                                <div className={styles['pc-user-info']}>
                                    <div className={styles['pc-user-details']}>
                                        <img
                                            src={miniAvatarUrl || avatarUrl}
                                            alt={`${name} mini avatar`}
                                            loading="lazy"
                                            onError={e => {
                                                const t = e.target as HTMLImageElement;
                                                t.style.opacity = '0.5';
                                                t.src = avatarUrl;
                                            }}
                                        />

                                        <div className={styles['pc-user-text']}>
                                            <div className={styles['pc-handle']}>@{handle}</div>
                                            <div className={styles['pc-status']}>{status}</div>
                                        </div>
                                    </div>

                                    <button
                                        className={styles['pc-contact-btn']}
                                        onClick={handleContactClick}
                                        type="button"
                                    >
                                        {contactText}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={styles['pc-content']}>
                            <div className={styles['pc-details']}>
                                <h3>{name}</h3>
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default React.memo(ProfileCardComponent);
