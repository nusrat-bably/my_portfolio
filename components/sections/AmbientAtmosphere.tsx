'use client';

import { motion } from 'framer-motion';

export default function AmbientAtmosphere() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050607]">
      {/* 1. Large Atmospheric Bloom */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px]" />

      {/* 2. Computational Field (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
        <motion.path
          d="M0,500 C200,300 400,700 600,500 C800,300 1000,500 1000,500"
          stroke="url(#gradient)"
          strokeWidth="0.5"
          fill="none"
          animate={{ d: ["M0,500 C200,300 400,700 600,500 C800,300 1000,500 1000,500", "M0,500 C200,700 400,300 600,500 C800,700 1000,500 1000,500"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="1000">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Grain Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 4. Technical Artifacts */}
      <div className="absolute top-10 left-10 text-[8px] font-mono text-slate-800 tracking-[0.2em]">FIELD_01 // INTEL</div>
      <div className="absolute bottom-10 right-10 text-[8px] font-mono text-slate-800 tracking-[0.2em]">SYS_GEN // V.26</div>
    </div>
  );
}