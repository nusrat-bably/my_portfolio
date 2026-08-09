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
      categories: [
        {
          name: 'Teaching & Technical Support',
          bullets: [
            'Assisted undergraduate students in Object Oriented Programming and Data Structures & Algorithms labs.',
            'Provided debugging support and academic guidance during lab sessions to strengthen problem-solving and programming fundamentals.',
            'Collaborated with faculty members in preparing lab materials and ensuring smooth execution of lab activities.',
          ],
        },
        {
          name: 'Assessment & Evaluation',
          bullets: [
            'Evaluated assignments, coding tasks, and class assessments with consistency and fairness.',
            'Evaluated assignments and class tests as a grader, aligned with course objectives.',
            'Provided constructive feedback to help students improve core Electrical Circuit understanding and theoretical foundations.',
          ],
        },
      ],
      skills: {
        technical: 'C/C++ · Python · OOP · DSA',
        teaching: 'Mentoring · Facilitation · Grading · Academic Support',
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
      
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="container-max mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
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

        {/* Experience Panel */}
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
              className="group relative rounded-[24px] border border-white/5 bg-[#0d0d12]/40 p-8 md:p-12 lg:p-16 backdrop-blur-sm transition-colors duration-700 hover:border-teal-500/30 hover:bg-[#0d0d12]/60"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
                
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-teal-500/30 group-hover:text-teal-500/60 transition-colors duration-500 block mb-6">
                    {exp.id}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug mb-6">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-1.5 mb-8">
                    <p className="text-[15px] font-medium text-slate-300">
                      {exp.company}
                    </p>
                    <p className="text-[14px] font-light text-slate-400">
                      {exp.department}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-12 lg:pt-10">
                  {exp.categories.map((category) => (
                    <div key={category.name}>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-400/80 mb-5">
                        {category.name}
                      </h4>
                      
                      <ul className="space-y-4">
                        {category.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-600 group-hover:bg-teal-500/50 transition-colors duration-500" />
                            <p className="text-[15px] leading-relaxed text-slate-300 font-light group-hover:text-white transition-colors duration-500">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35%_1fr] gap-12 lg:gap-16">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Technical
                  </span>
                  <span className="text-[14px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500">
                    {exp.skills.technical}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Teaching
                  </span>
                  <span className="text-[14px] font-medium text-slate-300 group-hover:text-white transition-colors duration-500">
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