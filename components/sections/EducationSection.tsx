'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="education" className="bg-[#050508] pt-2 pb-12 relative overflow-hidden font-sans selection:bg-[#52b7a4]/30">
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-500/5 blur-[120px] z-0" />

      <div className="container-max mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-8 flex flex-col items-center text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#bce0d5] to-[#52b7a4]">Background</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-10 h-1 bg-[#52b7a4] rounded-full mt-3 opacity-80" />
        </motion.div>

        {/* ─── THE DIGITAL STICKY NOTE ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative w-full flex justify-center"
        >
          {/* Main Note Container */}
          <motion.div
            variants={itemVariants}
            className="w-full relative bg-[#0d0d12] border border-white/10 rounded-[1.5rem] rounded-br-none shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-5 sm:p-8 lg:p-10 rotate-[-1deg] transition-transform hover:rotate-0 hover:y-[-2px] duration-500"
          >
            {/* The Safety Pin / Bulb Pin Graphic */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_6px_6px_rgba(0,0,0,0.6)]">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-15deg]">
                {/* Safety Pin Wire Body */}
                <path d="M18 40C25.732 40 32 33.732 32 26C32 20.4772 28.5228 15.75 23.6 13.5V6C23.6 3.79086 21.8091 2 19.6 2H16.4C14.1909 2 12.4 3.79086 12.4 6V13.5C7.47715 15.75 4 20.4772 4 26C4 33.732 10.268 40 18 40Z" stroke="#a0a0a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#16161c" fillOpacity="0.8" />
                {/* Pin Head / Clasp */}
                <rect x="13" y="4" width="10" height="5" rx="1.5" fill="#52b7a4" stroke="#2d7a6b" strokeWidth="1.5" />
                {/* Metallic highlight */}
                <circle cx="18" cy="28" r="2" fill="#52b7a4" fillOpacity="0.6" />
              </svg>
            </div>

            {/* The Folded Corner (Bottom Right) */}
            <div 
              className="absolute bottom-[-1px] right-[-1px] w-12 h-12 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top left, #050508 50%, transparent 50.5%)' }}
            />
            <div 
              className="absolute bottom-0 right-0 w-12 h-12 z-20 pointer-events-none shadow-[-4px_-4px_10px_rgba(0,0,0,0.3)] rounded-tl-xl border-t border-l border-white/20"
              style={{ background: 'linear-gradient(to bottom right, #1a1a24 0%, #0d0d12 50%, transparent 50.5%)' }}
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
              
              {/* ─── BSC INFORMATION ─── */}
              <div className="flex flex-row items-center justify-between gap-4">
                
                <div className="flex flex-col items-start flex-1 min-w-0">
                  <span className="inline-block px-2 py-1 rounded-sm bg-[#52b7a4]/10 border border-[#52b7a4]/20 text-[#52b7a4] text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 whitespace-nowrap">
                    Bachelor of Science
                  </span>
                  
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tighter leading-tight mb-1 truncate w-full">
                    Computer Science & Engineering
                  </h3>
                  
                  <p className="text-[10px] sm:text-[13px] lg:text-[14.5px] text-slate-300 font-medium mb-3 truncate w-full">
                    United International University (UIU), <span className="text-slate-500 font-normal">Dhaka, Bangladesh</span>
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-[#52b7a4] font-bold text-[10px] sm:text-xs drop-shadow-[0_0_12px_rgba(82,183,164,0.9)] animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#52b7a4] shadow-[0_0_10px_rgba(82,183,164,1)]" />
                    Graduated: Feb 20, 2026
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="bg-[#09090b] border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col shrink-0 min-w-[90px] sm:min-w-[120px] shadow-inner items-end text-right">
                  <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                    Final CGPA
                  </span>
                  <div className="flex items-baseline gap-0.5 sm:gap-1">
                    <span className="text-xl sm:text-3xl font-black text-white tracking-tighter">
                      3.90
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#52b7a4]">
                      / 4.00
                    </span>
                  </div>
                </div>
              </div>

              {/* ─── AESTHETIC DIVIDER ─── */}
              <div className="relative w-full py-1 sm:py-2 flex items-center justify-center opacity-30">
                <div className="absolute w-full h-[2px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgyPSIxMDAlIiB5MT0iMSIgeTI9IjEiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDYiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] pointer-events-none" />
              </div>

              {/* ─── HSC & SSC CARDS ─── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 relative z-10">
                
                {/* HSC Card */}
                <div className="bg-[#09090b]/50 border border-white/5 rounded-xl p-3 sm:p-5 flex flex-row items-start justify-between group/card hover:bg-[#09090b] hover:border-white/10 transition-colors duration-300">
                  <div className="flex flex-col pr-2 min-w-0">
                    <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2 block whitespace-nowrap">
                      Higher Secondary (HSC)
                    </span>
                    <h4 className="text-[11px] sm:text-base font-bold text-white tracking-tight leading-snug mb-1">
                      Ispahani Cantonment Public School & College
                    </h4>
                    <p className="text-[9px] sm:text-xs text-slate-500 font-medium truncate">
                      Cumilla Cantonment
                    </p>
                  </div>

                  {/* Rectangle GPA Box */}
                  <div className="shrink-0 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/10 bg-[#050508] flex flex-col items-center justify-center shadow-inner group-hover/card:border-[#52b7a4]/50 transition-colors">
                    <span className="text-[11px] sm:text-sm font-black text-white leading-none">
                      4.83 <span className="text-[8px] sm:text-[10px] font-bold text-slate-500">/5.00</span>
                    </span>
                  </div>
                </div>

                {/* SSC Card */}
                <div className="bg-[#09090b]/50 border border-white/5 rounded-xl p-3 sm:p-5 flex flex-row items-start justify-between group/card hover:bg-[#09090b] hover:border-white/10 transition-colors duration-300">
                  <div className="flex flex-col pr-2 min-w-0">
                    <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2 block whitespace-nowrap">
                      Secondary & Junior
                    </span>
                    <h4 className="text-[11px] sm:text-base font-bold text-white tracking-tight leading-snug mb-1">
                      Secondary & Junior School Certificate
                    </h4>
                    <p className="text-[9px] sm:text-xs text-slate-500 font-medium truncate">
                      Science Background
                    </p>
                  </div>

                  {/* Rectangle GPA Box with SSC/JSC detail */}
                  <div className="shrink-0 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/10 bg-[#050508] flex flex-col items-center justify-center shadow-inner group-hover/card:border-[#52b7a4]/50 transition-colors">
                    <span className="text-[11px] sm:text-sm font-black text-white leading-none">
                      5.00 <span className="text-[8px] sm:text-[10px] font-bold text-slate-500">/5.00</span>
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-bold text-slate-500 mt-1 uppercase tracking-widest">
                      SSC: 5 · JSC: 5
                    </span>
                  </div>
                </div>

              </div>
              
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}