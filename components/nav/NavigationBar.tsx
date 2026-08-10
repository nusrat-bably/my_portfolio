'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname?.startsWith('/fuel')) {
    return null;
  }

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Research', href: '/#research' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Awards', href: '/#achievements' },
    { label: 'Education', href: '/#education' },
    { label: 'References', href: '/#references' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none pt-4 px-4 md:px-8"
    >
      <nav className="pointer-events-auto w-full max-w-7xl mx-auto rounded-2xl border border-white/5 bg-[#050505]/85 backdrop-blur-2xl transition-colors duration-300">
        
        <div className="flex w-full items-center justify-between px-4 md:px-6 py-2">
          
          <Link 
            href="/#hero" 
            id="workstation-anchor" 
            className="relative flex items-center justify-start h-[32px] w-[110px] md:h-[38px] md:w-[130px] shrink-0 group overflow-visible"
          >
            <span className="sr-only">Nusrat Jahan Bably - Home</span>
            
            <svg viewBox="0 0 240 70" className="h-full w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              {/* Aesthetic Floating Background Elements */}
              <g stroke="#64748b" strokeWidth="0.8" opacity="0.6">
                <path d="M 40 7 L 40 11 M 38 9 L 42 9" />
                <path d="M 160 7 L 160 11 M 158 9 L 162 9" />
                <path d="M 10 32 L 10 36 M 8 34 L 12 34" />
                <path d="M 220 47 L 220 51 M 218 49 L 222 49" />
                <path d="M 230 32 L 230 36 M 228 34 L 232 34" />
                <line x1="45" y1="9" x2="60" y2="9" />
                <line x1="125" y1="9" x2="145" y2="9" />
                <line x1="150" y1="9" x2="155" y2="9" />
                <line x1="10" y1="42" x2="20" y2="42" />
                <line x1="225" y1="42" x2="235" y2="42" />
              </g>

              {/* Main Desk Line */}
              <line x1="10" y1="65" x2="230" y2="65" stroke="#474554" strokeWidth="1" strokeLinecap="round" />

              {/* LEFT MONITOR (Browser UI) */}
              <rect x="55" y="52" width="10" height="12" fill="#e2e8f0" stroke="#474554" strokeWidth="1" />
              <rect x="45" y="63" width="30" height="2" fill="#cbd5e1" stroke="#474554" strokeWidth="1" />
              <rect x="15" y="11" width="90" height="42" rx="2" fill="#f8fafc" stroke="#474554" strokeWidth="1.2" />
              <rect x="18" y="14" width="84" height="36" fill="#ffffff" stroke="#474554" strokeWidth="0.8" />
              <rect x="18" y="14" width="84" height="6" fill="#f1f5f9" stroke="#474554" strokeWidth="0.5" />
              <circle cx="22" cy="17" r="1" fill="#ef4444" />
              <circle cx="25" cy="17" r="1" fill="#eab308" />
              <circle cx="28" cy="17" r="1" fill="#22c55e" />
              <rect x="22" y="22" width="76" height="8" fill="#a484a8" opacity="0.8" />
              <rect x="22" y="32" width="45" height="16" fill="#cbd5e1" opacity="0.7" />
              <rect x="70" y="32" width="28" height="16" fill="#86efac" opacity="0.5" />

              {/* RIGHT MONITOR (Code Editor UI - CHANGED TO DARK THEME INSTEAD OF LIGHT) */}
              <rect x="175" y="52" width="10" height="12" fill="#e2e8f0" stroke="#474554" strokeWidth="1" />
              <rect x="165" y="63" width="30" height="2" fill="#cbd5e1" stroke="#474554" strokeWidth="1" />
              
              {/* Outer Casing changed to Dark Charcoal */}
              <rect x="135" y="11" width="90" height="42" rx="2" fill="#18181b" stroke="#474554" strokeWidth="1.2" />
              {/* Inner Screen */}
              <rect x="138" y="14" width="84" height="36" fill="#1e1e24" stroke="#474554" strokeWidth="0.8" />
              <rect x="138" y="14" width="15" height="36" fill="#27272a" />
              
              <g stroke="#71717a" strokeWidth="1" strokeLinecap="round">
                <line x1="141" y1="18" x2="150" y2="18" />
                <line x1="141" y1="22" x2="150" y2="22" />
                <line x1="141" y1="26" x2="150" y2="26" />
                <line x1="141" y1="30" x2="150" y2="30" />
                <line x1="141" y1="34" x2="150" y2="34" />
                <line x1="141" y1="38" x2="150" y2="38" />
              </g>
              
              <g strokeWidth="1.2" strokeLinecap="round">
                <line x1="156" y1="18" x2="168" y2="18" stroke="#45D3B5" />
                <line x1="156" y1="26" x2="172" y2="26" stroke="#94a3b8" />
                <line x1="156" y1="34" x2="164" y2="34" stroke="#45D3B5" />
              </g>

              <rect x="182" y="20" width="30" height="24" fill="#27272a" rx="1" stroke="#3f3f46" strokeWidth="0.8" />
              <line x1="186" y1="25" x2="198" y2="25" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="186" y1="31" x2="208" y2="31" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />

              {/* PASTEL MECHANICAL KEYBOARD */}
              <rect x="75" y="55" width="90" height="10" rx="1.5" fill="#f8fafc" stroke="#474554" strokeWidth="1" />
              <g stroke="#474554" strokeWidth="0.5">
                <rect x="78" y="56.5" width="6" height="3" rx="0.5" fill="#fbcfe8" />
                <rect x="85" y="56.5" width="6" height="3" rx="0.5" fill="#e9d5ff" />
                <rect x="92" y="56.5" width="6" height="3" rx="0.5" fill="#ffffff" />
                <rect x="99" y="56.5" width="22" height="3" rx="0.5" fill="#e2e8f0" />
                <rect x="122" y="56.5" width="6" height="3" rx="0.5" fill="#ffffff" />
                <rect x="129" y="56.5" width="6" height="3" rx="0.5" fill="#e9d5ff" />
                <rect x="136" y="56.5" width="6" height="3" rx="0.5" fill="#fbcfe8" />
                <rect x="143" y="56.5" width="6" height="3" rx="0.5" fill="#ffffff" />
                <rect x="150" y="56.5" width="12" height="3" rx="0.5" fill="#e9d5ff" />
                <rect x="79" y="60.5" width="10" height="3" rx="0.5" fill="#e9d5ff" />
                <rect x="90" y="60.5" width="40" height="3" rx="0.5" fill="#ffffff" />
                <rect x="131" y="60.5" width="8" height="3" rx="0.5" fill="#fbcfe8" />
                <rect x="140" y="60.5" width="6" height="3" rx="0.5" fill="#ffffff" />
                <rect x="147" y="60.5" width="6" height="3" rx="0.5" fill="#e9d5ff" />
                <rect x="154" y="60.5" width="8" height="3" rx="0.5" fill="#ffffff" />
              </g>

              {/* COFFEE MUG & COASTER */}
              <ellipse cx="180" cy="64" rx="9" ry="2" fill="#cbd5e1" stroke="#474554" strokeWidth="1" />
              <path d="M 188 55 C 191 55, 191 61, 188 61" fill="none" stroke="#474554" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="173" y="50" width="14" height="13" rx="1.5" fill="#27272a" stroke="#45D3B5" strokeWidth="1" />
              <ellipse cx="180" cy="50" rx="7" ry="1.5" fill="#5c4033" stroke="#45D3B5" strokeWidth="1" />
              
              <g transform="translate(176, 54) scale(0.35)">
                <path d="M 2 8 C 2 3, 16 3, 16 8 Z" fill="#fff" />
                <polygon points="2,5 4,1 6,4" fill="#fff" />
                <polygon points="12,4 14,1 16,5" fill="#fff" />
                <circle cx="6" cy="6" r="0.5" fill="#373543" />
                <circle cx="12" cy="6" r="0.5" fill="#373543" />
              </g>

              {/* SMOOTH ANIMATED COFFEE SMOKE */}
              <motion.path 
                fill="none" stroke="#e2e8f0" strokeWidth="1" strokeLinecap="round"
                animate={{ 
                  d: [
                    "M 178 47 Q 175 43, 179 39 T 178 32", 
                    "M 178 47 Q 181 43, 177 39 T 178 32", 
                    "M 178 47 Q 175 43, 179 39 T 178 32"
                  ],
                  opacity: [0, 0.7, 0],
                  y: [0, -3, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.path 
                fill="none" stroke="#e2e8f0" strokeWidth="1" strokeLinecap="round"
                animate={{ 
                  d: [
                    "M 182 47 Q 185 44, 181 40 T 182 34", 
                    "M 182 47 Q 179 44, 183 40 T 182 34", 
                    "M 182 47 Q 185 44, 181 40 T 182 34"
                  ],
                  opacity: [0, 0.6, 0],
                  y: [0, -4, 0]
                }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
              />

            </svg>
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#888] hover:text-teal-400 hover:bg-teal-500/5 transition-all duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/cv/NusratJahanBably_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex relative items-center justify-center overflow-hidden rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal-300/90 backdrop-blur-md transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-500/10 hover:text-teal-100"
            >
              <span>Download CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-300/90 text-xs font-semibold uppercase tracking-wider focus:outline-none transition-colors hover:bg-teal-500/10"
              aria-label="Toggle Section Menu"
            >
              <span>Menu</span>
              <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-2xl px-6 py-6 rounded-b-2xl"
            >
              <div className="grid grid-cols-2 gap-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#888] hover:text-teal-400 hover:border-teal-500/20 hover:bg-teal-500/5 transition-all text-center flex items-center justify-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}