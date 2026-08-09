'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'BiblioTheca',
      subtitle: 'AI-Powered Gamified Library System',
      description: 'Interactive full-stack library management system with gamification, AI integration, and secure REST architecture.',
      technologies: ['React', 'JavaScript', 'Spring Boot', 'Java', 'H2 Database', 'REST API', 'CSS'],
      highlights: [
        'Developed full-stack gamified library management system using React and Spring Boot.',
        'Implemented book management, authentication, routing, and REST API features.',
        'Designed an AI-assisted chatbot module and interactive dungeon mini-game system.',
        'Built responsive dark-mode UI with modern user-centric design.',
      ],
      image: '/achieve/p1.jpeg',
      link: 'https://github.com/nubab4088/AoopProject_BiblioTheca_',
      linkLabel: 'GitHub',
    },
    {
      title: 'Landlytics',
      subtitle: 'Intelligent Land Analytics Platform',
      description: 'Agricultural analytics platform for land management, weather monitoring, and data-driven crop decisions.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
      highlights: [
        'Developed Laravel-based platform for land management and agricultural analysis.',
        'Integrated weather and land data for informed crop recommendation workflows.',
        'Built modules supporting data-driven land decision-making in rural planning.',
      ],
      image: '/achieve/p2.jpeg',
      link: 'https://github.com/Rezaur16/Landlytics',
      linkLabel: 'GitHub',
    },
    {
      title: 'Medica DB',
      subtitle: 'Medical Workflow Management System',
      description: 'Full-stack medical workflow platform for real-time patient management and doctor collaboration.',
      technologies: ['React', 'Node.js', 'Express', 'REST APIs', 'Socket.io', 'SQL', 'HTML5 Canvas', 'JavaScript'],
      highlights: [
        'Enabled doctors to manage patients and process medical images.',
        'Implemented professional discussion spaces and activity monitoring in real time.',
        'Built responsive interface for healthcare collaboration and workflows.',
      ],
      image: '/achieve/p3.jpeg',
      link: 'https://github.com/nubab4088/DBMS-Project-_Medical-Image-Database-System',
      linkLabel: 'GitHub',
    },
    {
      title: 'Fuel Theft & Consumption Monitoring System',
      subtitle: 'Embedded IoT Monitoring Project',
      description: 'Arduino-based IoT system that detects unauthorized fuel extraction and monitors fuel consumption behavior.',
      technologies: ['Arduino', 'C/C++', 'Ultrasonic Sensor', 'Flow Meter', 'Speed Sensor', 'Bluetooth (HC-05)', 'I2C LCD'],
      highlights: [
        'Built IoT system to detect unauthorized fuel extraction and theft alerts.',
        'Integrated ultrasonic and flow sensors to monitor fuel levels and trigger instant alerts.',
        'Interfaced speed sensor for velocity-efficiency correlation analysis.',
        'Implemented wireless data transmission via Bluetooth and displayed metrics on I2C LCD.',
      ],
      image: '/achieve/p4.jpeg', 
      link: '/fuel',
      linkLabel: 'View Case Study',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-4 pb-16 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-1/3 left-10 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="container-max mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-10 md:mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-teal-300">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Unified Feature Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl transition-all duration-500 hover:border-teal-500/40 hover:bg-white/[0.03] shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                <div className={`col-span-1 lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-video sm:aspect-[16/10] lg:aspect-square xl:aspect-[16/10] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-teal-500/30 transition-all duration-500 p-4 sm:p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.18)_0%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
                    
                    {project.image.startsWith('/') ? (
                      <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-h-full max-w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transform transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <span className="text-7xl sm:text-8xl transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 relative z-10 select-none">
                        {project.image}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`col-span-1 lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-2">
                      {project.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-[#a0a0a0] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#707070]">Key Implementations:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#a0a0a0] flex items-start gap-2.5 leading-normal">
                          <span className="text-teal-400 font-bold mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2 max-w-lg">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-[#e5e5e5] transition-colors hover:border-teal-500/50 hover:bg-teal-500/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : undefined}
                      rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-teal-500/40 bg-teal-500/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-300 shrink-0 group/btn"
                    >
                      <span>{project.linkLabel}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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