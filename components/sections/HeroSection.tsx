'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  const [status, setStatus] = useState(0);
  const messages = [
    "Currently building intelligent systems.",
    "exploring computer vision.",
    "working across AI & software.",
    "turning research into useful systems."
  ];

  useEffect(() => {
    const interval = setInterval(() => setStatus((prev) => (prev + 1) % messages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    // Reduced top padding (pt-16) to close the gap with the navbar
    // Increased bottom padding (pb-24) to give breathing room for floating UI elements
    <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center pt-16 pb-24 overflow-hidden">
      <HeroBackground />

      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Identity & Editorial Content */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
            
            <motion.div variants={item} className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-teal-500/70">
              SOFTWARE ENGINEERING · AI · RESEARCH
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl xl:text-[80px] font-black tracking-tight text-white leading-[0.95] mb-8">
              Nusrat Jahan<br />
              <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Bably</span>
            </motion.h1>

            {/* Living Status Line */}
            <motion.div variants={item} className="mb-8 border-l border-teal-500/30 pl-6 py-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">Live Status</p>
              </div>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={status} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="text-lg text-slate-200 font-light"
                >
                  &gt; {messages[status]}<span className="animate-pulse">_</span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={item} className="text-[16px] leading-relaxed text-slate-400 max-w-[480px] font-light">
              Research-driven software engineer exploring the intersection of AI, research, and intelligent systems. Focused on building scalable products where scientific inquiry meets real-world utility.
            </motion.p>
          </motion.div>

          {/* Evidence Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Academic Record Card */}
            <div className="group relative rounded-[2rem] border border-white/5 bg-[#0d0d12]/40 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#0d0d12]/60">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[2rem]" />
              <div className="relative z-10">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Academic Record</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">3.90</span>
                  <span className="text-sm font-medium text-slate-400">/ 4.00</span>
                </div>
                <p className="mt-2 text-xs text-slate-400 font-light">B.Sc. in CSE · United International University</p>
              </div>
            </div>

            {/* Engineering & Research Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative rounded-[1.5rem] border border-white/5 bg-[#0d0d12]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#0d0d12]/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Engineering</h4>
                <p className="text-sm font-medium text-slate-200">Full-Stack Development</p>
              </div>
              <div className="group relative rounded-[1.5rem] border border-white/5 bg-[#0d0d12]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-[#0d0d12]/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Research</h4>
                <p className="text-sm font-medium text-slate-200">AI & Deep Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Link href="#about" className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-600 hover:text-teal-500 transition-colors">
          Scroll to Explore
        </Link>
      </motion.div>
    </section>
  );
}