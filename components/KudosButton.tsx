'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function KudosButton() {
  const [likes, setLikes] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; scale: number }[]>([]);

  useEffect(() => {
    if (localStorage.getItem('bably-portfolio-liked')) setHasLiked(true);

    fetch('/api/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikes(Number(data.likes) || 0);
        setShowCount(data.show);
      });
  }, []);

  const handleToggleLike = async () => {
    if (hasLiked) {
      // UNLIKE ACTION
      setHasLiked(false);
      setLikes((prev) => Math.max(0, prev - 1)); 
      localStorage.removeItem('bably-portfolio-liked'); 
      await fetch('/api/likes', { method: 'DELETE' }); 
    } else {
      // LIKE ACTION
      setHasLiked(true);
      setLikes((prev) => prev + 1);
      localStorage.setItem('bably-portfolio-liked', 'true'); 

      const newParticles = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 120, 
        y: (Math.random() - 0.5) * 120, 
        scale: Math.random() * 0.8 + 0.4, 
      }));
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 1500);

      await fetch('/api/likes', { method: 'POST' }); 
    }
  };

  return (
    /* FIX: -mt-20 (middle ground for top gap) and pb-6 (decreased bottom gap) */
    <div className="flex flex-col items-center justify-center w-full relative z-10 -mt-20 pt-2 pb-6">
      
      {/* 1. TOP TEXT: The Question (Only shows before clicking) */}
      <div className="text-center h-8 flex items-center justify-center mb-2">
        <AnimatePresence>
          {!hasLiked && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              /* FIX: Increased font size slightly to 14px/15px */
              className="text-[14px] sm:text-[15px] font-medium tracking-wide text-slate-400"
            >
              Did you enjoy my Portfolio?
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* 2. CENTER: The Main Heart Button and Particles */}
      <div className="relative flex items-center justify-center">
        <motion.button
          onClick={handleToggleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${
            hasLiked 
              ? 'border-white bg-white shadow-[0_0_30px_rgba(255,255,255,0.4)]' 
              : 'border-white/20 bg-white/5 hover:border-white/60 hover:bg-white/10'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`h-6 w-6 transition-all duration-500 ${hasLiked ? 'fill-black' : 'fill-none stroke-white stroke-2'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </motion.button>

        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{ 
                x: p.x, 
                y: p.y - 80, 
                opacity: 0, 
                scale: p.scale 
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute z-0 pointer-events-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-white/80">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM TEXT: The Thank You Message (Only shows after clicking) */}
      <div className="text-center h-8 flex items-center justify-center mt-2">
        <AnimatePresence>
          {hasLiked && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              /* FIX: Increased font size slightly to 14px/15px */
              className="text-[14px] sm:text-[15px] font-medium tracking-wide text-slate-400"
            >
              Thanks for staying this long (╥﹏╥)
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* 4. The Secret Like Count (if visible) */}
      <AnimatePresence>
        {showCount && likes > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
          >
            <span>{likes.toLocaleString()}</span>
            <span>Appreciations</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}