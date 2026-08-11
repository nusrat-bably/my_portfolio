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
      // Redesigned data structure for editorial layout
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
          course: 'CSE & EEE',
          clusters: [
            'Assignments · Coding Tasks · Class Tests · Grading',
            'Constructive Feedback · Course Alignment',
          ],
        },
      ],
      skills: {
        technical: 'C/C++ · Python · OOP · DSA',
        // Reviewed teaching keywords to remove redundancy with new right-side content
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
    <section id="experience" className="bg-[#050505] pt-4 pb-16 relative overflow-hidden">
      
      {/* Ambient Background Glow - Preserved */}
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="container-max mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header - Preserved */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-12 md:mb-16 space-y-4"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="h-[1px] w-8 bg-teal-500/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888]">
              Experience
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Professional <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Experience Panel - Main container preserved */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              // Preserved styling, border, background, padding, transitions, hover effects
              className="group relative rounded-[24px] border border-white/5 bg-[#0d0d12]/40 p-8 md:p-12 lg:p-16 backdrop-blur-sm transition-colors duration-700 hover:border-teal-500/30 hover:bg-[#0d0d12]/60"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px]" />

              {/* Preserved grid structure and gap */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
                
                {/* Left Column - Strictly Preserved content and styling */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-teal-500/30 group-hover:text-teal-500/60 transition-colors duration-500 block mb-6">
                    {exp.id}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug mb-6">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-1.5 mb-8 lg:mb-0">
                    <p className="text-[15px] font-medium text-slate-300">
                      {exp.company}
                    </p>
                    <p className="text-[14px] font-light text-slate-400">
                      {exp.department}
                    </p>
                  </div>

                  {/* Date placement preserved at bottom of left column on desktop */}
                  <div className="pt-6 border-t border-white/10 mt-auto hidden lg:block">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Right Column - REDESIGNED for editorial "Responsibilities" area */}
                <div className="flex flex-col gap-10 lg:pt-2">
                  {/* Optional short intro sentence */}
                  <p className="text-[15px] text-slate-400 font-light italic mb-2">
                    Supported students across laboratory learning, academic development, and assessment.
                  </p>

                  <div className="space-y-0 relative border-l border-white/5 pl-8 ml-1">
                    {exp.responsibilityGroups.map((group, index) => (
                      <div key={group.id} className="relative pb-10 last:pb-0">
                        {/* Timeline Connector Dot */}
                        <div className="absolute -left-[36px] top-1 h-3 w-3 rounded-full border-2 border-[#0d0d12] bg-slate-700 group-hover:bg-teal-500 group-hover:border-teal-900/50 transition-colors duration-500 z-10" />
                        
                        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-baseline">
                          {/* Numbering and Name */}
                          <div className="flex items-baseline gap-3 col-span-2 sm:col-span-1">
                            <span className="text-xl font-mono font-bold text-teal-500/30 group-hover:text-teal-400 transition-colors duration-500">
                              {group.id}
                            </span>
                            <h4 className="text-lg font-bold text-white tracking-tight">
                              {group.name}
                            </h4>
                          </div>

                          {/* Course/Context - Subtle teal accent */}
                          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-teal-500/80 sm:justify-self-end sm:text-right col-span-2 sm:col-span-1 mt-1 sm:mt-0">
                            {group.course}
                          </span>

                          {/* Information Clusters - Replaces long bullets */}
                          <div className="col-span-2 space-y-1 mt-3 pl-8 sm:pl-9">
                            {group.clusters.map((cluster, i) => (
                              <p key={i} className="text-[15px] leading-relaxed text-slate-300 font-light group-hover:text-slate-100 transition-colors duration-500 cluster-text">
                                {cluster}
                              </p>
                            ))}
                          </div>
                        </div>
                        
                        {/* Subtle Divider, except for last item */}
                        {index !== exp.responsibilityGroups.length - 1 && (
                          <div className="absolute left-8 right-0 bottom-5 h-[1px] bg-white/[0.03]" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Date placement for mobile - stacked naturally */}
                  <div className="pt-6 border-t border-white/10 mt-4 lg:hidden">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata Rows - Strictly Preserved composition and styling */}
              <div className="relative z-10 mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
                <div className="flex flex-col gap-2 relative">
                  {/* Subtle left border to align with content above on desktop */}
                  <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 pl-0 lg:pl-8">
                    Technical
                  </span>
                  <span className="text-[14px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500 pl-0 lg:pl-8">
                    {exp.skills.technical}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  {/* Subtle left border to align with content above */}
                  <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-teal-500/10"/>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400/80 pl-8 cluster-text">
                    Teaching
                  </span>
                  <span className="text-[14px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500 pl-8 cluster-text">
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