'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AchievementsSection() {
  // State to handle the full-screen proof image lightbox modal
  const [selectedProof, setSelectedProof] = useState<{ title: string; image: string } | null>(null);

  const achievements = [
    { 
      title: 'Champion — FYDP at CSE Project show', 
      description: 'Final Year Design Project champion recognition.',
      proofImage: '/achieve2/fydp.jpeg',
    },
    { 
      title: 'Champion — Intra University Chess Competition', 
      description: 'Secured first position in university chess competition.',
      proofImage: '/achieve2/chess.jpeg',
    },
    {
      title: 'Academic Scholarship Recipient',
      description: 'Earned 100% (5 times), 50% (3 times), and 25% (3 times) tuition waivers based on academic performance.',
      // proofImage: '/achieve/scholarship.jpeg', <-- Uncomment and add path when ready!
    },
    {
      title: 'Champion — 1st Mirror Inter College National Debate Competition',
      description: 'National-level debate champion.',
      // proofImage: '/achieve2/debate.jpeg',
    },
    {
      title: 'Participant — National High School Programming Contest (ICT Division)',
      description: 'Participated in national programming competition track.',
      proofImage: '/achieve2/cert.png',
    },
    { 
      title: 'Teaching & Mentoring Contributions', 
      description: 'Consistent support in labs, assessments, and student guidance.',
      proofImage: '/achieve2/uga.png',
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
    <section id="achievements" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      {/* MATCHED CONTAINER: max-w-7xl ensures exact left-edge alignment */}
      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Awards &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Achievements</span>
          </motion.h2>
        </motion.div>

        {/* Bento Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-2xl flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Subtle hover gradient bloom */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-teal-300 transition-colors">
                  {achievement.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-[#a0a0a0] leading-relaxed font-normal">
                  {achievement.description}
                </p>

                {/* VERIFIED PROOF THUMBNAIL SHOWCASE */}
                {achievement.proofImage && (
                  <div 
                    onClick={() => setSelectedProof({ title: achievement.title, image: achievement.proofImage! })}
                    className="relative mt-6 h-40 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/50 group/img transition-all duration-500 hover:border-teal-500/60 shadow-inner"
                  >
                    <img
                      src={achievement.proofImage}
                      alt={achievement.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-110 opacity-75 group-hover/img:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Live Status Badge: Verified Proof */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified Proof</span>
                    </div>

                    {/* Expand/View Pill Button */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md transition-all group-hover/img:bg-teal-500 group-hover/img:border-teal-500 group-hover/img:shadow-[0_0_15px_rgba(20,184,166,0.6)]">
                      <span>View Artifact</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6v6m-11 5L21 3M9 21H3v-6m11-5L3 21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Index Numbering Anchor */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#707070]">
                <span>0{idx + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-teal-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FULLSCREEN LIGHTBOX MODAL (ZERO CROPPING) */}
        <AnimatePresence>
          {selectedProof && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProof(null)}
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
                {/* Modal Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3 pt-1">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                      {selectedProof.title} <span className="text-teal-400 font-medium">— Verified Artifact</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProof(null)}
                    className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-teal-500 hover:text-white transition-all duration-200"
                    title="Close preview"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Image Display (Zero Cropping with object-contain) */}
                <div className="mt-4 flex max-h-[76vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/60 p-2 sm:p-4 border border-white/5">
                  <img
                    src={selectedProof.image}
                    alt={selectedProof.title}
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