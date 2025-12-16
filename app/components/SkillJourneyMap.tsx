'use client'
import React, { useState } from 'react';

interface Skill {
    id: number;
    name: string;
    percentage: number;
    category: string;
    x: number;
    y: number;
    color: string;
    icon: string;
}

const ProfessionalSkillMap: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const skillsDesktop: Skill[] = [
        { id: 1, name: 'HTML/CSS', percentage: 80, category: 'Frontend', x: 150, y: 380, color: '#f97316', icon: '🎨' },
        { id: 2, name: 'JavaScript', percentage: 70, category: 'Frontend', x: 280, y: 340, color: '#f59e0b', icon: 'JS' },
        { id: 3, name: 'React', percentage: 70, category: 'Frontend', x: 400, y: 360, color: '#06b6d4', icon: '⚛️' },
        { id: 4, name: 'TypeScript', percentage: 60, category: 'Frontend', x: 520, y: 320, color: '#3b82f6', icon: 'TS' },
        { id: 5, name: 'Next.js', percentage: 60, category: 'Frontend', x: 640, y: 300, color: '#000000', icon: '▲' },
        { id: 6, name: 'Node.js', percentage: 70, category: 'Backend', x: 760, y: 260, color: '#22c55e', icon: '🟢' },
        { id: 7, name: 'Express', percentage: 70, category: 'Backend', x: 880, y: 240, color: '#64748b', icon: 'E' },
        { id: 8, name: 'MongoDB', percentage: 60, category: 'Backend', x: 1000, y: 280, color: '#10b981', icon: '🍃' },
        { id: 9, name: 'PostgreSQL', percentage: 50, category: 'Backend', x: 1100, y: 320, color: '#3b82f6', icon: '🐘' },
        { id: 10, name: 'Docker', percentage: 40, category: 'DevOps', x: 1200, y: 360, color: '#2563eb', icon: '🐳' },
        { id: 11, name: 'Git/GitHub', percentage: 80, category: 'DevOps', x: 1280, y: 400, color: '#ef4444', icon: '📦' },
        { id: 12, name: 'AWS', percentage: 40, category: 'Cloud', x: 1180, y: 440, color: '#ff9900', icon: '☁️' },
        { id: 13, name: 'Python', percentage: 40, category: 'AI/ML', x: 1080, y: 420, color: '#3b82f6', icon: '🐍' },
        { id: 14, name: 'Machine Learning', percentage: 20, category: 'AI/ML', x: 980, y: 400, color: '#8b5cf6', icon: '🤖' },
    ];

    const skillsMobile: Skill[] = [
        { id: 1, name: 'HTML/CSS', percentage: 80, category: 'Frontend', x: 200, y: 100, color: '#f97316', icon: '🎨' },
        { id: 2, name: 'JavaScript', percentage: 70, category: 'Frontend', x: 280, y: 180, color: '#f59e0b', icon: 'JS' },
        { id: 3, name: 'React', percentage: 70, category: 'Frontend', x: 200, y: 260, color: '#06b6d4', icon: '⚛️' },
        { id: 4, name: 'TypeScript', percentage: 60, category: 'Frontend', x: 280, y: 340, color: '#3b82f6', icon: 'TS' },
        { id: 5, name: 'Next.js', percentage: 60, category: 'Frontend', x: 200, y: 420, color: '#000000', icon: '▲' },
        { id: 6, name: 'Node.js', percentage: 70, category: 'Backend', x: 280, y: 500, color: '#22c55e', icon: '🟢' },
        { id: 7, name: 'Express', percentage: 70, category: 'Backend', x: 200, y: 580, color: '#64748b', icon: 'E' },
        { id: 8, name: 'MongoDB', percentage: 60, category: 'Backend', x: 280, y: 660, color: '#10b981', icon: '🍃' },
        { id: 9, name: 'PostgreSQL', percentage: 50, category: 'Backend', x: 200, y: 740, color: '#3b82f6', icon: '🐘' },
        { id: 10, name: 'Docker', percentage: 40, category: 'DevOps', x: 280, y: 820, color: '#2563eb', icon: '🐳' },
        { id: 11, name: 'Git/GitHub', percentage: 80, category: 'DevOps', x: 200, y: 900, color: '#ef4444', icon: '📦' },
        { id: 12, name: 'AWS', percentage: 40, category: 'Cloud', x: 280, y: 980, color: '#ff9900', icon: '☁️' },
        { id: 13, name: 'Python', percentage: 40, category: 'AI/ML', x: 200, y: 1060, color: '#3b82f6', icon: '🐍' },
        { id: 14, name: 'Machine Learning', percentage: 20, category: 'AI/ML', x: 280, y: 1140, color: '#8b5cf6', icon: '🤖' },
    ];

    const skills = isMobile ? skillsMobile : skillsDesktop;

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Frontend': '#06b6d4',
            'Backend': '#22c55e',
            'DevOps': '#3b82f6',
            'Cloud': '#ff9900',
            'AI/ML': '#8b5cf6'
        };
        return colors[category] || '#64748b';
    };

    return (
        <div style={{
            background: 'linear-gradient(180deg, #0a0a0aff 0%, #0a0a0a 50%, #1a1a1a 100%)'
        }} className="w-full p-4 md:p-8 min-h-screen">
            <div className="mb-4 md:mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2">Technical Skills Journey</h1>
                <p className="text-gray-400 text-sm md:text-base ml-1 md:ml-2">Interactive skill map showing proficiency levels across different technologies</p>
            </div>

            <div className="relative overflow-x-auto -mx-4 md:mx-0">
                <svg 
                    viewBox={isMobile ? "0 0 500 1250" : "0 0 1400 550"} 
                    className="w-full h-auto" 
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
                        </pattern>

                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
                            <stop offset="25%" style={{ stopColor: '#22c55e', stopOpacity: 0.6 }} />
                            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                            <stop offset="75%" style={{ stopColor: '#ff9900', stopOpacity: 0.6 }} />
                            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
                        </linearGradient>
                    </defs>

                    <rect width={isMobile ? "500" : "1400"} height={isMobile ? "1250" : "550"} fill="url(#grid)" />

                    <g opacity="0.1">
                        {isMobile ? (
                            <>
                                <ellipse cx="240" cy="300" rx="180" ry="250" fill="#048ca4ff" />
                                <ellipse cx="240" cy="700" rx="180" ry="200" fill="#22c55e" />
                                <ellipse cx="240" cy="1000" rx="180" ry="150" fill="#3b82f6" />
                            </>
                        ) : (
                            <>
                                <ellipse cx="320" cy="350" rx="250" ry="120" fill="#048ca4ff" />
                                <ellipse cx="850" cy="280" rx="200" ry="140" fill="#22c55e" />
                                <ellipse cx="1200" cy="400" rx="180" ry="100" fill="#3b82f6" />
                                <ellipse cx="1030" cy="410" rx="150" ry="80" fill="#8b5cf6" />
                            </>
                        )}
                    </g>

                    <path
                        d={`M ${skills[0].x} ${skills[0].y} ${skills.map((s, i) =>
                            i === 0 ? '' : `L ${s.x} ${s.y}`
                        ).join(' ')}`}
                        fill="none"
                        stroke="url(#pathGradient)"
                        strokeWidth="3"
                        strokeDasharray="8,8"
                        opacity="0.6"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from="16"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </path>

                    {skills.map((skill, index) => {
                        if (index === skills.length - 1) return null;
                        const nextSkill = skills[index + 1];
                        return (
                            <line
                                key={`line-${skill.id}`}
                                x1={skill.x}
                                y1={skill.y}
                                x2={nextSkill.x}
                                y2={nextSkill.y}
                                stroke="#374151"
                                strokeWidth="2"
                                opacity="0.4"
                            />
                        );
                    })}

                    {skills.map((skill) => {
                        const isHovered = hoveredSkill === skill.id;
                        const isSelected = selectedSkill === skill.id;
                        const scale = isHovered || isSelected ? 1.15 : 1;

                        return (
                            <g
                                key={skill.id}
                                onMouseEnter={() => setHoveredSkill(skill.id)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                onClick={() => setSelectedSkill(isSelected ? null : skill.id)}
                                onTouchStart={() => setHoveredSkill(skill.id)}
                                onTouchEnd={() => {
                                    setHoveredSkill(null);
                                    setSelectedSkill(isSelected ? null : skill.id);
                                }}
                                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                                transform={`translate(${skill.x}, ${skill.y}) scale(${scale}) translate(${-skill.x}, ${-skill.y})`}
                            >
                                {(isHovered || isSelected) && (
                                    <circle
                                        cx={skill.x}
                                        cy={skill.y}
                                        r="45"
                                        fill={skill.color}
                                        opacity="0.2"
                                        filter="url(#glow)"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="45;50;45"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}

                                <circle
                                    cx={skill.x}
                                    cy={skill.y}
                                    r="35"
                                    fill="none"
                                    stroke="#1f2937"
                                    strokeWidth="4"
                                />

                                <circle
                                    cx={skill.x}
                                    cy={skill.y}
                                    r="35"
                                    fill="none"
                                    stroke={skill.color}
                                    strokeWidth="4"
                                    strokeDasharray={`${(skill.percentage / 100) * 220} 220`}
                                    strokeLinecap="round"
                                    transform={`rotate(-90 ${skill.x} ${skill.y})`}
                                    filter="url(#glow)"
                                />

                                <circle
                                    cx={skill.x}
                                    cy={skill.y}
                                    r="30"
                                    fill="#111827"
                                    stroke={skill.color}
                                    strokeWidth="2"
                                />

                                <text
                                    x={skill.x}
                                    y={skill.y + 8}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="20"
                                    fontWeight="bold"
                                >
                                    {skill.icon}
                                </text>

                                <g>
                                    <circle
                                        cx={skill.x + 25}
                                        cy={skill.y - 25}
                                        r="15"
                                        fill={skill.color}
                                        stroke="#111827"
                                        strokeWidth="2"
                                    />
                                    <text
                                        x={skill.x + 25}
                                        y={skill.y - 20}
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="10"
                                        fontWeight="bold"
                                    >
                                        {skill.percentage}%
                                    </text>
                                </g>

                                <circle
                                    cx={skill.x - 25}
                                    cy={skill.y - 25}
                                    r="12"
                                    fill="#374151"
                                    stroke={skill.color}
                                    strokeWidth="2"
                                />
                                <text
                                    x={skill.x - 25}
                                    y={skill.y - 20}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="11"
                                    fontWeight="bold"
                                >
                                    {skill.id}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {selectedSkill !== null && (
                    <div className="fixed top-20 md:absolute md:top-4 left-4 right-4 md:left-auto md:right-4 bg-gray-900 border border-gray-700 rounded-xl p-4 md:p-6 w-auto md:w-80 shadow-2xl animate-fade-in z-50 max-h-[80vh] overflow-y-auto">
                        {skills
                            .filter((s) => s.id === selectedSkill)
                            .map((skill) => (
                                <div key={skill.id}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                                style={{
                                                    backgroundColor: `${skill.color}20`,
                                                    border: `2px solid ${skill.color}`
                                                }}
                                            >
                                                {skill.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                                                <p className="text-sm text-gray-400">{skill.category}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedSkill(null)}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400">Proficiency</span>
                                            <span className="text-white font-semibold">{skill.percentage}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${skill.percentage}%`,
                                                    backgroundColor: skill.color,
                                                    boxShadow: `0 0 10px ${skill.color}`
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-gray-400">Level:</span>
                                        <span
                                            className="px-3 py-1 rounded-full text-white font-medium"
                                            style={{ backgroundColor: skill.color }}
                                        >
                                            {skill.percentage >= 90 ? '⭐ Expert' :
                                                skill.percentage >= 80 ? '🎯 Advanced' :
                                                    skill.percentage >= 70 ? '✨ Proficient' : '📚 Intermediate'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {['Frontend', 'Backend', 'DevOps', 'Cloud', 'AI/ML'].map((category) => (
                    <div key={category} className="flex items-center gap-2">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: getCategoryColor(category) }}
                        />
                        <span className="text-gray-400 text-sm">{category}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default ProfessionalSkillMap;