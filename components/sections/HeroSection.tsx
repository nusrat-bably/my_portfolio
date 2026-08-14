'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
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
    <section id="hero" className="relative flex flex-col pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#050505]">
      <HeroBackground />

      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
          
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
            
            <motion.div variants={item} className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-teal-400/80">
              SOFTWARE ENGINEERING · AI · RESEARCH
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl xl:text-[76px] font-black tracking-tight text-slate-100 leading-[1.05] mb-4">
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
                  className="text-base text-slate-200 font-light"
                >
                  &gt; {messages[status]}<span className="animate-pulse text-teal-500/70">_</span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={item} className="text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-[480px] font-light">
              Research-driven software engineer exploring the intersection of AI, research, and intelligent systems. Focused on building scalable products where scientific inquiry meets real-world utility.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="flex flex-col gap-3 w-full max-w-[480px] mx-auto lg:mx-0 mt-6 lg:mt-0"
          >
            <div className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-teal-500/30 hover:bg-white/[0.04]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[2rem]" />
              <div className="relative z-10">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Academic Record</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-100">3.90</span>
                  <span className="text-sm font-medium text-slate-500">/ 4.00</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400 font-light">B.Sc. in CSE · United International University</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="group relative rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-teal-500/30 hover:bg-white/[0.04]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Engineering</h4>
                <p className="text-xs sm:text-sm font-medium text-slate-200">Full-Stack Development</p>
              </div>
              <div className="group relative rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-teal-500/30 hover:bg-white/[0.04]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Research</h4>
                <p className="text-xs sm:text-sm font-medium text-slate-200">AI & Deep Learning</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Prompt styled exactly like the Download CV button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="flex justify-center mt-10 relative z-10">
          <Link 
            href="#about" 
            className="inline-flex relative items-center justify-center overflow-hidden rounded-full border border-teal-500/30 bg-teal-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-teal-300/90 backdrop-blur-md transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-500/10 hover:text-teal-100"
          >
            <span>Scroll to Explore</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}