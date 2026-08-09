'use client';

import { motion } from 'framer-motion';

const references = [
  {
    name: 'Dr. Suman Ahmmed',
    role: 'Head & Associate Professor, Dept. of CSE',
    institution: 'United International University',
    email: 'suman@cse.uiu.ac.bd',
    lorLabel: 'View LOR',
    lorLink: '/lor/LoRSumanSir.pdf',
  },
  {
    name: 'Dr. Mohammad Nurul Huda',
    role: 'Professor, Dept. of CSE',
    institution: 'United International University',
    email: 'mnh@cse.uiu.ac.bd',
    lorLabel: 'View LOR',
    lorLink: '/lor/LoR_HudaSir.pdf',
  },
];

export default function ReferencesSection() {
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
    <section id="references" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-10 left-1/3 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      {/* MATCHED CONTAINER: max-w-7xl ensures exact left-edge alignment across all sections */}
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
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">References</span>
          </motion.h2>
        </motion.div>

        {/* Bento References Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {references.map((reference, index) => (
            <motion.div
              key={reference.name}
              variants={itemVariants}
              className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-2xl flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Subtle hover gradient bloom */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Header Row with Index Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-teal-300 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 group-hover:text-white transition-all duration-300">
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-teal-500 transition-colors" />
                </div>

                {/* Name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight group-hover:text-teal-300 transition-colors">
                  {reference.name}
                </h3>
                
                {/* Role & Institution */}
                <div className="space-y-1.5 text-sm sm:text-base text-[#a0a0a0] mb-8 leading-relaxed font-normal">
                  <p className="font-semibold text-white/90">{reference.role}</p>
                  <p className="text-teal-300/90 font-medium">{reference.institution}</p>
                  <p className="pt-2 flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#707070]">Email:</span>
                    <a 
                      href={`mailto:${reference.email}`} 
                      className="text-[#e5e5e5] hover:text-teal-400 transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-teal-400 font-medium"
                    >
                      {reference.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* View LOR Button */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#707070] uppercase tracking-wider">Letter of Recommendation</span>
                <a
                  href={reference.lorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-teal-500/40 bg-teal-500/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-300 shrink-0 group/btn"
                >
                  <span>{reference.lorLabel}</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}