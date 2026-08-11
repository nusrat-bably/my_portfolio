'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-12 pb-24 relative overflow-hidden font-sans">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-1/3 left-10 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-10 md:mb-14 flex flex-col items-center text-center"
        >
          <motion.span variants={itemVariants} className="text-teal-500/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-3">
            Selected Works
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Unified Feature Card Grid - Tighter spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 md:space-y-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              // Reduced padding to make the entire card more compact
              className="group relative rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-[#0d0d12]/40 p-5 sm:p-6 md:p-8 backdrop-blur-md transition-all duration-700 hover:border-teal-500/30 hover:bg-[#121218]/60 shadow-xl hover:shadow-2xl hover:shadow-teal-500/5 overflow-hidden"
            >
              {/* Reduced gap between image and text */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                
                {/* ─── PROJECT IMAGE (Dominant Layer) ─── */}
                <div className={`col-span-1 lg:col-span-7 order-1 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Changed aspect ratio to aspect-video (16:9) to drastically reduce the vertical height */}
                  <div className={`relative aspect-video w-full rounded-xl md:rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-teal-500/20 transition-all duration-700 p-0
                    ${project.isHardware ? 'bg-[#0f1110]' : 'bg-[#0b0c10]'}`}
                  >
                    {/* Subtle Overlay Gradients & Hardware Grid */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10 pointer-events-none" />
                    {project.isHardware && (
                      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    )}

                    {project.image.startsWith('/') ? (
                      <div className="relative z-0 w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full filter brightness-90 contrast-[1.05] transform transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:brightness-100 ${
                            project.containImage ? 'object-contain p-4 md:p-6' : 'object-cover object-top'
                          }`}
                        />
                      </div>
                    ) : (
                      <span className="text-6xl sm:text-7xl transform transition-transform duration-500 group-hover:scale-110 relative z-10 select-none opacity-50">
                        {project.image}
                      </span>
                    )}
                  </div>
                </div>

                {/* ─── PROJECT INFORMATION (Editorial Layer) ─── */}
                <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center order-2 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Category & Title */}
                  <div className="space-y-2 mb-4">
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400/90">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-[1.1] group-hover:text-teal-50 transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>

                  {/* Concise Description - Tighter margin */}
                  <p className="text-sm text-[#a0a0a0] leading-relaxed font-normal mb-5">
                    {project.description}
                  </p>

                  {/* Compact Technology Row - Tighter margin */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[10px] sm:text-[11px] font-mono font-medium text-[#707070] mb-6">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#c0c0c0] hover:text-teal-300 transition-colors duration-300 cursor-default">
                          {tech}
                        </span>
                        {i < project.technologies.length - 1 && (
                          <span className="text-teal-500/40 px-1 font-sans select-none">&middot;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <div>
                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : undefined}
                      rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-4 py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300 shrink-0 group/btn"
                    >
                      <span>{project.linkLabel}</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}