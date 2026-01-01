"use client";
import React, { useState } from "react";

const LightSwitchCard: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#0a0a0a] overflow-hidden">
      {/* Content container */}
      <div className="h-screen flex flex-col items-center justify-center">
        
        {/* Ambient glow when light is on */}
        {isOn && (
          <>
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(192,192,192,0.15),transparent_60%)] pointer-events-none"
              style={{
                animation: 'fadeIn 0.5s ease-out'
              }}
            />
            
            {/* Light rays */}
            <div
              className="absolute top-[25%] w-[600px] h-[600px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(192, 192, 192, 0.2) 0%, transparent 70%)',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
          </>
        )}
        
        {/* Animated particles */}
        {isOn && (
          <>
            {[...Array(25)].map((_, i) => {
              const startX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800;
              const duration = Math.random() * 4 + 3;
              const delay = Math.random() * 2;
              
              return (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full blur-[1px]"
                  style={{
                    left: startX,
                    bottom: 0,
                    animation: `floatUp ${duration}s ease-out ${delay}s infinite`
                  }}
                />
              );
            })}
          </>
        )}
        
        {/* Ceiling attachment */}
        <div className="absolute top-0 w-16 h-8 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-b-lg shadow-xl border-b-2 border-neutral-700" />
        
        {/* Hanging wire */}
        <div
          className={`absolute top-8 w-[2px] h-[180px] origin-top transition-all duration-500 ${
            isOn 
              ? "bg-gradient-to-b from-neutral-700 via-gray-600/30 to-gray-400 shadow-[0_0_8px_rgba(192,192,192,0.4)]" 
              : "bg-gradient-to-b from-neutral-700 to-neutral-800"
          }`}
        />
        
        {/* Lamp housing with bulb */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Lamp shade/housing */}
          <div className={`relative w-32 h-24 transition-all duration-700 ${
            isOn ? "drop-shadow-[0_0_25px_rgba(192,192,192,0.6)]" : ""
          }`}>
            {/* Top cap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-t-lg" />
            
            {/* Lamp shade */}
            <div 
              className={`absolute top-3 w-full h-20 transition-all duration-700 ${
                isOn 
                  ? "bg-gradient-to-b from-gray-100 via-gray-50 to-white/90" 
                  : "bg-gradient-to-b from-neutral-800 via-neutral-900 to-black"
              }`}
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                boxShadow: isOn 
                  ? "inset 0 -10px 30px rgba(192, 192, 192, 0.5), 0 10px 50px rgba(192, 192, 192, 0.3)"
                  : "inset 0 -5px 15px rgba(0, 0, 0, 0.8)"
              }}
            >
              {/* Inner glow */}
              {isOn && (
                <div
                  className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent"
                  style={{
                    clipPath: "polygon(25% 5%, 75% 5%, 95% 95%, 5% 95%)",
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              )}
            </div>
            
            {/* Light bulb glow */}
            {isOn && (
              <>
                <div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-300/80 rounded-full blur-xl"
                  style={{
                    animation: 'bulbPulse 2s ease-in-out infinite'
                  }}
                />
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-100 rounded-full blur-md"
                  style={{
                    animation: 'bulbPulseSmall 1.5s ease-in-out infinite'
                  }}
                />
              </>
            )}
          </div>
          
          {/* Pull string */}
          <button
            aria-label="Toggle light"
            onClick={() => setIsOn((prev) => !prev)}
            className="mt-2 focus:outline-none relative group"
          >
            {/* String */}
            <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-600 to-neutral-700 mx-auto" />
            
            {/* Pull knob */}
            <div
              className={`
                w-8 h-10 rounded-full relative
                transition-all duration-300 cursor-pointer
                hover:scale-110 hover:-translate-y-0.5
                active:scale-95 active:translate-y-1
                ${isOn 
                  ? "bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 shadow-[0_0_20px_rgba(192,192,192,0.7)]" 
                  : "bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-800 shadow-lg"}
                border-2 ${isOn ? "border-gray-200" : "border-neutral-700"}
              `}
            >
              {/* Shine effect */}
              <div className={`absolute top-1 left-1 w-3 h-3 rounded-full ${
                isOn ? "bg-gray-100/60" : "bg-neutral-500/30"
              } blur-sm`} />
              
              {/* Ring detail */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-1 bg-neutral-800/30 rounded-full" />
            </div>
            
            {/* Hover hint */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 text-xs whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {isOn ? "Turn off" : "Pull the string"}
            </div>
          </button>
        </div>
        
        {/* Profile Card */}
        <div
          style={{
            boxShadow: isOn 
              ? "0 0 60px rgba(192, 192, 192, 0.4), 0 20px 80px rgba(192, 192, 192, 0.2), 0 30px 100px rgba(0, 0, 0, 0.5)"
              : "0 20px 60px rgba(0, 0, 0, 0.9), 0 10px 30px rgba(0, 0, 0, 0.8)",
            transition: 'all 0.7s ease-out'
          }}
          className={`
            mt-20 w-[400px] rounded-3xl p-10 text-center relative overflow-hidden
            backdrop-blur-sm
            transition-all duration-700
            ${isOn
              ? "bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/80 text-neutral-900 border-2 border-gray-200/60"
              : "bg-gradient-to-br from-neutral-950/80 via-black/90 to-neutral-950/80 text-neutral-600 border border-neutral-800/50"}
          `}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 transition-opacity duration-700 ${
              isOn ? "opacity-100 bg-[radial-gradient(circle_at_30%_40%,_rgba(192,192,192,0.4)_0%,transparent_50%)]" : "opacity-0"
            }`} />
            <div className={`absolute inset-0 transition-opacity duration-700 ${
              isOn ? "opacity-100 bg-[radial-gradient(circle_at_70%_70%,_rgba(192,192,192,0.3)_0%,transparent_50%)]" : "opacity-0"
            }`} />
          </div>
          
          {/* Profile image with effects - only visible when light is on */}
          <div 
            style={{
              transform: `scale(${isOn ? 1 : 0.9})`,
              opacity: isOn ? 1 : 0,
              transition: 'all 0.7s ease-out'
            }}
            className="relative mb-6 inline-block"
          >
            {isOn ? (
              <>
                <img
                  src="./Dhruv.jpg"
                  alt="Dhruv"
                  className="relative z-10 mx-auto h-36 w-36 rounded-full object-cover grayscale-0 ring-4 ring-gray-300/60 shadow-[0_0_40px_rgba(192,192,192,0.3)]"
                  style={{
                    animation: 'imageScale 3s ease-in-out infinite'
                  }}
                />
                
                {/* Rotating glow ring */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-conic from-gray-400 via-transparent via-transparent to-gray-300 blur-xl opacity-40"
                  style={{
                    animation: 'spin 10s linear infinite'
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-gray-200 to-transparent blur-lg opacity-30"
                  style={{
                    animation: 'spinReverse 15s linear infinite'
                  }}
                />
              </>
            ) : (
              <div className="relative z-10 mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-neutral-900 to-black ring-2 ring-neutral-800 shadow-2xl flex items-center justify-center">
                <svg 
                  className="w-16 h-16 text-neutral-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
            )}
          </div>
          
          <h1 
            style={{
              color: isOn ? "#18181b" : "#525252",
              opacity: isOn ? 1 : 0.4,
              transition: 'all 0.5s ease-out'
            }}
            className="text-4xl font-bold mb-3 relative z-10 tracking-tight"
          >
            {isOn ? "Dhruv Khade" : "Turn on the light"}
          </h1>
          
          <p
            style={{
              opacity: isOn ? 1 : 0.5,
              transition: 'all 0.5s ease-out 0.2s'
            }}
            className={`text-base mt-4 relative z-10 leading-relaxed font-medium ${
              isOn ? "text-neutral-700" : "text-neutral-600"
            }`}
          >
            {isOn 
              ? "AI powered full Stack Developer" 
              : "Illuminate to view portfolio"}
          </p>
          
          {/* Decorative sparkles */}
          {isOn && (
            <>
              {[
                { top: "1rem", right: "1.5rem", size: "w-2 h-2", delay: 0.3 },
                { bottom: "1.5rem", left: "1.5rem", size: "w-3 h-3", delay: 0.4 },
                { top: "3rem", left: "2rem", size: "w-1.5 h-1.5", delay: 0.5 },
                { top: "50%", right: "1rem", size: "w-2 h-2", delay: 0.6 },
              ].map((spark, i) => (
                <div
                  key={i}
                  className={`absolute ${spark.size} bg-gray-400 rounded-full shadow-lg shadow-gray-400/50`}
                  style={{ 
                    top: spark.top, 
                    right: spark.right, 
                    bottom: spark.bottom, 
                    left: spark.left,
                    animation: `sparkle 2s ease-in-out ${spark.delay}s infinite`
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.5; transform: scale(1); }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        
        @keyframes bulbPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        
        @keyframes bulbPulseSmall {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes imageScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          25% { transform: scale(1) rotate(180deg); opacity: 1; }
          75% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LightSwitchCard;