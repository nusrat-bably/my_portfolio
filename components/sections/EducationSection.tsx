'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
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
    <section id="education" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-teal-400/5 blur-[130px]" />

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
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Background</span>
          </motion.h2>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {/* Top Hero Card: University */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-300">
                  Bachelor of Science
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Computer Science &amp; Engineering (BSCSE)
                </h3>
                <p className="text-base sm:text-lg text-[#a0a0a0]">
                  United International University (UIU), <span className="text-[#707070]">Dhaka, Bangladesh</span>
                </p>
              </div>

              {/* CGPA Highlight Box */}
              <div className="flex items-center gap-4 self-start lg:self-center rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md shadow-inner">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#707070]">
                    Final CGPA
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-white">
                    3.90 <span className="text-lg font-medium text-teal-500">/ 4.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[#707070]">
              <span className="flex items-center gap-2 font-medium text-[#a0a0a0]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Graduated: Feb 20, 2026
              </span>
              <span className="italic font-medium text-[#707070]">B.Sc. Undergraduate Degree Program</span>
            </div>
          </motion.div>

          {/* Middle Grid: HSC & SSC Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HSC Card */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                  Higher Secondary (HSC)
                </span>
                <h4 className="mt-2 text-xl font-bold text-white tracking-tight">
                  Ispahani Cantonment Public School &amp; College
                </h4>
                <p className="mt-1 text-sm text-[#707070]">Cumilla Cantonment</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#a0a0a0]">GPA Obtained</span>
                <span className="text-2xl font-bold text-white">
                  4.83 <span className="text-xs font-normal text-[#707070]">/ 5.00</span>
                </span>
              </div>
            </motion.div>

            {/* SSC / JSC Card */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-teal-500/40 hover:bg-white/[0.04] shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                  SSC / JSC
                </span>
                <h4 className="mt-2 text-xl font-bold text-white tracking-tight">
                  Secondary &amp; Junior School Certificate
                </h4>
                <p className="mt-1 text-sm text-[#707070]">Science Background</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#a0a0a0]">GPA Obtained</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">
                    5.00 <span className="text-xs font-normal text-[#707070]">/ 5.00</span>
                  </span>
                  <p className="text-[11px] text-[#707070] mt-0.5">SSC: 5.00 · JSC: 5.00</p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}