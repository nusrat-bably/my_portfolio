'use client';

import { motion } from 'framer-motion';

const references = [
  {
    name: 'Dr. Suman Ahmmed',
    photo: '/lor/Screen Shot 2026-08-11 at 11.17.31 PM.png',
    role: 'Head & Associate Professor, Dept. of CSE',
    institution: 'United International University',
    email: 'suman@cse.uiu.ac.bd',
    lorLabel: 'View LOR',
    lorLink: '/lor/LoRSumanSir.pdf',
  },
  {
    name: 'Dr. Mohammad Nurul Huda',
    photo: '/lor/Screen Shot 2026-08-11 at 11.18.06 PM.png',
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="references" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-10 left-1/3 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      {/* MATCHED CONTAINER */}
      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-10 md:mb-12 flex justify-center text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">References</span>
          </motion.h2>
        </motion.div>

        {/* Bento References Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {references.map((reference) => (
            <motion.div
              key={reference.name}
              variants={itemVariants}
              className="group relative rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-2xl flex flex-col justify-center overflow-hidden"
            >
              {/* Subtle hover gradient bloom */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all duration-500 pointer-events-none" />

              {/* Top Row: Photo + Information + Button Block */}
              <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 min-w-0">
                  
                  {/* Faculty Photo */}
                  <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-transparent group-hover:ring-teal-500/40 transition-all duration-500 shadow-sm">
                    <img 
                      src={reference.photo} 
                      alt={reference.name} 
                      className="h-full w-full object-cover scale-[1.15] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Information with min-w-0 to prevent flex blowout */}
                  <div className="flex flex-col mt-1 sm:mt-0 min-w-0">
                    {/* Name */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 tracking-tight group-hover:text-teal-300 transition-colors truncate">
                      {reference.name}
                    </h3>
                    
                    {/* Role, Institution & Email - Forced to one line */}
                    <div className="space-y-0.5 text-sm text-[#a0a0a0] leading-relaxed font-normal min-w-0">
                      <p className="font-semibold text-white/90 whitespace-nowrap truncate tracking-tight text-[12px] sm:text-[13px]">
                        {reference.role}
                      </p>
                      <p className="text-teal-300/90 font-medium whitespace-nowrap truncate tracking-tight text-[12px] sm:text-[13px]">
                        {reference.institution}
                      </p>
                      <p className="pt-2 flex items-center gap-2 whitespace-nowrap truncate">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#707070]">Email:</span>
                        <a 
                          href={`mailto:${reference.email}`} 
                          className="text-[#e5e5e5] hover:text-teal-400 transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-teal-400 font-medium tracking-tight text-[12px] sm:text-[13px]"
                        >
                          {reference.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* View LOR Button - Positioned Top Right */}
                <a
                  href={reference.lorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300 group/btn"
                >
                  <span>{reference.lorLabel}</span>
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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