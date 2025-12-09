'use client'
import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const AnimatedProfessionalSkillBars: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript', proficiency: 95, category: 'Frontend' },
    { name: 'TypeScript', proficiency: 92, category: 'Frontend' },
    { name: 'Python', proficiency: 88, category: 'Backend' },
    { name: 'React', proficiency: 94, category: 'Framework' },
    { name: 'Node.js', proficiency: 90, category: 'Backend' },
    { name: 'SQL', proficiency: 85, category: 'Database' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-[100%] mx-auto p-8 bg-[black] relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #333 1px, transparent 1px), radial-gradient(circle at 80% 50%, #333 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'drift 30s linear infinite'
          }}
        />
      </div>

      <div className="relative ">
        {skills.map((skill, index) => {
          const isActive = activeSkill === skill.name;
          const delay = index * 0.12;

          return (
           

            <div
              key={skill.name}
              className="relative group"
              style={{
                animation: isVisible ? `slideInFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both` : 'none'
              }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              
            >
             
              {/* Glow background on hover */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-transparent via-gray-800/10 to-transparent rounded-lg transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />
              

              {/* Header Section */}
              <div className="relative flex justify-between items-baseline mb-4">
                <div className="flex items-baseline gap-3">
                  {/* Animated indicator line */}
                  <div 
                    className="h-5 bg-gradient-to-b from-gray-600 to-gray-400 transition-all duration-500"
                    style={{ 
                      width: isActive ? '3px' : '2px',
                      boxShadow: isActive ? '0 0 8px rgba(150,150,150,0.5)' : 'none'
                    }}
                  />
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide transition-all duration-300"
                        style={{ 
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                          color: isActive ? '#fff' : '#e5e5e5'
                        }}>
                      {skill.name}
                    </h3>
                    <span className="text-xs text-gray-600 uppercase tracking-wider block mt-0.5"
                          style={{
                            opacity: isActive ? 1 : 0.6,
                            transition: 'opacity 0.3s'
                          }}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                {/* Animated percentage */}
                <div className="flex items-baseline gap-1 relative">
                  <span 
                    className="text-3xl font-bold text-white transition-all duration-300"
                    style={{
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      textShadow: isActive ? '0 0 20px rgba(255,255,255,0.3)' : 'none'
                    }}
                  >
                    {skill.proficiency}
                  </span>
                  <span className="text-sm text-gray-500">%</span>
                  
                  {/* Circular pulse indicator */}
                  <div 
                    className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full transition-all duration-300"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)',
                      boxShadow: isActive ? '0 0 12px rgba(150,150,150,0.6)' : 'none',
                      animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                {/* Track with gradient */}
                <div 
                  className="h-3 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 overflow-hidden relative transition-all duration-300"
                  style={{
                    boxShadow: isActive 
                      ? '0 4px 16px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.8)' 
                      : 'inset 0 2px 4px rgba(0,0,0,0.8)',
                    borderColor: isActive ? '#444' : '#222'
                  }}
                >
                  {/* Animated grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #333 1px, transparent 1px)',
                      backgroundSize: '20px 100%',
                      animation: isActive ? 'slideGrid 2s linear infinite' : 'none'
                    }}
                  />

                  {/* Main fill bar */}
                  <div
                    className="h-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 relative overflow-hidden"
                    style={{
                      width: isVisible ? `${skill.proficiency}%` : '0%',
                      transition: 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transitionDelay: `${delay}s`,
                      boxShadow: isActive 
                        ? '0 0 16px rgba(150, 150, 150, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)' 
                        : 'inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    {/* Top highlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                    
                    {/* Moving shine effect */}
                    <div 
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                        animation: 'continuousShimmer 3s ease-in-out infinite',
                        backgroundSize: '200% 100%'
                      }}
                    />

                    {/* Segment markers */}
                    {[25, 50, 75].map(segment => (
                      skill.proficiency > segment && (
                        <div
                          key={segment}
                          className="absolute inset-y-0 w-px bg-black/30"
                          style={{ left: `${(segment / skill.proficiency) * 100}%` }}
                        />
                      )
                    ))}

                    {/* Trailing glow */}
                    <div 
                      className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white/30 to-transparent"
                      style={{
                        animation: isActive ? 'breathe 2s ease-in-out infinite' : 'none'
                      }}
                    />
                  </div>

                  {/* End indicator with animation */}
                  {isVisible && (
                    <div
                      className="absolute top-1/2 w-4 h-4 border-2 border-white transition-all duration-300"
                      style={{
                        left: `${skill.proficiency}%`,
                        transform: `translate(-50%, -50%) ${isActive ? 'scale(1.2)' : 'scale(1)'}`,
                        backgroundColor: isActive ? '#fff' : '#999',
                        boxShadow: isActive 
                          ? '0 0 16px rgba(255,255,255,0.6), 0 0 4px rgba(255,255,255,0.8)' 
                          : '0 0 8px rgba(255,255,255,0.3)',
                        transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transitionDelay: `${delay + 1.2}s`,
                        opacity: isVisible ? 1 : 0,
                        animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none'
                      }}
                    >
                      {/* Inner glow */}
                      <div 
                        className="absolute inset-1 bg-white transition-opacity duration-300"
                        style={{ opacity: isActive ? 1 : 0.5 }}
                      />
                    </div>
                  )}
                </div>

                {/* Scale markers with animation */}
                <div className="flex justify-between mt-3 px-0.5">
                  {[0, 25, 50, 75, 100].map(mark => (
                    <div 
                      key={mark} 
                      className="flex flex-col items-center transition-all duration-300"
                      style={{
                        transform: skill.proficiency >= mark ? 'translateY(0)' : 'translateY(2px)',
                        opacity: skill.proficiency >= mark ? 1 : 0.4
                      }}
                    >
                      <div 
                        className="w-px transition-all duration-500"
                        style={{
                          height: skill.proficiency >= mark ? '8px' : '4px',
                          backgroundColor: skill.proficiency >= mark ? '#666' : '#222',
                          boxShadow: (skill.proficiency >= mark && isActive) ? '0 0 4px rgba(150,150,150,0.5)' : 'none'
                        }}
                      />
                      <span 
                        className="text-[9px] font-mono mt-1.5 transition-colors duration-300"
                        style={{
                          color: skill.proficiency >= mark ? '#666' : '#333'
                        }}
                      >
                        {mark}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative line with animation */}
              <div className="mt-8 flex items-center gap-3">
                <div 
                  className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transition-all duration-700"
                  style={{ 
                    width: isActive ? '100%' : '70%',
                    opacity: isActive ? 1 : 0.3
                  }}
                />
                <div 
                  className="w-1.5 h-1.5 bg-gray-600 rotate-45 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `rotate(45deg) ${isActive ? 'scale(1)' : 'scale(0)'}`,
                    boxShadow: isActive ? '0 0 8px rgba(150,150,150,0.5)' : 'none'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes continuousShimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes slideGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes breathe {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedProfessionalSkillBars;