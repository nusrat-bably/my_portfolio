'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      id: '01',
      title: 'Undergraduate Teaching Assistant',
      company: 'United International University',
      department: 'Department of CSE & Data Science',
      period: 'Oct 2024 — Feb 2026',
      responsibilityGroups: [
        {
          id: '01',
          name: 'Lab Support',
          course: 'OOP · DSA',
          clusters: [
            'Debugging · Concept Guidance · Problem Solving',
            'Faculty Collaboration · Lab Preparation',
          ],
        },
        {
          id: '02',
          name: 'Student Mentoring',
          course: 'Academic Guidance',
          clusters: [
            'Individual + Group Counselling',
            'Study Strategies · Performance Improvement',
          ],
        },
        {
          id: '03',
          name: 'Assessment & Feedback',
          course: '',
          clusters: [
            'Assignments · Coding Tasks · Class Tests · Grading',
            'Constructive Feedback · Course Alignment',
          ],
        },
      ],
      skills: {
        technical: 'C/C++ · Python · OOP · DSA',
        teaching: 'Mentoring · Grading · Academic Support · Lab Facilitation',
      },
    },
  ];

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
    <section id="experience" className="bg-[#050505] pt-12 pb-12 relative overflow-hidden font-sans">
      
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-10 flex flex-col items-center text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Professional <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-4 h-[1px] w-24 bg-teal-500/50" />
        </motion.div>

        {/* Experience Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative rounded-[24px] border border-white/5 bg-[#0d0d12]/40 p-6 md:p-10 backdrop-blur-sm transition-colors duration-700 hover:border-teal-500/30 hover:bg-[#0d0d12]/60 shadow-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 lg:gap-12">
                
                {/* Left Column */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-teal-500/30 group-hover:text-teal-500/60 transition-colors duration-500 block mb-4">
                    {exp.id}
                  </span>
                  
                  <h3 className="text-xl lg:text-2xl font-extrabold text-white tracking-tight uppercase leading-snug mb-4">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-1 mb-6 lg:mb-0">
                    <p className="text-[14px] font-medium text-slate-300">
                      {exp.company}
                    </p>
                    <p className="text-[13px] font-light text-slate-400">
                      {exp.department}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto hidden lg:block">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Right Column - Responsibilities */}
                <div className="flex flex-col gap-8 lg:pt-1">
                  <p className="text-[14px] text-slate-400 font-light italic mb-1">
                    Supported students across laboratory learning, academic development, and assessment.
                  </p>

                  <div className="space-y-0 relative border-l border-white/5 pl-6 ml-1">
                    {exp.responsibilityGroups.map((group, index) => (
                      <div key={group.id} className="relative pb-8 last:pb-0">
                        <div className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#0d0d12] bg-slate-700 group-hover:bg-teal-500 group-hover:border-teal-900/50 transition-colors duration-500 z-10" />
                        
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 items-baseline">
                          <div className="flex items-baseline gap-2.5 col-span-2 sm:col-span-1">
                            <span className="text-lg font-mono font-bold text-teal-500/30 group-hover:text-teal-400 transition-colors duration-500">
                              {group.id}
                            </span>
                            <h4 className="text-base font-bold text-white tracking-tight">
                              {group.name}
                            </h4>
                          </div>

                          {group.course && (
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-teal-500/80 sm:justify-self-end sm:text-right col-span-2 sm:col-span-1 mt-1 sm:mt-0">
                              {group.course}
                            </span>
                          )}

                          <div className="col-span-2 space-y-1 mt-2 pl-7 sm:pl-8">
                            {group.clusters.map((cluster, i) => (
                              <p key={i} className="text-[14px] leading-relaxed text-slate-300 font-light group-hover:text-slate-100 transition-colors duration-500">
                                {cluster}
                              </p>
                            ))}
                          </div>
                        </div>
                        
                        {index !== exp.responsibilityGroups.length - 1 && (
                          <div className="absolute left-6 right-0 bottom-4 h-[1px] bg-white/[0.03]" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/10 mt-2 lg:hidden">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35%_1fr] gap-8 lg:gap-12">
                <div className="flex flex-col gap-1.5 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-0 lg:pl-6">
                    Technical
                  </span>
                  <span className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500 pl-0 lg:pl-6">
                    {exp.skills.technical}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1.5 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-teal-500/10 hidden lg:block"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400/80 pl-0 lg:pl-6">
                    Teaching
                  </span>
                  <span className="text-[13px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500 pl-0 lg:pl-6">
                    {exp.skills.teaching}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}