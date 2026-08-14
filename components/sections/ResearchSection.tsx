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
      supervisor: {
        name: 'Dr. Mohammad Nurul Huda',
        link: 'https://cse.uiu.ac.bd/faculty/mnh/',
      },
      metadata: ['MULTIMODAL AI', 'BENGALI SPEECH', 'DEEP LEARNING'],
      badge: 'FYDP POSTER COMPETITION · CHAMPION',
      posterImage: '/achieve2/res1.png',
    },
    {
      id: '02',
      title: 'ShunoBondhu: A Voice Assistive App for Pedal Rickshaw Pullers',
      status: 'ONGOING RESEARCH',
      description: 'A human-centered computing solution enabling non-literate users to access local services through simple conversational voice commands.',
      supervisor: {
        name: 'Dr. Novia Nurain',
        link: 'https://cse.buet.ac.bd/faculty/faculty_detail/nnurain',
      },
      metadata: ['HCI', 'VOICE ASSISTANCE', 'ACCESSIBILITY'],
      badge: null,
      posterImage: '/achieve2/res2.png', 
    },
    {
      id: '03',
      title: 'SmartBoardVision: Intelligent Classroom Visibility Enhancement',
      status: 'ONGOING RESEARCH',
      description: 'Digital image processing and deep learning research to dramatically improve classroom text visibility and board readability.',
      supervisor: null,
      metadata: ['COMPUTER VISION', 'IMAGE PROCESSING', 'SMART CLASSROOMS'],
      badge: null,
      posterImage: null, 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="research" className="bg-[#050505] pt-12 pb-16 relative overflow-hidden font-sans">
      
      {/* Container aligned to max-w-7xl matching all previous sections */}
      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* CENTERED SECTION HEADER WITH GRADIENT TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Research <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Archive</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-4 h-[1px] w-24 bg-teal-500/50" />
        </motion.div>

        {/* OVERLAPPING GRID RESEARCH LIST - Matching Projects Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-20"
        >
          {research.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const hasPoster = Boolean(item.posterImage);

            if (!hasPoster) {
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="relative grid grid-cols-12 gap-0 items-center"
                >
                  <div className="col-span-10 col-start-2 bg-[#112240] p-6 sm:p-8 md:p-10 rounded-md shadow-xl text-left relative z-20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-teal-400 font-mono text-[11px] sm:text-[13px]">
                        {item.status}
                      </span>
                      <span className="font-mono text-xs text-teal-400/50">{item.id}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] sm:text-[13px] text-slate-400">
                      {item.metadata.map((tag, i) => (
                        <li key={i} className="whitespace-nowrap border border-white/10 px-2.5 py-1 rounded-sm bg-black/20">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Supervisor (If added later to text-only items) */}
                    {item.supervisor && (
                      <div className="mt-4 pointer-events-auto">
                        <p className="text-[12px] sm:text-[13px] text-slate-400 font-light">
                          Supervisor:{' '}
                          <a 
                            href={item.supervisor.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-300 hover:text-teal-400 transition-colors font-medium inline-flex items-center gap-1 group/link"
                          >
                            {item.supervisor.name}
                            <svg className="w-3.5 h-3.5 text-teal-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative grid grid-cols-12 gap-0 items-center"
              >
                
                {/* ─── POSTER IMAGE CONTAINER ─── */}
                <div 
                  className={`relative col-span-7 row-span-full z-10 group ${
                    isEven ? 'col-start-1' : 'col-start-6'
                  }`}
                >
                  <div 
                    onClick={() => setSelectedPoster({ title: item.title, image: item.posterImage! })}
                    className="block relative aspect-[16/10] rounded-md overflow-hidden bg-[#0f1110] shadow-lg group-hover:shadow-2xl z-10 transition-shadow duration-300 cursor-pointer"
                  >
                    {/* Teal Tint Overlay - disappears on hover */}
                    <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply transition-opacity duration-300 ease-out group-hover:opacity-0 z-10 pointer-events-none" />
                    
                    <img
                      src={item.posterImage!}
                      alt={item.title}
                      className="w-full h-full block object-cover object-top transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* View Poster Indicator */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <div className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-2 rounded-lg border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40">
                        <span>View Poster</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── EDITORIAL TEXT / CONTENT ─── */}
                <div 
                  className={`relative col-span-6 row-span-full flex flex-col justify-center z-20 pointer-events-none items-start text-left max-w-xl ${
                    isEven 
                      ? 'col-start-7 items-end text-right' 
                      : 'col-start-1'
                  }`}
                >
                  {/* Status (Overline) */}
                  <p className="text-teal-400 font-mono text-[10px] sm:text-[12px] mb-1.5 pointer-events-auto">
                    {item.status}
                  </p>
                  
                  {/* Research Title with controlled line break so 'for' stays cleanly on the second line */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 mb-3 sm:mb-4 pointer-events-auto leading-snug">
                    {idx === 0 ? (
                      <>Multimodal Speech Reconstruction <br className="hidden sm:inline" />for Bengali Stroke Patients</>
                    ) : idx === 1 ? (
                      <>ShunoBondhu: A Voice Assistive App <br className="hidden sm:inline" />for Pedal Rickshaw Pullers</>
                    ) : (
                      item.title
                    )}
                  </h3>

                  {/* Dark Blue Floating Description Box */}
                  <div className="bg-[#112240] p-4 sm:p-6 md:p-7 rounded-md shadow-xl text-slate-300 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed mb-4 sm:mb-5 w-full pointer-events-auto transition-shadow hover:shadow-2xl">
                    {item.description}
                  </div>

                  {/* Metadata / Tags */}
                  <ul className={`flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] sm:text-[12px] text-slate-400 mb-4 pointer-events-auto justify-start ${
                    isEven ? 'justify-end' : ''
                  }`}>
                    {item.metadata.map((tag, i) => (
                      <li key={i} className="whitespace-nowrap">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Optional Badge */}
                  {item.badge && (
                    <div className={`pointer-events-auto inline-flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 rounded-sm backdrop-blur-sm mb-4 justify-start ${
                      isEven ? 'justify-end' : ''
                    }`}>
                      <span className="text-sm">🏆</span>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Supervisor Line - Moved to End with teal icon color */}
                  {item.supervisor && (
                    <div className={`pointer-events-auto flex items-center ${isEven ? 'justify-end' : 'justify-start'} w-full`}>
                      <p className="text-[12px] sm:text-[13px] text-slate-400 font-light">
                        Supervisor:{' '}
                        <a 
                          href={item.supervisor.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-300 hover:text-teal-400 transition-colors font-medium inline-flex items-center gap-1 group/link"
                        >
                          {item.supervisor.name}
                          <svg className="w-3.5 h-3.5 text-teal-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </p>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── FULLSCREEN POSTER LIGHTBOX MODAL ─── */}
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

                {/* Inner Image Container */}
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