'use client';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030505]">
      {/* Static Atmospheric Bloom */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/[0.03] rounded-full blur-[150px]" />

      {/* Computational Field Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
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

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}