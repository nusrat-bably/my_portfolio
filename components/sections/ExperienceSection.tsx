'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const journeySteps = [
    {
      id: '01',
      title: 'Lab Support',
      subtitle: 'OOP · DSA',
      details: ['Debugging · Concept Guidance', 'Problem Solving', 'Faculty Collaboration', 'Lab Preparation'],
      color: '#52b7a4', // Teal
      bg: 'bg-[#52b7a4]',
      border: 'border-[#52b7a4]',
      text: 'text-[#52b7a4]',
    },
    {
      id: '02',
      title: 'Student Mentoring',
      subtitle: 'Academic Guidance',
      details: ['Individual + Group Counselling', 'Study Strategies', 'Performance Improvement'],
      color: '#a78bfa', // Purple
      bg: 'bg-[#a78bfa]',
      border: 'border-[#a78bfa]',
      text: 'text-[#a78bfa]',
    },
    {
      id: '03',
      title: 'Assessment & Feedback',
      subtitle: 'Evaluation',
      details: ['Assignments · Coding Tasks', 'Class Tests · Grading', 'Constructive Feedback', 'Course Alignment'],
      color: '#fde047', // Yellow
      bg: 'bg-[#fde047]',
      border: 'border-[#fde047]',
      text: 'text-[#fde047]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    // Reduced pt-16 to pt-4 to remove the empty gap at the top
    <section id="experience" className="bg-[#050508] pt-0 pb-8 relative overflow-hidden font-sans selection:bg-[#52b7a4]/30">
      
      {/* Abstract Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-teal-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-10 flex flex-col items-center text-center"
        >
          {/* Matched the title color combination to the reference image */}
          <motion.h2 variants={itemVariants} className="section-heading font-black tracking-tight leading-tight text-white">
            Professional <span className="bg-gradient-to-r from-white via-[#bce0d5] to-[#52b7a4] bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-12 h-1 bg-[#52b7a4] rounded-full mt-4 opacity-80" />
        </motion.div>

        {/* ─── THE ALL-IN-ONE CARD ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="w-full relative rounded-[2rem] bg-[#09090b] border border-white/5 hover:border-[#52b7a4]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-10px_rgba(82,183,164,0.15)] transition-all duration-500 overflow-hidden flex flex-col group"
        >
          
          {/* Subtle top-right corner glow effect on hover */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(82,183,164,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

          {/* Main Grid: Left (Role) & Right (Circles) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-10 lg:gap-14 p-8 sm:p-12 lg:p-14 items-center">
            
            {/* LEFT COLUMN: Role Information */}
            <motion.div variants={itemVariants} className="flex flex-col text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-[1.1] mb-5">
                Undergraduate Teaching Assistant
              </h3>

              
              <div className="flex flex-col items-center lg:items-start justify-center gap-1.5">
                <span className="text-[12px] sm:text-[13px] text-slate-400">
                  Dept of CSE & Data Science
                </span>
                <span className="text-[12px] sm:text-[13px] font-bsold tracking-wide text-[#52b7a4] mt-1.5">
                  Oct 2024 — Feb 2026
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-slate-200">
                  United International University
                </span>

                
              </div>
            </motion.div>

            {/* RIGHT COLUMN: The Connected Circles */}
            <motion.div variants={itemVariants} className="relative w-full mt-8 lg:mt-0">
              
              {/* Connecting Lines */}
              {/* Desktop Horizontal Line */}
              <div className="absolute top-[2rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden sm:block z-0" />
              {/* Mobile Vertical Line */}
              <div className="absolute left-[2rem] top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:hidden z-0" />

              {/* Grid Layout for Circles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-6 relative z-10">
                {journeySteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-row sm:flex-col items-center sm:items-start text-left sm:text-center group/circle"
                  >
                    {/* Circle */}
                    <div className="sm:mx-auto relative shrink-0">
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 ${step.bg} blur-md opacity-0 group-hover/circle:opacity-20 transition-opacity duration-500 rounded-full`} />
                      
                      <div className={`w-16 h-16 rounded-full bg-[#050508] border-[1.5px] ${step.border} flex items-center justify-center relative z-10 shadow-lg group-hover/circle:scale-105 transition-transform duration-500`}>
                        <span className={`text-lg font-light tracking-widest ${step.text}`}>
                          {step.id}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="ml-6 sm:ml-0 sm:mt-6 flex flex-col items-start sm:items-center w-full">
                      <h4 className="text-[13px] lg:text-[14px] font-black text-white uppercase tracking-[0.05em] mb-1">
                        {step.title}
                      </h4>
                      <span className={`text-[9px] lg:text-[10px] font-bold uppercase tracking-widest ${step.text} mb-3 block`}>
                        {step.subtitle}
                      </span>
                      
                      <div className="flex flex-col items-start sm:items-center text-[#888] space-y-1">
                        {step.details.map((detail, i) => (
                          <p key={i} className="text-[10px] lg:text-[11px] leading-tight font-medium group-hover/circle:text-slate-300 transition-colors">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* BOTTOM FOOTER: Skills & Focus */}
          <div className="relative z-10 border-t border-white/5 bg-white/[0.01] px-8 py-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Core Focus:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-300">
              <span className="hover:text-teal-400 transition-colors cursor-default">C/C++</span>
              <span className="hover:text-teal-400 transition-colors cursor-default">Python</span>
              <span className="hover:text-teal-400 transition-colors cursor-default">OOP & DSA</span>
              <span className="hover:text-teal-400 transition-colors cursor-default">Mentorship</span>
              <span className="hover:text-teal-400 transition-colors cursor-default">Lab Facilitation</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}