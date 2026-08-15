'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, animate, useMotionValue, AnimatePresence } from 'framer-motion';

export default function RoamingDevCat() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [catState, setCatState] = useState<'docked' | 'stretching' | 'walking' | 'idle'>('docked');
  const [facingRight, setFacingRight] = useState(true);
  const [isFrustrated, setIsFrustrated] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const homePos = useRef({ x: 0, y: 0 });
  const [anchorSize, setAnchorSize] = useState({ w: 240, h: 70 });
  
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const stretchTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // NEW: Ref to track the last time the cat stretched (cooldown timer)
  const lastStretchTime = useRef<number>(0);

  useEffect(() => {
    setIsMounted(true);
    
    const updateHomePosition = () => {
      const anchor = document.getElementById('workstation-anchor');
      if (!anchor) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);

      const rect = anchor.getBoundingClientRect();
      setAnchorSize({ w: rect.width, h: rect.height });
      homePos.current = { x: rect.left, y: rect.top };
      
      if (window.scrollY < 50) {
        x.set(homePos.current.x);
        y.set(homePos.current.y);
      }
    };

    setTimeout(updateHomePosition, 150);
    window.addEventListener('resize', updateHomePosition);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Clear any pending state timeouts if user starts scrolling
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (stretchTimeout.current) clearTimeout(stretchTimeout.current);
      
      // Return to top
      if (currentScroll < 50) {
        setCatState('docked');
        setFacingRight(true);
        animate(x, homePos.current.x, { duration: 0.5, ease: 'easeOut' });
        animate(y, homePos.current.y, { duration: 0.5, ease: 'easeOut' });
        return;
      }

      setIsFrustrated(false); 
      setCatState('walking');

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      
      const targetY = (window.innerHeight * 0.15) + (scrollPercent * window.innerHeight * 0.7);
      const wanderX = (Math.sin(scrollPercent * 12) * (window.innerWidth * 0.35)) + (window.innerWidth / 2);

      setFacingRight(wanderX > x.get());

      animate(y, targetY, { duration: 0.2, ease: 'linear' });
      animate(x, wanderX, { duration: 0.2, ease: 'linear' });

      // When user stops scrolling
      scrollTimeout.current = setTimeout(() => {
        const isRightSide = x.get() > window.innerWidth / 2;
        const safeMarginX = isRightSide ? window.innerWidth - 100 : 10;
        
        animate(x, safeMarginX, { duration: 0.7, ease: 'easeInOut' });
        setFacingRight(!isRightSide);

        const now = Date.now();
        // Cooldown Check: Only stretch if it's been more than 15 seconds since the last stretch
        if (now - lastStretchTime.current > 15000) {
          setCatState('stretching');
          lastStretchTime.current = now;

          // After a 1.5s stretch, curl up and go to SLEEP ('idle')
          stretchTimeout.current = setTimeout(() => {
            setCatState('idle');
          }, 1500);
        } else {
          // If it stretched recently, skip the stretch and just go straight to sleep
          setCatState('idle');
        }

      }, 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', updateHomePosition);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (stretchTimeout.current) clearTimeout(stretchTimeout.current);
    };
  }, [x, y]);

  useEffect(() => {
    let frustrationTimer: NodeJS.Timeout;
    let calmTimer: NodeJS.Timeout;

    if (catState === 'docked') {
      const scheduleFrustration = () => {
        const nextTime = 4000; 
        frustrationTimer = setTimeout(() => {
          setIsFrustrated(true);
          calmTimer = setTimeout(() => {
            setIsFrustrated(false);
            scheduleFrustration(); 
          }, 1500); 
        }, nextTime);
      };
      scheduleFrustration();
    } else {
      setIsFrustrated(false);
    }

    return () => {
      clearTimeout(frustrationTimer);
      clearTimeout(calmTimer);
    };
  }, [catState]);

  if (!isMounted || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 will-change-transform will-change-opacity overflow-visible"
      style={{ left: x, top: y }}
    >
      <motion.div 
        style={{ 
          width: catState === 'docked' ? anchorSize.w : 80, 
          height: catState === 'docked' ? anchorSize.h : 80 
        }}
        className="relative overflow-visible flex items-center justify-center"
        animate={{ scaleX: facingRight ? 1 : -1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-1/2 left-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[40px] pointer-events-none" />

        {catState === 'docked' ? (
          <svg viewBox="0 0 240 70" className="relative z-10 h-full w-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            
            <AnimatePresence>
              {isFrustrated && (
                <>
                  <motion.text
                    initial={{ opacity: 0, y: 5, x: 135, scale: 0.8 }}
                    animate={{ opacity: 1, y: -5, x: 140, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    fill="#ffffff"
                    fontSize="18"
                    fontWeight="500"
                    fontFamily="cursive, sans-serif"
                    style={{ transform: 'rotate(-5deg)' }}
                  >
                    ughhhhh
                  </motion.text>
                  
                  <motion.path 
                    d="M 108 5 C 102 -5, 92 5, 98 12 C 105 20, 115 5, 108 0 C 100 -5, 90 5, 96 15 C 104 25, 118 10, 110 0 C 100 -10, 88 5, 100 15" 
                    fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ opacity: 0, scale: 0.5, x: -10, y: 0, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1.5, x: -25, y: -10, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.2, x: -25, y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "100px 5px" }}
                    className="drop-shadow-[0_0_6px_rgba(69,211,181,0.6)]"
                  />
                </>
              )}
            </AnimatePresence>

            {/* TAIL WAGGING */}
            <motion.g 
              style={{ transformOrigin: "135px 63px" }}
              animate={{ rotate: [0, 5, -2, 4, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
              <path d="M 135 63 Q 165 63, 155 68 Q 145 70, 135 68" fill="none" stroke="#474554" strokeWidth="7" strokeLinecap="round" />
              <path d="M 135 63 Q 165 63, 155 68 Q 145 70, 135 68" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
            </motion.g>

            {/* BODY & CHAIR */}
            <path d="M 100 70 L 105 45 Q 120 40, 135 45 L 140 70 Z" fill="#e8e4e6" stroke="#474554" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M 108 45 C 108 30, 132 30, 132 45 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.2" strokeLinejoin="round" />

            <motion.g 
              animate={isFrustrated ? { rotate: -15, x: -4, y: 6 } : { rotate: 0, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              style={{ transformOrigin: "120px 24px" }}
            >
              <path d="M 112 14 L 110 3 L 118 10 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M 128 14 L 130 3 L 122 10 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.2" strokeLinejoin="round" />
              <circle cx="120" cy="22" r="14" fill="#ffffff" stroke="#474554" strokeWidth="1.2" />

              <g stroke="#474554" strokeWidth="0.8" strokeLinecap="round">
                <line x1="106" y1="23" x2="98" y2="21" />
                <line x1="106" y1="26" x2="99" y2="27" />
                <line x1="134" y1="23" x2="142" y2="21" />
                <line x1="134" y1="26" x2="141" y2="27" />
              </g>

              <path d="M 106 22 C 106 5, 134 5, 134 22" fill="none" stroke="#45D3B5" strokeWidth="2.5" />
              <rect x="104" y="17" width="5" height="12" rx="2" fill="#45D3B5" stroke="#474554" strokeWidth="1" />
              <rect x="131" y="17" width="5" height="12" rx="2" fill="#45D3B5" stroke="#474554" strokeWidth="1" />
            </motion.g>

            {/* ARMS AND PAWS */}
            {isFrustrated ? (
              <g>
                <path d="M 108 43 Q 95 30, 102 24" fill="none" stroke="#474554" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M 132 43 Q 148 20, 126 14" fill="none" stroke="#474554" strokeWidth="5.5" strokeLinecap="round" />
                <path d="M 108 43 Q 95 30, 102 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 132 43 Q 148 20, 126 14" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                <motion.path 
                  d="M 108 43 Q 90 48, 98 56" 
                  fill="none" stroke="#474554" strokeWidth="5.5" strokeLinecap="round" 
                  animate={{ d: ["M 108 43 Q 90 48, 98 56", "M 108 43 Q 95 45, 102 53", "M 108 43 Q 90 48, 98 56"] }}
                  transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
                />
                <motion.path 
                  d="M 108 43 Q 90 48, 98 56" 
                  fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" 
                  animate={{ d: ["M 108 43 Q 90 48, 98 56", "M 108 43 Q 95 45, 102 53", "M 108 43 Q 90 48, 98 56"] }}
                  transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
                />
                <motion.g stroke="#474554" strokeWidth="1" strokeLinecap="round" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.3, delay: 0.15 }}>
                  <line x1="93" y1="52" x2="90" y2="48" />
                  <line x1="96" y1="56" x2="92" y2="58" />
                </motion.g>

                <motion.path 
                  d="M 132 43 Q 150 48, 142 56" 
                  fill="none" stroke="#474554" strokeWidth="5.5" strokeLinecap="round" 
                  animate={{ d: ["M 132 43 Q 150 48, 142 56", "M 132 43 Q 145 45, 138 53", "M 132 43 Q 150 48, 142 56"] }}
                  transition={{ repeat: Infinity, duration: 0.25, ease: "linear", delay: 0.1 }}
                />
                <motion.path 
                  d="M 132 43 Q 150 48, 142 56" 
                  fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" 
                  animate={{ d: ["M 132 43 Q 150 48, 142 56", "M 132 43 Q 145 45, 138 53", "M 132 43 Q 150 48, 142 56"] }}
                  transition={{ repeat: Infinity, duration: 0.25, ease: "linear", delay: 0.1 }}
                />
                <motion.g stroke="#474554" strokeWidth="1" strokeLinecap="round" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.25, delay: 0.1 }}>
                  <line x1="145" y1="52" x2="148" y2="48" />
                  <line x1="142" y1="56" x2="146" y2="58" />
                </motion.g>
              </g>
            )}
          </svg>

        ) : catState === 'stretching' ? (
          <svg viewBox="0 0 100 100" className="relative z-10 h-full w-full overflow-visible">
            {/* RE-ENGINEERED "DOWNWARD DOG" STRETCHING STATE */}
            
            {/* Back Leg (Drawn behind body) */}
            <motion.line 
              stroke="#ffffff" strokeWidth="6" strokeLinecap="round" 
              animate={{ 
                x1: [35, 30, 30], y1: [65, 55, 55], // Hip moving up
                x2: [35, 20, 20], y2: [80, 85, 85]  // Paw planted backward
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Curling Tail (High in the air) */}
            <motion.path 
              fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" 
              animate={{ d: [
                "M 28 60 Q 15 30, 30 20", // Normal walking tail
                "M 25 45 Q 10 10, 35 15", // Stretched tail curling up and left
                "M 25 45 Q 10 10, 35 15"
              ]}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Steepy Arched Body */}
            <motion.path 
              fill="#ffffff" stroke="#474554" strokeWidth="1" 
              animate={{ d: [
                "M 25 55 Q 50 45, 75 55 Q 75 75, 50 75 Q 25 75, 25 55 Z", // Normal standing body
                "M 25 40 Q 50 20, 70 65 Q 60 75, 30 75 Q 15 60, 25 40 Z", // High arch
                "M 25 40 Q 50 20, 70 65 Q 60 75, 30 75 Q 15 60, 25 40 Z"
              ] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Front Leg (Drawn in front of body, extending out to the right) */}
            <motion.line 
              stroke="#ffffff" strokeWidth="6" strokeLinecap="round" 
              animate={{ 
                x1: [65, 65, 65], y1: [65, 65, 65], // Shoulder low
                x2: [65, 95, 95], y2: [80, 85, 85]  // Paws extended far right and down
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Head looking forward/down */}
            <motion.ellipse 
              fill="#ffffff" stroke="#474554" strokeWidth="1" 
              animate={{ 
                cx: [75, 80, 80], 
                cy: [50, 72, 72], 
                rx: [14, 14, 14], ry: [12, 11, 11] 
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Face details moving with the head */}
            <motion.g animate={{ x: [0, 5, 5], y: [0, 22, 22] }} transition={{ duration: 1.5, ease: "easeInOut" }}>
              {/* Ears */}
              <path d="M 66 40 L 68 28 L 74 38 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
              <path d="M 76 38 L 82 28 L 84 40 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
              {/* Closed eyes because stretching feels so good */}
              <path d="M 74 48 Q 76 46, 78 48" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 84 48 Q 86 46, 88 48" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
              {/* Nose */}
              <path d="M 80 51 L 82 51 L 81 53 Z" fill="#0a0a0a" />
            </motion.g>
          </svg>

        ) : catState === 'walking' ? (
          <svg viewBox="0 0 100 100" className="relative z-10 h-full w-full overflow-visible">
            {/* WALKING STATE */}
            <motion.path d="M 28 60 Q 15 30, 30 20" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" animate={{ rotate: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ transformOrigin: "28px 60px" }} />
            <path d="M 25 65 C 25 45, 70 45, 75 65 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <motion.line x1="35" y1="60" x2="35" y2="78" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" animate={{ rotate: [-20, 20, -20] }} transition={{ repeat: Infinity, duration: 0.3 }} style={{ transformOrigin: "35px 60px" }} />
            <motion.line x1="65" y1="60" x2="65" y2="78" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" animate={{ rotate: [20, -20, 20] }} transition={{ repeat: Infinity, duration: 0.3 }} style={{ transformOrigin: "65px 60px" }} />
            <ellipse cx="75" cy="50" rx="14" ry="12" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <path d="M 66 40 L 68 28 L 74 38 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <path d="M 76 38 L 82 28 L 84 40 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <circle cx="78" cy="48" r="2.5" fill="#0a0a0a" />
            <circle cx="86" cy="48" r="2.5" fill="#0a0a0a" />
          </svg>

        ) : (
          <svg viewBox="0 0 100 100" className="relative z-10 h-full w-full overflow-visible">
            {/* SLEEPING/IDLE STATE */}
            <motion.text x="50" y="25" fill="#45D3B5" fontSize="14" fontWeight="bold" animate={{ opacity: [0, 1, 0], y: [0, -15, -25], x: [0, 5, -5] }} transition={{ repeat: Infinity, duration: 3 }}>Z</motion.text>
            <motion.text x="65" y="15" fill="#45D3B5" fontSize="10" fontWeight="bold" animate={{ opacity: [0, 1, 0], y: [0, -10, -20], x: [0, -5, 5] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}>z</motion.text>
            <path d="M 25 80 C 25 55, 75 55, 80 80 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <path d="M 25 75 C 10 75, 10 85, 25 85" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <ellipse cx="70" cy="65" rx="15" ry="12" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <path d="M 60 55 L 63 42 L 70 53 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <path d="M 72 53 L 79 42 L 82 55 Z" fill="#ffffff" stroke="#474554" strokeWidth="1" />
            <motion.line x1="65" y1="65" x2="70" y2="65" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5] }} />
            <motion.line x1="76" y1="65" x2="81" y2="65" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5] }} />
          </svg>
        )}
        
      </motion.div>
    </motion.div>
  );
}