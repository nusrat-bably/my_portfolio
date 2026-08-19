'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();

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
    { label: 'Rest Point', href: '/#guestbook' },
  ];

  return (
    <motion.header
      // THE FIX: Changed from y: -30 to y: 0 so the anchor doesn't move while the cat is calculating its position.
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-0 sm:px-4 md:px-8 pt-0"
    >
      {/* Premium Dark Glassmorphism container */}
      <nav className="pointer-events-auto w-full max-w-7xl mx-auto sm:rounded-2xl border-b sm:border border-white/10 bg-[#050505]/75 backdrop-blur-2xl transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">

        <div className="flex w-full items-center justify-between px-4 sm:px-6 py-2.5">

          {/* ─── LEFT: EXACT ORIGINAL WORKSTATION & PEEKING CAT ─── */}
          <Link 
            href="/#hero" 
            id="workstation-anchor" 
            className="relative flex items-center justify-start h-[30px] w-[100px] md:h-[36px] md:w-[120px] shrink-0 group overflow-visible"
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

              {/* RIGHT MONITOR (Code Editor UI) */}
              <rect x="175" y="52" width="10" height="12" fill="#e2e8f0" stroke="#474554" strokeWidth="1" />
              <rect x="165" y="63" width="30" height="2" fill="#cbd5e1" stroke="#474554" strokeWidth="1" />
              <rect x="135" y="11" width="90" height="42" rx="2" fill="#18181b" stroke="#474554" strokeWidth="1.2" />
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

              {/* PEEKING CAT COMPANION (Adjusted down to stay inside navbar bounds) */}
              <g transform="translate(108, 41) scale(0.65)">
                <path d="M 3 12 L -2 -2 L 10 7 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M 27 12 L 32 -2 L 20 7 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M 0 35 C 0 5, 30 5, 30 35 Z" fill="#ffffff" stroke="#474554" strokeWidth="1.5" />
                <circle cx="9" cy="16" r="2.2" fill="#0a0a0a" />
                <circle cx="21" cy="16" r="2.2" fill="#0a0a0a" />
                <path d="M 12 21 C 12 24, 18 24, 18 21" fill="none" stroke="#45D3B5" strokeWidth="2" strokeLinecap="round" />
              </g>

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

          {/* Swipeable Links Row */}
          <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#888] hover:text-teal-400 hover:bg-teal-500/5 transition-all duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Glassy, Glowy CV Button */}
          <div className="flex items-center shrink-0 ml-1">
            <a
              href="/cv/NusratJahanBably_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 px-4 py-2 font-sans text-[12px] sm:text-[13px] font-extrabold tracking-tight text-white backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] whitespace-nowrap"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_60%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
              <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Download CV</span>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}