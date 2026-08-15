'use client';


import { motion } from 'framer-motion';

export default function ProjectsSection() {
  // YOUR EXACT ORIGINAL DATA - UNTOUCHED
  const projects = [
    {
      title: 'BiblioTheca',
      category: 'AI-Powered Gamified Library System',
      description: 'An AI-powered gamified library system combining full-stack management, intelligent assistance, and interactive learning.',
      technologies: ['React', 'Spring Boot', 'Java', 'H2 Database', 'REST API'],
      image: '/achieve/p1.jpeg',
      link: 'https://github.com/nubab4088/AoopProject_BiblioTheca_',
      linkLabel: 'GitHub →',
    },
    {
      title: 'Landlytics',
      category: 'Intelligent Land Analytics Platform',
      description: 'An agricultural analytics platform designed to empower rural planning with data-driven crop decisions and real-time weather monitoring.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      image: '/achieve/p2.jpeg',
      link: 'https://github.com/Rezaur16/Landlytics',
      linkLabel: 'GitHub →',
      containImage: true, 
    },
    {
      title: 'Medica DB',
      category: 'Medical Workflow Management System',
      description: 'A full-stack healthcare platform enabling real-time patient management, medical image processing, and secure doctor collaboration.',
      technologies: ['React', 'Node.js', 'Socket.io', 'SQL'],
      image: '/achieve/p3.jpeg',
      link: 'https://github.com/nubab4088/DBMS-Project-_Medical-Image-Database-System',
      linkLabel: 'GitHub →',
    },
    {
      title: 'Fuel Theft & Consumption Monitoring System',
      category: 'Embedded IoT Monitoring Project',
      description: 'An Arduino-based IoT architecture engineered to detect unauthorized fuel extraction and monitor real-time consumption behavior.',
      technologies: ['Arduino', 'C/C++', 'IoT Sensors', 'Bluetooth'],
      image: '/achieve/p4.jpeg', 
      link: '/fuel',
      linkLabel: 'Explore Case Study →',
      isHardware: true,
      containImage: true, 
    },
  ];

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
    <section id="projects" className="bg-[#050505] pt-12 pb-16 relative overflow-hidden font-sans">
      
      {/* Container aligned to max-w-7xl matching all previous sections */}
      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* CENTERED SECTION HEADER WITH GRADIENT TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Featured <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-4 h-[1px] w-24 bg-teal-500/50" />
        </motion.div>

        {/* OVERLAPPING GRID PROJECT LIST */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-20"
        >
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative grid grid-cols-12 gap-0 items-center"
              >
                
                {/* ─── IMAGE CONTAINER ─── */}
                <div 
                  className={`relative col-span-7 row-span-full z-10 group ${
                    isEven ? 'col-start-1' : 'col-start-6'
                  }`}
                >
                  <div className="block relative aspect-[16/10] rounded-md overflow-hidden bg-[#0f1110] shadow-lg group-hover:shadow-2xl z-10 transition-shadow duration-300">
                    {/* Teal Tint Overlay - disappears on hover */}
                    <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply transition-opacity duration-300 ease-out group-hover:opacity-0 z-10 pointer-events-none" />
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full block transform transition-transform duration-500 ease-out group-hover:scale-105 ${
                        project.containImage ? 'object-contain p-3 sm:p-4 md:p-6 bg-[#0f1110]' : 'object-cover object-top'
                      }`}
                    />
                  </div>
                </div>

                {/* ─── EDITORIAL TEXT / CONTENT ─── */}
                <div 
                  className={`relative col-span-6 row-span-full flex flex-col justify-center z-20 pointer-events-none items-start text-left ${
                    isEven 
                      ? 'col-start-7 items-end text-right' 
                      : 'col-start-1'
                  }`}
                >
                  {/* Category (Overline) */}
                  <p className="text-teal-400 font-mono text-[11px] sm:text-[13px] mb-2 pointer-events-auto">
                    {project.category}
                  </p>
                  
                  {/* Project Title - Link Removed */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-4 sm:mb-6 pointer-events-auto transition-colors">
                    {project.title}
                  </h3>

                  {/* Dark Blue Floating Description Box */}
                  <div className="bg-[#112240] p-4 sm:p-6 md:p-8 rounded-md shadow-xl text-slate-300 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-4 sm:mb-6 w-full pointer-events-auto transition-shadow hover:shadow-2xl">
                    {project.description}
                  </div>

                  {/* Mono Tech Stack */}
                  <ul className={`flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 font-mono text-[11px] sm:text-[13px] text-slate-400 mb-4 sm:mb-6 pointer-events-auto justify-start ${
                    isEven ? 'justify-end' : ''
                  }`}>
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="whitespace-nowrap">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Icon Links */}
                  <div className={`flex items-center gap-4 pointer-events-auto justify-start ${
                    isEven ? 'justify-end' : ''
                  }`}>
                    
                    {/* GitHub Icon: Render ONLY for projects 1, 2, and 3 (idx 0, 1, 2) */}
                    {idx < 3 && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-300 hover:text-teal-400 transition-colors transform hover:-translate-y-1 duration-200"
                        aria-label={project.linkLabel}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    )}

                    {/* External Link Icon: Render ONLY for project 4 (idx 3) */}
                    {idx === 3 && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-300 hover:text-teal-400 transition-colors transform hover:-translate-y-1 duration-200"
                        aria-label="View Live Project"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}