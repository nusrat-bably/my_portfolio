'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiencesData = [
    {
      id: 'exp-1',
      role: 'Researcher',
      subtitle1: 'Computer Vision & AI/ML',
      date: 'Sep 2026 — Present',
      subtitle2: 'ELITE Research Lab LLC',
      cardStyles: {
        hoverBorder: 'hover:border-[#52b7a4]/40',
        hoverShadow: 'hover:shadow-[0_0_40px_-10px_rgba(82,183,164,0.15)]',
        glowBg: 'bg-[radial-gradient(circle_at_top_right,rgba(82,183,164,0.12),transparent_60%)]',
        dateColor: 'text-[#52b7a4]',
      },
      coreFocus: ['Computer Vision', 'Medical Imaging', 'AI/ML', 'Problem Solving', 'Documentation'],
      steps: [
        {
          id: '01',
          title: 'Research Activities',
          subtitle: 'Core Tech',
          details: ['Computer Vision', 'Medical Imaging', 'AI/ML', 'Intelligent Systems'],
          color: '#52b7a4',
          bg: 'bg-[#52b7a4]',
          border: 'border-[#52b7a4]',
          text: 'text-[#52b7a4]',
        },
        {
          id: '02',
          title: 'Problem Exploring',
          subtitle: 'Analysis',
          details: ['Evaluating Approaches', 'Developing Ideas', 'Practical Solutions', 'Research Problems'],
          color: '#a78bfa',
          bg: 'bg-[#a78bfa]',
          border: 'border-[#a78bfa]',
          text: 'text-[#a78bfa]',
        },
        {
          id: '03',
          title: 'Collaboration',
          subtitle: 'Teamwork',
          details: ['Technical Discussions', 'Research Documentation', 'Project Development'],
          color: '#fde047',
          bg: 'bg-[#fde047]',
          border: 'border-[#fde047]',
          text: 'text-[#fde047]',
        },
      ],
    },
    {
      id: 'exp-2',
      role: 'Undergraduate Teaching Assistant',
      subtitle1: 'Dept of CSE & Data Science',
      date: 'Oct 2024 — Feb 2026',
      subtitle2: 'United International University',
      cardStyles: {
        hoverBorder: 'hover:border-[#52b7a4]/40',
        hoverShadow: 'hover:shadow-[0_0_40px_-10px_rgba(82,183,164,0.15)]',
        glowBg: 'bg-[radial-gradient(circle_at_top_right,rgba(82,183,164,0.12),transparent_60%)]',
        dateColor: 'text-[#52b7a4]',
      },
      coreFocus: ['C/C++', 'Python', 'OOP & DSA', 'Mentorship', 'Lab Facilitation'],
      steps: [
        {
          id: '01',
          title: 'Lab Support',
          subtitle: 'OOP · DSA',
          details: ['Debugging · Concept Guidance', 'Problem Solving', 'Faculty Collaboration', 'Lab Preparation'],
          color: '#52b7a4',
          bg: 'bg-[#52b7a4]',
          border: 'border-[#52b7a4]',
          text: 'text-[#52b7a4]',
        },
        {
          id: '02',
          title: 'Student Mentoring',
          subtitle: 'Academic Guidance',
          details: ['Individual + Group Counselling', 'Study Strategies', 'Performance Improvement'],
          color: '#a78bfa',
          bg: 'bg-[#a78bfa]',
          border: 'border-[#a78bfa]',
          text: 'text-[#a78bfa]',
        },
        {
          id: '03',
          title: 'Assessment & Feedback',
          subtitle: 'Evaluation',
          details: ['Assignments · Coding Tasks', 'Class Tests · Grading', 'Constructive Feedback', 'Course Alignment'],
          color: '#fde047',
          bg: 'bg-[#fde047]',
          border: 'border-[#fde047]',
          text: 'text-[#fde047]',
        },
      ],
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
    <section id="experience" className="bg-[#050508] pt-0 pb-8 relative overflow-hidden font-sans selection:bg-[#52b7a4]/30">
      
      {/* Abstract Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-teal-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="container-max mx-auto max-w-[1400px] px-4 sm:px-6 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-10 flex flex-col items-center text-center"
        >
          <motion.h2 variants={itemVariants} className="section-heading font-black tracking-tight leading-tight text-white">
            Professional <span className="bg-gradient-to-r from-white via-[#bce0d5] to-[#52b7a4] bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-12 h-1 bg-[#52b7a4] rounded-full mt-4 opacity-80" />
        </motion.div>

        {/* ─── SIDE-BY-SIDE GRID ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 xl:gap-8"
        >
          {experiencesData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              // Added h-full to the outer card so they stretch equally in the grid
              className={`w-full h-full relative rounded-[2rem] bg-[#09090b] border border-white/5 ${exp.cardStyles.hoverBorder} shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${exp.cardStyles.hoverShadow} transition-all duration-500 overflow-hidden flex flex-col group`}
            >
              
              {/* Subtle top-right corner glow effect on hover */}
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${exp.cardStyles.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />

              {/* MAIN CARD CONTENT (Header & Circles) */}
              {/* Added flex-grow so this section fills available space, pushing the footer down evenly */}
              <div className="relative z-10 flex flex-col flex-grow p-8 sm:p-12 xl:p-8 xl:pb-4">
                
                {/* 1. Header Information (Role) */}
                <div className="flex flex-col text-center mb-10 xl:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-2xl font-black text-white tracking-tighter leading-[1.1] mb-5 xl:mb-3">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col items-center justify-center gap-1.5 xl:gap-1">
                    <span className="text-[12px] sm:text-[13px] xl:text-[11px] text-slate-400">
                      {exp.subtitle1}
                    </span>
                    <span className={`text-[12px] sm:text-[13px] xl:text-[12px] font-bold tracking-wide ${exp.cardStyles.dateColor} mt-1.5 xl:mt-0.5`}>
                      {exp.date}
                    </span>
                    <span className="text-[14px] sm:text-[15px] xl:text-[13px] font-medium text-slate-200 mt-1">
                      {exp.subtitle2}
                    </span>
                  </div>
                </div>

                {/* 2. The Connected Circles */}
                <div className="relative w-full flex-grow flex items-center mb-6 xl:mb-2">
                  
                  {/* Connecting Lines */}
                  {/* Adjusted top position strictly for desktop circle size */}
                  <div className="absolute top-[2rem] xl:top-[1.375rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden sm:block z-0" />
                  <div className="absolute left-[2rem] top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:hidden z-0" />

                  {/* Grid Layout for Circles */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 xl:gap-2 w-full relative z-10">
                    {exp.steps.map((step) => (
                      <div
                        key={step.id}
                        className="flex flex-row sm:flex-col items-center sm:items-start text-left sm:text-center group/circle"
                      >
                        {/* Circle */}
                        <div className="sm:mx-auto relative shrink-0">
                          <div className={`absolute inset-0 ${step.bg} blur-md opacity-0 group-hover/circle:opacity-20 transition-opacity duration-500 rounded-full`} />
                          
                          {/* Circle size optimized for desktop height reduction */}
                          <div className={`w-16 h-16 xl:w-11 xl:h-11 rounded-full bg-[#050508] border-[1.5px] ${step.border} flex items-center justify-center relative z-10 shadow-lg group-hover/circle:scale-105 transition-transform duration-500`}>
                            <span className={`text-lg xl:text-xs font-light tracking-widest ${step.text}`}>
                              {step.id}
                            </span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="ml-6 sm:ml-0 sm:mt-6 xl:mt-4 flex flex-col items-start sm:items-center w-full">
                          <h4 className="text-[13px] lg:text-[14px] xl:text-[12px] font-black text-white uppercase tracking-[0.05em] mb-1">
                            {step.title}
                          </h4>
                          <span className={`text-[9px] lg:text-[10px] xl:text-[8px] font-bold uppercase tracking-widest ${step.text} mb-3 xl:mb-1.5 block`}>
                            {step.subtitle}
                          </span>
                          
                          <div className="flex flex-col items-start sm:items-center text-[#888] space-y-1 xl:space-y-0.5">
                            {step.details.map((detail, i) => (
                              <p key={i} className="text-[10px] lg:text-[11px] xl:text-[9.5px] leading-tight font-medium group-hover/circle:text-slate-300 transition-colors">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* 3. BOTTOM FOOTER: Skills & Focus */}
              {/* Added a strict fixed height (xl:h-[76px]) on desktop to force identical boxes! */}
              <div className="relative z-10 border-t border-white/5 bg-white/[0.01] w-full min-h-[90px] xl:min-h-0 xl:h-[76px] flex flex-wrap items-center justify-center px-8 py-6 xl:px-4 xl:py-0 gap-x-6 gap-y-3 xl:gap-x-4 xl:gap-y-1.5 mt-auto">
                <span className="text-[10px] xl:text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Core Focus:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 xl:gap-x-4 xl:gap-y-1.5 text-[10px] xl:text-[9px] font-bold uppercase tracking-[0.1em] text-slate-300">
                  {exp.coreFocus.map((focusItem, index) => (
                    <span key={index} className="hover:text-teal-400 transition-colors cursor-default">
                      {focusItem}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}