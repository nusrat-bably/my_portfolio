'use client';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030505]">
      {/* 1. Large Atmospheric Bloom */}
      <motion.div 
        style={{ x: useMotionTemplate`${springX}px`, y: useMotionTemplate`${springY}px` }}
        className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-teal-500/[0.03] rounded-full blur-[180px]" 
      />

      {/* 2. Giant Ghost Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[40vw] font-black tracking-tighter text-white opacity-[0.025] blur-xl translate-y-10 rotate-[-5deg]">
          SYSTEM
        </span>
      </div>

      {/* 3. Generative Computational Field */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <motion.path
          d="M0,700 C300,500 500,900 1000,600"
          stroke="url(#gradient)"
          strokeWidth="0.5"
          fill="none"
          animate={{ d: ["M0,700 C300,500 500,900 1000,600", "M0,600 C300,800 500,400 1000,600"] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="1000">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 5. Minimal Artifacts */}
      <div className="absolute top-10 left-10 text-[8px] font-mono text-slate-800 tracking-[0.2em] pointer-events-none">FIELD_01 // INTEL</div>
      <div className="absolute bottom-10 right-10 text-[8px] font-mono text-slate-800 tracking-[0.2em] pointer-events-none">SYS_GEN // V.26</div>
    </div>
  );
}