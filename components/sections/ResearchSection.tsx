'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResearchSection() {
  const [selectedPoster, setSelectedPoster] = useState<{ title: string; image: string } | null>(null);

  // Prevent background scrolling when modal is open to keep the user on the exact same plane
  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPoster]);

  const research = [
    {
      id: '01',
      title: 'Multimodal Speech Reconstruction for Bengali Stroke Patients',
      status: 'FINAL YEAR THESIS (COMPLETED)',
      description: 'Reconstructing fluent Bengali speech for stroke survivors through the fusion of lip movements and degraded audio signals.',
      metadata: ['MULTIMODAL AI', 'BENGALI SPEECH', 'DEEP LEARNING'],
      badge: 'FYDP POSTER COMPETITION · CHAMPION',
      posterImage: '/achieve2/res1.png',
      layout: 'image-right',
    },
    {
      id: '02',
      title: 'ShunoBondhu: A Voice Assistive App for Pedal Rickshaw Pullers',
      status: 'ONGOING RESEARCH',
      description: 'A human-centered computing solution enabling non-literate users to access local services through simple conversational voice commands.',
      metadata: ['HCI', 'VOICE ASSISTANCE', 'ACCESSIBILITY'],
      badge: null,
      posterImage: '/achieve2/res2.png', 
      layout: 'image-left',
    },
    {
      id: '03',
      title: 'SmartBoardVision: Intelligent Classroom Visibility Enhancement',
      status: 'ONGOING RESEARCH',
      description: 'Digital image processing and deep learning research to dramatically improve classroom text visibility and board readability.',
      metadata: ['COMPUTER VISION', 'IMAGE PROCESSING', 'SMART CLASSROOMS'],
      badge: null,
      posterImage: null, 
      layout: 'text-only',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="research" className="bg-[#050508] pt-8 pb-16 relative overflow-hidden font-sans selection:bg-teal-500/30">
      
      {/* Editorial Background Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-[0.02] z-0">
        <div className="h-full w-px bg-white mx-[15%]" />
        <div className="h-full w-px bg-white mx-[15%]" />
      </div>

      <div className="container-max mx-auto max-w-5xl px-6 relative z-10">
        
        {/* Simple Centered Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10 flex flex-col items-center justify-center text-center border-b border-white/5 pb-8"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-[0.9]">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300">Archive</span>
          </motion.h2>
        </motion.div>

        {/* Editorial Research List - Tighter Vertical Spacing */}
        <div className="space-y-12 md:space-y-16">
          
          {/* ─────────────────────────────────────────────────────────
              01 - THESIS (Image Right)
          ───────────────────────────────────────────────────────── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-10"
          >
            {/* Text Content */}
            <div className="w-full lg:w-1/2 relative z-10 flex flex-col order-2 lg:order-1 pr-0 lg:pr-6">
              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-teal-400 mb-3">
                {research[0].status}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-[1.1] mb-3">
                {research[0].title}
              </h3>
              <p className="text-sm text-[#999] leading-relaxed font-light mb-5">
                {research[0].description}
              </p>
              
              {/* Metadata */}
              <div className="flex flex-wrap gap-2 mb-5">
                {research[0].metadata.map(tag => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[8px] uppercase tracking-widest text-white/50 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="inline-flex self-start items-center gap-2 border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                <span className="text-base">🏆</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400">
                  {research[0].badge}
                </span>
              </div>
            </div>

            {/* Poster / Visual */}
            <div className="w-full lg:w-1/2 relative z-10 order-1 lg:order-2">
              <div 
                onClick={() => setSelectedPoster({ title: research[0].title, image: research[0].posterImage! })}
                className="group relative w-full aspect-[4/3] bg-[#0c0c10] border border-white/10 cursor-pointer overflow-hidden rounded-sm flex items-center justify-center p-1.5"
              >
                <img 
                  src={research[0].posterImage!} 
                  alt="Thesis Poster Preview" 
                  className="w-full h-full object-cover object-top opacity-95 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-500" />
                
                {/* Transparent & White Text Modern Button */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-black/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
                    <span>View Poster</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* ─────────────────────────────────────────────────────────
              02 - SHUNOBONDHU (Image Left)
          ───────────────────────────────────────────────────────── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-10"
          >
            {/* Poster / Visual */}
            <div className="w-full lg:w-5/12 relative z-10 order-1 lg:order-1">
               <div 
                onClick={() => setSelectedPoster({ title: research[1].title, image: research[1].posterImage! })}
                className="group relative w-full aspect-[4/3] mx-auto bg-[#0c0c10] border border-white/10 cursor-pointer overflow-hidden rounded-sm flex items-center justify-center p-1.5"
              >
                <img 
                  src={research[1].posterImage!} 
                  alt="ShunoBondhu Poster Preview" 
                  className="w-full h-full object-cover object-top opacity-95 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-500" />
                
                {/* Transparent & White Text Modern Button */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-black/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
                    <span>View Poster</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-7/12 relative z-10 flex flex-col order-2 lg:order-2 lg:pl-6">
              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-[#a855f7] mb-3">
                {research[1].status}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-[1.1] mb-3">
                {research[1].title}
              </h3>
              <p className="text-sm text-[#999] leading-relaxed font-light mb-5 max-w-xl">
                {research[1].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {research[1].metadata.map(tag => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[8px] uppercase tracking-widest text-white/50 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>


          {/* ─────────────────────────────────────────────────────────
              03 - SMARTBOARDVISION (Text Only)
          ───────────────────────────────────────────────────────── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="relative flex flex-col items-start"
          >
            {/* Text Flow */}
            <div className="w-full relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-l border-white/10 pl-6">
              <div className="max-w-2xl pr-4">
                <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-[#f59e0b] mb-3">
                  {research[2].status}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-[1.1] mb-3">
                  {research[2].title}
                </h3>
                <p className="text-sm text-[#999] leading-relaxed font-light mb-5">
                  {research[2].description}
                </p>
                <div className="flex flex-wrap gap-2 lg:justify-start shrink-0">
                  {research[2].metadata.map(tag => (
                    <span key={tag} className="border border-white/10 px-2 py-1 text-[8px] uppercase tracking-widest text-white/50 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── FULLSCREEN POSTER LIGHTBOX MODAL (FIXED TO FIT ENTIRE POSTER WITHOUT CROPPING) ─── */}
        <AnimatePresence>
          {selectedPoster && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedPoster(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[92vh] bg-[#050505] rounded-md border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col cursor-default overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 bg-[#0a0a0a] shrink-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-teal-400">Archived Artifact</span>
                    <span className="text-sm font-bold text-white tracking-tight leading-tight">
                      {selectedPoster.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPoster(null)}
                    className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white hover:text-black transition-all duration-300 ml-4 shrink-0"
                    aria-label="Close"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Inner Image Container - Fully contained, scrollable if tall, absolutely no cropping */}
                <div className="relative w-full overflow-auto bg-[#08080a] p-4 flex items-center justify-center flex-grow max-h-[82vh]">
                  <img
                    src={selectedPoster.image}
                    alt={selectedPoster.title}
                    className="max-w-full max-h-[76vh] object-contain mx-auto shadow-2xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}