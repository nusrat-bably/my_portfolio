'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResearchSection() {
  const [selectedPoster, setSelectedPoster] = useState<{ title: string; image: string } | null>(null);

  const research = [
    {
      title: 'Multimodal Speech Reconstruction for Bengali Stroke Patients',
      status: 'Ongoing · Final Year Design Project (Thesis)',
      description: 'Combining lip movements and audio signals to reconstruct fluent Bengali speech for stroke survivors through multimodal deep learning.',
      highlights: [
        'Developed deep learning-based system for Bengali speech reconstruction.',
        'Multimodal fusion pipeline using lip movement and degraded audio signals.',
        'Champion position in the FYDP poster competition.',
        'Poster-ready research with real-world accessibility focus.',
      ],
      posterImage: '/achieve2/res1.png',
    },
    {
      title: 'ShunoBondhu: A Voice Assistive App for Pedal Rickshaw Pullers',
      status: 'Ongoing Research',
      description: 'Human-centered computing solution enabling non-literate users to access local services through simple voice commands.',
      highlights: [
        'Designing a lightweight voice-assisted mobile application.',
        'Supports communication and everyday assistance use-cases.',
        'Built for low-literacy users with simple conversational interactions.',
        'Focused on field-friendly usability and adoption.',
      ],
       posterImage: '/achieve2/res2.png', 
    },
    {
      title: 'SmartBoardVision: Intelligent Classroom Visibility Enhancement',
      status: 'Ongoing Research',
      description: 'Deep learning and digital image processing research to improve classroom text visibility and board readability.',
      highlights: [
        'Built text visibility pipeline using YOLOv8, EAST, and CRAFT.',
        'Applied CLAHE and SRGAN for board image enhancement.',
        'Optimized for intelligent classroom assistance scenarios.',
        'Combines detection and enhancement in one research flow.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="research" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Research</span>
          </motion.h2>
        </motion.div>

        {/* Bento Research Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {research.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-2xl flex flex-col justify-between h-full overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex justify-end mb-4">
                  <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-[11px] font-bold text-teal-300 tracking-wide text-right">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[#a0a0a0] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {item.posterImage && (
                  <div 
                    onClick={() => setSelectedPoster({ title: item.title, image: item.posterImage! })}
                    className="relative mb-6 h-40 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/50 group/img transition-all duration-500 hover:border-teal-500/60 shadow-inner"
                  >
                    <img
                      src={item.posterImage}
                      alt={item.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-110 opacity-75 group-hover/img:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Research Poster</span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md transition-all group-hover/img:bg-teal-500 group-hover/img:border-teal-500 group-hover/img:shadow-[0_0_15px_rgba(20,184,166,0.6)]">
                      <span>View Poster</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6m-11 5L21 3M9 21H3v-6m11-5L3 21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#707070]">Key Contributions:</p>
                <ul className="space-y-2.5">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#a0a0a0] flex items-start gap-2.5 leading-normal">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedPoster && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoster(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#111111] p-3 shadow-[0_0_80px_rgba(0,0,0,0.9)] sm:p-5 cursor-default flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3 pt-1">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                      {selectedPoster.title} <span className="text-teal-300 font-medium">— Research Poster</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPoster(null)}
                    className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-teal-500 hover:text-white transition-all duration-200"
                    title="Close preview"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 flex max-h-[76vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/60 p-2 sm:p-4 border border-white/5">
                  <img
                    src={selectedPoster.image}
                    alt={selectedPoster.title}
                    className="max-h-[72vh] max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
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