'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CatCompanion() {
  const [isSleeping, setIsSleeping] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expandedSection, setExpandedSection] = useState<'suggest' | 'connect' | null>('suggest');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const checkBangladeshTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        hour12: false,
      });
      const currentHour = parseInt(formatter.format(new Date()), 10);
      setIsSleeping(currentHour >= 2 && currentHour < 8);
    };

    checkBangladeshTime();
    const interval = setInterval(checkBangladeshTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05 }
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="fixed bottom-10 right-10 lg:bottom-12 lg:right-12 z-50 flex flex-col items-end pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto mb-5 w-[320px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#050505]/90 p-6 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
          >
            {/* Modal Glows */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal-500/10 blur-[50px]" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-[50px]" />

            <div className="relative z-10">
              
              {/* HEADER CONTENT: Dynamically swaps text based on Day/Night */}
              <div className="mb-6">
                <h4 className="flex items-center text-[22px] font-extrabold tracking-tight text-[#e5e5e5]">
                  {isSleeping ? 'Resting Mode' : 'Paws on Keyboard'} 
                  {!isSleeping && (
                    <motion.span 
                      animate={{ rotate: [0, 20, -10, 20, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }} 
                      className="ml-2 inline-block origin-bottom-right"
                    >
                      👋
                    </motion.span>
                  )}
                  {isSleeping && (
                    <span className="ml-2 inline-block text-teal-400 text-base">🌙</span>
                  )}
                </h4>
                <p className="mt-1 text-[13px] font-medium text-[#777777]">
                  {isSleeping 
                    ? "Bably is currently offline. Drop a message, and she’ll catch it by sunrise T_T " 
                    : "Online and active for the day. Let's connect or drop your feedback below! :)) "}
                </p>
              </div>

              {/* FEATURES ACCESSIBLE 24/7 (Day & Night) */}
              <div className="flex flex-col space-y-2">
                
                {/* --- NODE 1: SHARE FEEDBACK --- */}
                <div className="relative">
                  <AnimatePresence>
                    {expandedSection === 'suggest' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'calc(100% - 40px)', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute left-[23px] top-10 w-[2px] rounded-full bg-gradient-to-b from-teal-500/50 to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setExpandedSection(expandedSection === 'suggest' ? null : 'suggest')}
                    className="group relative z-10 flex w-full items-center gap-4 rounded-2xl p-2 transition-all hover:bg-white/[0.02]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center">
                      <svg className={`h-4 w-4 transition-all duration-300 ${expandedSection === 'suggest' ? 'text-teal-400 scale-110 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]' : 'text-white/20 group-hover:scale-105 group-hover:text-white/50'}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.5c-3.5 0-5.5-2.5-5.5-5.5 0-2.5 2-4.5 5.5-4.5s5.5 2 5.5 4.5c0 3-2 5.5-5.5 5.5z" />
                        <ellipse cx="6" cy="11" rx="2" ry="3" transform="rotate(-30 6 11)" />
                        <ellipse cx="10" cy="6" rx="2" ry="3" transform="rotate(-10 10 6)" />
                        <ellipse cx="14" cy="6" rx="2" ry="3" transform="rotate(10 14 6)" />
                        <ellipse cx="18" cy="11" rx="2" ry="3" transform="rotate(30 18 11)" />
                      </svg>
                    </div>
                    <span className={`text-sm font-bold tracking-wide transition-colors ${expandedSection === 'suggest' ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'}`}>
                      Share Feedback
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedSection === 'suggest' && (
                      <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="overflow-hidden pl-11 pr-2">
                        <div className="flex gap-3 pb-3 pt-2">
                          {/* WhatsApp */}
                          <motion.a 
                            variants={itemVariants} 
                            href="https://wa.me/8801828624088" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex h-14 flex-1 items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] transition-all duration-300 hover:scale-105 hover:bg-[#25D366]/20 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                          >
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                          </motion.a>
                          
                          {/* Email */}
                          <motion.a 
                            variants={itemVariants} 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nbably4088@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-14 flex-1 items-center justify-center rounded-xl border border-teal-400/40 bg-teal-400/10 text-teal-400 transition-all duration-300 hover:scale-105 hover:bg-teal-400/20 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                          >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- NODE 2: CONNECT --- */}
                <div className="relative">
                  <AnimatePresence>
                    {expandedSection === 'connect' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'calc(100% - 40px)', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute left-[23px] top-10 w-[2px] rounded-full bg-gradient-to-b from-teal-500/50 to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  <button 
                    onClick={() => setExpandedSection(expandedSection === 'connect' ? null : 'connect')}
                    className="group relative z-10 flex w-full items-center gap-4 rounded-2xl p-2 transition-all hover:bg-white/[0.02]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center">
                      <svg className={`h-4 w-4 transition-all duration-300 ${expandedSection === 'connect' ? 'text-teal-400 scale-110 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]' : 'text-white/20 group-hover:scale-105 group-hover:text-white/50'}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.5c-3.5 0-5.5-2.5-5.5-5.5 0-2.5 2-4.5 5.5-4.5s5.5 2 5.5 4.5c0 3-2 5.5-5.5 5.5z" />
                        <ellipse cx="6" cy="11" rx="2" ry="3" transform="rotate(-30 6 11)" />
                        <ellipse cx="10" cy="6" rx="2" ry="3" transform="rotate(-10 10 6)" />
                        <ellipse cx="14" cy="6" rx="2" ry="3" transform="rotate(10 14 6)" />
                        <ellipse cx="18" cy="11" rx="2" ry="3" transform="rotate(30 18 11)" />
                      </svg>
                    </div>
                    <span className={`text-sm font-bold tracking-wide transition-colors ${expandedSection === 'connect' ? 'text-white' : 'text-[#a0a0a0] group-hover:text-white'}`}>
                      Connect
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedSection === 'connect' && (
                      <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="overflow-hidden pl-11 pr-2">
                        <div className="flex gap-2 pb-3 pt-2">
                          
                          {/* GitHub */}
                          <motion.a 
                            variants={itemVariants} 
                            href="https://github.com/nubab4088" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-white/40 bg-white/5 text-[#e5e5e5] transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                          </motion.a>

                          {/* LinkedIn */}
                          <motion.a 
                            variants={itemVariants} 
                            href="https://www.linkedin.com/in/nusrat-jahan-bably" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#0077b5]/50 bg-[#0077b5]/10 text-[#0077b5] transition-all duration-300 hover:scale-105 hover:bg-[#0077b5]/20 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          </motion.a>

                          {/* Facebook */}
                          <motion.a 
                            variants={itemVariants} 
                            href="https://www.facebook.com/share/1SNRJvSv3V/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-[#1877F2]/50 bg-[#1877F2]/10 text-[#1877F2] transition-all duration-300 hover:scale-105 hover:bg-[#1877F2]/20 hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setTimeout(() => setExpandedSection('suggest'), 300); 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-[0_8px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md transition-colors hover:border-teal-400/50 group"
      >
        <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-[12px] transition-opacity duration-500 group-hover:opacity-100" />
        
        <AnimatePresence>
          {isSleeping && (
            <motion.div 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -15, x: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-1 right-0 text-[10px] font-extrabold text-teal-400"
            >
              Zzz
            </motion.div>
          )}
        </AnimatePresence>

        <svg viewBox="0 0 100 100" className="relative z-10 h-12 w-12 overflow-visible" style={{ filter: 'drop-shadow(0px 0px 3px rgba(45,212,191,0.4))' }}>
          <path d="M 25 80 C 25 65, 75 65, 75 80" fill="none" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" />
          <path d="M 72 75 C 95 75, 95 55, 82 55 C 75 55, 75 65, 80 65" fill="none" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" />
          <circle cx="50" cy="45" r="16" fill="#0a0a0a" stroke="#2dd4bf" strokeWidth="5" />
          <path d="M 38 34 L 40 15 L 48 29 Z" fill="#0a0a0a" stroke="#2dd4bf" strokeWidth="5" strokeLinejoin="round" />
          <path d="M 62 34 L 60 15 L 52 29 Z" fill="#0a0a0a" stroke="#2dd4bf" strokeWidth="5" strokeLinejoin="round" />
          
          {!isSleeping && (
            <motion.path 
              d="M 28 65 L 12 50" 
              stroke="#2dd4bf" 
              strokeWidth="5" 
              strokeLinecap="round"
              animate={{ rotate: [0, 25, -10, 25, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "28px 65px" }}
            />
          )}
          
          {isSleeping ? (
            <g>
              <line x1="42" y1="48" x2="47" y2="48" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="53" y1="48" x2="58" y2="48" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="52" r="1.5" fill="#2dd4bf" />
            </g>
          ) : (
            <g>
              <circle cx="44" cy="45" r="2.5" fill="#2dd4bf" />
              <circle cx="56" cy="45" r="2.5" fill="#2dd4bf" />
              <path d="M 47 50 Q 50 53, 53 50" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}