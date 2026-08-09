'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center pt-12 pb-24 overflow-hidden">
      
      {/* Background Glow Effects - Kept subtle to let the cards pop */}
      <div className="absolute top-1/4 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      
      {/* Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        <img
          src="/back.jpeg"
          alt="Background Texture"
          aria-hidden="true"
          className="h-full w-full max-w-[1400px] object-contain object-center -translate-x-16 md:-translate-x-24 lg:-translate-x-40 opacity-[0.18] mix-blend-overlay grayscale-[25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 xl:gap-16 items-center w-full">
          
          {/* LEFT COLUMN: Typography & Actions */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="flex flex-col items-start w-full"
          >
            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              Nusrat Jahan <br />
              <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/70 bg-clip-text text-transparent">
                Bably
              </span>
            </motion.h1>

            <motion.h2 variants={item} className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-teal-300 mb-6">
              Research-Driven Software Engineer
            </motion.h2>

            <motion.p variants={item} className="text-[15px] sm:text-base leading-relaxed text-slate-300 mb-8 max-w-[540px] lg:pr-8 font-light">
              Computer science graduate exploring the intersection of AI, research, and full-stack engineering. Focused on building scalable systems where intelligence meets usability, translating scientific inquiry into real-world impact.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN: Dimensional Card Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-5 w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Top Card: Academic Record */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d12]/60 p-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:border-emerald-500/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/15 blur-[50px] transition-all duration-500 group-hover:bg-emerald-500/25 pointer-events-none" />
              
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/80 mb-2">Academic Record</h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-light tracking-tight text-white">3.90</span>
                    <span className="text-sm font-medium text-slate-400">/ 4.00</span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-400">B.Sc. Computer Science & Engineering · UIU</p>
                </div>
                
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-200 backdrop-blur-md shadow-inner">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              
              {/* Domain 1: Engineering */}
              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:border-teal-500/30">
                <div className="absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-teal-500/15 blur-[40px] transition-all duration-500 group-hover:bg-teal-500/25 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Engineering</h4>
                  <p className="text-[13px] font-medium text-white">Full-Stack Systems</p>
                </div>
              </div>

              {/* Domain 2: Research Area */}
              <div className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:border-indigo-500/30">
                <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-indigo-500/15 blur-[40px] transition-all duration-500 group-hover:bg-indigo-500/25 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Research Area</h4>
                  <p className="text-[13px] font-medium text-white">AI & Deep Learning</p>
                </div>
              </div>
            </div>

            {/* Bottom Card: Philosophy */}
            <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d12]/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Engineering Philosophy</h3>
              <p className="text-[13px] font-light italic leading-relaxed text-slate-300">
                "I like understanding the problem first, questioning what can be improved, and building systems that are clear, thoughtful, and purposeful."
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
      >
        <Link 
          href="#about"
          className="group flex w-max items-center gap-3 rounded-full border border-white/10 bg-[#050505]/40 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] shadow-lg"
        >
          {/* Restored the subtle teal dot with a ping animation */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#888] transition-colors group-hover:text-white">
            Scroll to Explore
          </span>
        </Link>
      </motion.div>

    </section>
  );
}