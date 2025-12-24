"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import ReactLenis from "lenis/react";

export default function SkiperPerspectiveText() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [480, 0]);

  const transform = useMotionTemplate`
    rotateX(30deg)
    translateY(${y}px)
    translateZ(20px)
  `;

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div
        ref={targetRef}
        className="relative h-[300vh] w-screen bg-[#f5f4f3] text-black"
      >
        {/* Scroll Hint */}
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 text-center">
          <span className="relative max-w-[12ch] text-xs uppercase opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:-translate-x-1/2 after:bg-gradient-to-b after:from-black/0 after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>

        {/* Sticky 3D Stage */}
        <div
          className="sticky top-0 flex h-screen items-center justify-center"
          style={{
            perspective: "200px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            style={{
              transform,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-5xl px-6 text-center text-4xl md:text-6xl font-bold tracking-tight text-[#ff5800]"
          >
            Building interfaces that move in depth.
            <br />
            Motion is not decoration.
            <br />
            Performance is a feature.
            <br />
            Design meets engineering.

            {/* Fade bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-[#f5f4f3]" />
          </motion.div>
        </div>
      </div>
    </ReactLenis>
  );
}
