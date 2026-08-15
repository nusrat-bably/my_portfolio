'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  const [status, setStatus] = useState(0);
  const messages = [
    "Currently building intelligent systems.",
    "Exploring computer vision.",
    "Working across AI & software.",
    "Turning research into useful systems."
  ];

  useEffect(() => {
    // Frequently changing messages every 2.5 seconds like a live slide ticker
    const interval = setInterval(() => setStatus((prev) => (prev + 1) % messages.length), 2500);
    return () => clearInterval(interval);
  }, [messages.length]);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section id="hero" className="relative flex flex-col pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#050505]">
      <HeroBackground />

      {/* CINEMATIC BACKGROUND ACCENT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }} 
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 pointer-events-none"
      >
        <Image 
          src="/guestbook/3.jpeg" 
          alt="Hero Cinematic Background" 
          fill 
          priority
          className="object-cover object-[12%_40%]"
        />
        {/* Dark overlays for readability and seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_90%)] z-10" />
      </motion.div>

      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-20 w-full">
        
        {/* MAIN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-16 items-center">
          
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
            
            <motion.h1 variants={item} className="text-4xl sm:text-5xl xl:text-[76px] font-black tracking-tight text-slate-100 leading-[1.05] mb-4 drop-shadow-xl mt-2">
              Nusrat Jahan<br />
              <span className="bg-gradient-to-r from-teal-100 via-teal-300 to-teal-600/80 bg-clip-text text-transparent drop-shadow-sm">Bably</span>
            </motion.h1>

            <motion.div variants={item} className="mb-4 border-l-2 border-teal-500/20 pl-4 py-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)] animate-pulse" />
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">Current Focus</p>
              </div>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={status} 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -5 }} 
                  transition={{ duration: 0.3 }}
                  className="text-base text-slate-200 font-light drop-shadow-md"
                >
                  &gt; {messages[status]}<span className="animate-pulse text-teal-500/70">_</span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={item} className="text-[14px] sm:text-[15px] leading-relaxed text-slate-300 max-w-[620px] font-light drop-shadow-lg">
              Research-driven software engineer exploring the intersection of AI, research, and intelligent systems. Focused on building scalable products where scientific inquiry meets real-world utility.
            </motion.p>

            {/* ALL THREE BOXES IN ONE LINE UNDER THE BIO */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 mt-6 w-full max-w-[620px]">
              
              {/* Box 1: Academic Record */}
              <div className="group relative rounded-xl border border-white/10 bg-[#050505]/50 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#050505]/70 cursor-default">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                <div className="relative z-10">
                  <h4 className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Academic Record</h4>
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-100 tracking-tight">3.90</span>
                      <span className="text-[9px] font-medium text-slate-400">/4.0</span>
                    </div>
                    <span className="text-[9px] text-slate-300 font-medium">UIU · CSE</span>
                  </div>
                </div>
              </div>

              {/* Box 2: Engineering */}
              <div className="group relative rounded-xl border border-white/10 bg-[#050505]/50 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#050505]/70 cursor-default">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                <div className="relative z-10 flex flex-col justify-center h-full py-0.5">
                  <h4 className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Engineering</h4>
                  <p className="text-xs font-medium text-slate-200 truncate">Full-Stack Development</p>
                </div>
              </div>

              {/* Box 3: Research */}
              <div className="group relative rounded-xl border border-white/10 bg-[#050505]/50 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#050505]/70 cursor-default">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                <div className="relative z-10 flex flex-col justify-center h-full py-0.5">
                  <h4 className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Research</h4>
                  <p className="text-xs font-medium text-slate-200 truncate">AI & Deep Learning</p>
                </div>
              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Left clean and open to highlight the background art */}
          <div className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
}