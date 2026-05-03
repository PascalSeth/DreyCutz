'use client';

import React from 'react';

interface IconProps {
  className?: string;
}

// Custom SVG components for the falling items
const Scissors = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M8.5 8.5L21 21M8.5 15.5L21 3" strokeLinecap="round" />
    <circle cx="14.75" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Comb = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="2" y="6" width="20" height="4" rx="1" />
    <path d="M4 10v8m2-8v6m2-6v8m2-8v6m2-6v8m2-8v6m2-6v8m2-8v6" strokeLinecap="round" />
  </svg>
);

const GlobalBackground = () => {
  // Config for the falling scissors and combs
  const fallingItems = [
    { id: 1, type: 'scissors', left: '15%', delay: '0s', duration: '22s', rotStart: '-20deg', rotEnd: '180deg', size: 'w-12 h-12' },
    { id: 2, type: 'comb', left: '25%', delay: '5s', duration: '25s', rotStart: '45deg', rotEnd: '-45deg', size: 'w-16 h-16' },
    { id: 3, type: 'scissors', left: '45%', delay: '12s', duration: '20s', rotStart: '60deg', rotEnd: '240deg', size: 'w-10 h-10' },
    { id: 4, type: 'comb', left: '65%', delay: '2s', duration: '28s', rotStart: '-10deg', rotEnd: '90deg', size: 'w-14 h-14' },
    { id: 5, type: 'scissors', left: '80%', delay: '15s', duration: '24s', rotStart: '-60deg', rotEnd: '60deg', size: 'w-16 h-16' },
    { id: 6, type: 'comb', left: '88%', delay: '8s', duration: '21s', rotStart: '15deg', rotEnd: '-90deg', size: 'w-12 h-12' },
  ];

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] select-none bg-[#FAFAFA]"
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
    >
      {/* Dynamic Keyframes for falling animation */}
      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-20vh) rotate(var(--r-start)); opacity: 0; }
          10% { opacity: 0.12; }
          90% { opacity: 0.12; }
          100% { transform: translateY(120vh) rotate(var(--r-end)); opacity: 0; }
        }
        .falling-item {
          animation: floatDown var(--duration) linear var(--delay) infinite;
          opacity: 0;
          will-change: transform, opacity;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .ambient-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Blue Glows */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-blue-400/10 blur-[80px] rounded-full ambient-glow" 
        style={{ transform: 'translateZ(0)' }}
      />
      <div 
        className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-blue-500/5 blur-[70px] rounded-full ambient-glow [animation-delay:2s]" 
        style={{ transform: 'translateZ(0)' }}
      />
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-blue-300/10 blur-[70px] rounded-full ambient-glow [animation-delay:4s]" 
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#E0DCD1_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-[0.5]" 
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      />

      {/* Sweeping vintage bezier curve lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        <path d="M -100 200 Q 400 100 1200 400" fill="none" stroke="#D4CCC0" strokeWidth="1" />
        <path d="M -100 600 Q 600 800 1200 500" fill="none" stroke="#D4CCC0" strokeWidth="1" />
        <path d="M 0 350 Q 800 300 1200 650" fill="none" stroke="#D4CCC0" strokeWidth="1" strokeDasharray="10 5" opacity="0.5" />
      </svg>

      {/* Diagonal Hatching Textures (Corners) */}
      <svg width="0" height="0">
        <defs>
          <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#D4CCC0" strokeWidth="1.5" opacity="0.25" />
          </pattern>
        </defs>
      </svg>
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[url('#hatch')] [mask-image:radial-gradient(circle_at_top_left,black,transparent_60%)]" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[url('#hatch')] [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_60%)]" />

      {/* Falling Scissors and Combs */}
      {fallingItems.map((item) => (
        <div
          key={item.id}
          className="absolute text-[#362C26] falling-item"
          style={{
            left: item.left,
            '--r-start': item.rotStart,
            '--r-end': item.rotEnd,
            '--duration': item.duration,
            '--delay': item.delay,
          } as React.CSSProperties}
        >
          {item.type === 'scissors' ? (
            <Scissors className={`${item.size}`} />
          ) : (
            <Comb className={`${item.size}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default GlobalBackground;