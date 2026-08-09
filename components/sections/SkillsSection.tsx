'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const categories = [
    {
      id: '01',
      title: 'Development',
      items: [
        { name: 'Languages', list: ['Python', 'Java', 'JavaScript', 'PHP', 'SQL', 'C/C++', 'HTML', 'CSS'] },
        { name: 'Frameworks & Tools', list: ['Spring Boot', 'Laravel', 'Git/GitHub', 'Maven', 'MySQL', 'H2', 'XAMPP', 'LaTeX', 'Jira', 'Canva'] }
      ]
    },
    {
      id: '02',
      title: 'Web & Product Design',
      items: [
        { name: 'Design', list: ['UI/UX Design', 'Human-Centric Design', 'Responsive Design', 'Gamification Design'] },
        { name: 'Implementation', list: ['Full-Stack Development', 'Web Development'] }
      ]
    },
    {
      id: '03',
      title: 'AI & Data Science',
      items: [
        { name: 'Core', list: ['Machine Learning', 'Deep Learning', 'NLP', 'Digital Image Processing'] },
        { name: 'Stack', list: ['TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'] }
      ]
    },
    {
      id: '04',
      title: 'Engineering & Research',
      items: [
        { name: 'Engineering', list: ['OOP', 'DSA', 'Software Engineering', 'DBMS', 'RDBMS'] },
        { name: 'Research', list: ['Literature Review', 'Experimental Design', 'Data Preprocessing', 'Prototype Development', 'Research Writing'] }
      ]
    },
    {
      id: '05',
      title: 'Leadership & Strategy',
      items: [
        { name: 'Management', list: ['Mentoring', 'Team Collaboration', 'Strategic Planning', 'Classroom Facilitation', 'Problem Solving', 'Time Management', 'Public Speaking'] }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="bg-[#050505] pt-4 pb-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-1/4 right-10 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="container-max mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="mb-10 md:mb-12">
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Skills</span>
          </motion.h2>
        </motion.div>

        {/* Premium Skills Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="group relative rounded-[2rem] border border-white/5 bg-[#0d0d12]/40 p-8 md:p-12 backdrop-blur-sm transition-all duration-700 hover:border-teal-500/30 hover:bg-[#0d0d12]/60 shadow-2xl"
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />

          <div className="relative z-10 space-y-12">
            {categories.map((cat) => (
              <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 border-t border-white/5 pt-8 first:border-0 first:pt-0">
                {/* Category Title */}
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-mono font-bold text-teal-500/30 group-hover:text-teal-500/60 pt-1 tracking-widest transition-colors duration-500">
                    {cat.id}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {cat.items.map((sub, i) => (
                    <div key={i}>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2.5">
                        {sub.name}
                      </h4>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {sub.list.map((skill) => (
                          <span key={skill} className="text-[14px] font-light text-slate-300 hover:text-white transition-colors duration-500 cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}