'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Inner component to handle the image slider cleanly
function CardSlider({ images, onExpand }: { images: string[], onExpand: (idx: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full bg-[#f4f4f4] border-b border-black/10 overflow-hidden group/slider flex items-center justify-center">
      <img
        src={images[currentIndex]}
        alt="Achievement"
        onClick={() => onExpand(currentIndex)}
        // object-contain ensures absolutely no zooming or cropping
        className="w-full h-full object-contain cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
      />
      
      {/* Slider Controls (Only visible if more than 1 image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/90 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition-all backdrop-blur-sm z-10"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/90 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition-all backdrop-blur-sm z-10"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <div key={i} className={`h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full transition-all shadow-sm ${i === currentIndex ? 'bg-[#52b7a4] w-2 sm:w-3' : 'bg-white/70'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function AchievementsSection() {
  const [selectedProof, setSelectedProof] = useState<{ title: string; images: string[], activeIndex: number } | null>(null);

  const achievements = [
    { 
      title: 'FYDP CHAMPION', 
      description: 'CSE Project Show Champion',
      images: ['/achieve2/fydp.jpeg', '/achieve2/fydp2.jpg'],
    },
    { 
      title: 'CHESS CHAMPION', 
      description: 'Intra University Competition',
      images: ['/achieve2/chess.jpeg'],
    },
    {
      title: 'ACADEMIC SCHOLARSHIP',
      description: '11 Tuition Waivers Earned',
      images: ['/achieve2/scholarship.png'],
    },
    { 
      title: 'TEACHING & MENTORING', 
      description: 'Labs, Assessments & Support',
      images: ['/achieve2/uga.png', '/achieve2/uga2.png'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  // Modal handlers
  const nextModalImage = () => {
    if (selectedProof) {
      setSelectedProof({
        ...selectedProof,
        activeIndex: (selectedProof.activeIndex + 1) % selectedProof.images.length
      });
    }
  };

  const prevModalImage = () => {
    if (selectedProof) {
      setSelectedProof({
        ...selectedProof,
        activeIndex: selectedProof.activeIndex === 0 ? selectedProof.images.length - 1 : selectedProof.activeIndex - 1
      });
    }
  };

  return (
    <section id="achievements" className="bg-[#050508] pt-16 pb-24 relative overflow-hidden font-sans selection:bg-[#52b7a4]/30">
      
      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Layout: Top-to-bottom instead of side-by-side */}
        <div className="flex flex-col items-center gap-10">
          
          {/* ─── CENTERED TITLE ─── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="w-full flex flex-col items-center text-center relative"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-[#bce0d5] to-[#52b7a4] bg-clip-text text-transparent">
                Awards & Achievements
              </span>
            </motion.h2>
          </motion.div>


          {/* ─── THE BOARD WITH 4 CARDS IN ONE LINE ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full relative"
          >
            {/* The Dark Board Box */}
            <div className="relative w-full rounded-[1.5rem] bg-[#09090b] border border-white/5 p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Subtle board sparkles */}
              <svg className="absolute top-4 left-4 w-4 h-4 text-[#52b7a4]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" strokeLinejoin="round" /></svg>
              <svg className="absolute bottom-5 right-5 w-5 h-5 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" strokeLinejoin="round" /><path d="M5 4L6 7L9 8L6 9L5 12L4 9L1 8L4 7Z" strokeLinejoin="round" /></svg>

              {/* Grid: 4 columns on large screens (1 line), scaling down gracefully on smaller screens */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5, zIndex: 20 }}
                    // Uniform polaroid shape, no rotations, neat layout
                    className="group relative flex flex-col w-full bg-[#fdfcfb] rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(82,183,164,0.25)] transition-all duration-300 ease-out border border-black/10"
                  >
                    {/* Washi Tape / Paperclip Graphic */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <svg className="w-5 h-8 text-[#999] drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] group-hover:text-[#52b7a4] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.31 2.69 6 6 6s6-2.69 6-6V6h-1.5z"/>
                      </svg>
                    </div>

                    {/* The Image Slider Area - Fixed Aspect Ratio keeps all cards identical in size */}
                    <div className="w-full aspect-[5/4] sm:aspect-[4/3] relative overflow-hidden p-2 sm:p-2.5 pb-0">
                      <div className="w-full h-full rounded-sm overflow-hidden border border-black/5 bg-[#f4f4f4]">
                        <CardSlider 
                          images={item.images} 
                          onExpand={(activeIndex) => setSelectedProof({ title: item.title, images: item.images, activeIndex })} 
                        />
                      </div>
                    </div>

                    {/* Polaroid Text Area */}
                    <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-[#fdfcfb] rounded-b-sm">
                      <h3 className="text-[#1a1a1a] text-[10px] sm:text-[12px] font-black uppercase tracking-wide leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#666] text-[8px] sm:text-[10px] font-medium leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </div>
          </motion.div>

        </div>

        {/* ─── FULLSCREEN LIGHTBOX MODAL (Supports Sliders & NO Zooming) ─── */}
        <AnimatePresence>
          {selectedProof && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProof(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 10 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl h-fit max-h-[95vh] bg-[#050505] rounded-xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col cursor-default overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-[#0a0a0a] shrink-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#52b7a4]">
                      Artifact {selectedProof.images.length > 1 ? `(${selectedProof.activeIndex + 1}/${selectedProof.images.length})` : ''}
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight leading-tight">
                      {selectedProof.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProof(null)}
                    className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white hover:text-black transition-all duration-300 shrink-0"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Image Display (object-contain guarantees full photo is visible, zero cropping) */}
                <div className="relative w-full h-full min-h-[40vh] max-h-[85vh] bg-[#08080a] flex items-center justify-center p-2 sm:p-4 group/modal">
                  <img
                    src={selectedProof.images[selectedProof.activeIndex]}
                    alt={selectedProof.title}
                    className="w-full h-full max-h-[80vh] object-contain"
                  />
                  
                  {/* Fullscreen Modal Slider Controls */}
                  {selectedProof.images.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#52b7a4] text-white p-3 rounded-full opacity-0 group-hover/modal:opacity-100 transition-all backdrop-blur-md border border-white/10"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#52b7a4] text-white p-3 rounded-full opacity-0 group-hover/modal:opacity-100 transition-all backdrop-blur-md border border-white/10"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}