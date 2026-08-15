'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/nusrat-bably',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nusrat-jahan-bably/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      href: 'tel:+8801828624088',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:nbably4088@gmail.com',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'References', href: '#references' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow - Updated to Teal */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-teal-500/5 blur-[100px]" />

      {/* MATCHED CONTAINER: max-w-7xl ensures exact left-edge alignment */}
      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Brand & Bio */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            <h3 className="text-2xl font-black text-white tracking-tight">
              Nusrat Jahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-300">Bably</span>
            </h3>
            <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Building systems where intelligence meets usability. Research-driven full-stack engineer focused on clarity, scalability, and real-world impact.
            </p>
            <div className="pt-2">
              <a
                href="/cv/NusratJahanBably_CV.pdf"
                download="NusratJahanBably_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-teal-500/40 bg-teal-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300"
              >
                <span>Download CV</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Middle Column: Quick Links */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover:bg-teal-500 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Connect */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
              Connect With Me
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Open for collaborative research, software engineering roles, and innovative tech discussions.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#a0a0a0] hover:bg-teal-500 hover:border-teal-500 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#707070]">
          <p className="text-center sm:text-left">
            © {currentYear} Nusrat Jahan Bably. All rights reserved.
          </p>
          <p className="text-center sm:text-right flex items-center gap-1.5">
            <span>Designed &amp; built with intention</span>
            <span>•</span>
            <span className="text-[#a0a0a0]">Deployed on Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}