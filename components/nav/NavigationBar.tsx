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
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none pt-2 md:pt-3 px-4 md:px-8"
    >
      <nav className="pointer-events-auto w-full max-w-7xl mx-auto rounded-2xl border border-white/5 bg-[#050505]/85 backdrop-blur-2xl transition-colors duration-300">
        
        <div className="flex w-full items-center justify-between px-4 md:px-6 py-3.5">
          
          {/* FIX: Scaled down mobile dimensions (h-[32px] w-[110px]) so the cat doesn't overhang aggressively on phones */}
          <Link 
            href="/#hero" 
            id="workstation-anchor" 
            className="relative flex items-center justify-start h-[32px] w-[110px] md:h-[40px] md:w-[150px] shrink-0 group overflow-visible"
          >
            <span className="sr-only">Nusrat Jahan Bably - Home</span>
            {/* Note: Paste your full cat SVG here. Using the viewBox we fixed earlier. */}
            <svg viewBox="0 0 140 55" className="h-full w-full overflow-visible" fill="none">
              <line x1="5" y1="46" x2="135" y2="46" stroke="#444" strokeWidth="2.5" strokeLinecap="round" />
              <motion.path d="M 83 20 L 40 26 L 40 42 L 80 42 Z" fill="#2dd4bf" opacity="0.15" animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ repeat: Infinity, duration: 3 }} />
              <line x1="80" y1="42" x2="45" y2="42" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="85" y1="18" x2="80" y2="42" stroke="#e5e5e5" strokeWidth="3.5" strokeLinecap="round" />
              <rect x="92" y="32" width="10" height="12" rx="2" fill="#0a0a0a" stroke="#e5e5e5" strokeWidth="2" />
              <path d="M 102 35 C 106 35, 106 41, 102 41" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
              <motion.path d="M 95 28 Q 98 25, 95 22" stroke="#e5e5e5" strokeWidth="1.5" fill="none" strokeLinecap="round" animate={{ y: [0, -3, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} />
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#666] mb-4">Jump directly to section:</p>
              
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
              
              <div className="pt-6 mt-6 border-t border-white/5 flex sm:hidden">
                <a
                  href="/cv/NusratJahanBably_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-full border border-teal-500/30 bg-teal-500/5 py-3 text-xs font-semibold uppercase tracking-widest text-teal-300/90"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}