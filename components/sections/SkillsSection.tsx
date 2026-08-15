'use client';


import { motion } from 'framer-motion';

type Tool = {
  name: string;
  image: string;
};

const skills = {
  software: [
    'Development',
    'OOP',
    'DSA',
    'Software Engineering',
    'DBMS',
    'RDBMS',
    'Full-Stack Development',
  ],
  ai: [
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Data Analysis',
    'Research',
  ],
  design: [
    'UI/UX Design',
    'Human-Centered Design',
    'Responsive Design',
    'HCI',
    'Gamification',
    'Problem Solving',
  ],
};

// Carefully grouped by category to appear in neat rows.
// Grid is locked to 5 columns across ALL devices to preserve this exact arrangement.
const tools: Tool[] = [
  // ROW 1: Languages & Core Web
  { name: 'Python', image: '/Tools/python.png' },
  { name: 'Java', image: '/Tools/java.png' },
  { name: 'Spring Boot', image: '/Tools/springboot.png' },
  { name: 'HTML / CSS / JS', image: '/Tools/htmlcssjavascript.png' },
  { name: 'PHP', image: '/Tools/php.png' },

  // ROW 2: Backend, DB & Build Tools
  { name: 'C / C++', image: '/Tools/c:c++.png' },
  { name: 'Laravel', image: '/Tools/laravel.png' },
  { name: 'MySQL', image: '/Tools/mysql.png' },
  { name: 'H2 DB', image: '/Tools/h2.png' },
  { name: 'Maven', image: '/Tools/maven.png' },

  // ROW 3: AI & Data Science
  { name: 'TensorFlow', image: '/Tools/tensor.png' },
  { name: 'PyTorch', image: '/Tools/pytorch.png' },
  { name: 'Pandas', image: '/Tools/pandas.png' },
  { name: 'NumPy', image: '/Tools/numpy.png' },
  { name: 'Matplotlib', image: '/Tools/matploit.png' },

  // ROW 4: Version Control, Writing, Design & Project Management
  { name: 'Git / GitHub', image: '/Tools/git:github.png' },
  { name: 'LaTeX', image: '/Tools/latex.png' },
  { name: 'Canva', image: '/Tools/canva.png' },
  { name: 'Jira', image: '/Tools/jira.png' },
  { name: 'MS Office', image: '/Tools/msoffice.png' },
];

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5M13.5 4.5l-3 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M9.5 4.5a3 3 0 00-3 3v.5a3 3 0 00-2 2.8A3.2 3.2 0 007.2 14v1.2a3.3 3.3 0 003.3 3.3h1.5V5.8a3 3 0 00-2.5-1.3z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.5 4.5a3 3 0 013 3v.5a3 3 0 012 2.8 3.2 3.2 0 01-2.7 3.2v1.2a3.3 3.3 0 01-3.3 3.3H12V5.8a3 3 0 012.5-1.3z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 9h2M7.5 13h2M14 9h2M14.5 13h2M12 8v9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 20c.5-4 3-6 7-6s6.5 2 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12a2.5 2.5 0 01-1-2M20 12a2.5 2.5 0 001-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  const SkillList = ({ items, color }: { items: string[]; color: string }) => (
    <ul className="mt-2.5 space-y-1 text-[10px] sm:text-[11px] text-white/75 text-left inline-block">
      {items.map((skill) => (
        <li key={skill} className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="skills" className="relative overflow-hidden bg-[#050609] pt-6 pb-20 font-sans">
      
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.055]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal-500/[0.025] blur-[130px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white">
            Technical <span className="text-[#55e4d0]">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-2 sm:mt-3 text-xs sm:text-base text-white/55 tracking-wide px-4">
            The intersection of engineering, intelligence, and human experience.
          </motion.p>
          <motion.div variants={itemVariants} className="mx-auto mt-4 w-10 sm:w-14 h-[2px] bg-[#3ed9c5]" />
        </motion.div>
      </div>

      {/* VENN DIAGRAM - SCALES PERFECTLY TO FIT ANY DEVICE EXACTLY THE SAME */}
      <div className="relative z-10 mt-6 sm:mt-8 w-full flex justify-center items-center h-[240px] sm:h-[380px] md:h-[480px] overflow-hidden">
        
        {/* PRECISE GEOMETRY CONTAINER */}
        <div className="relative w-[600px] h-[460px] shrink-0 origin-center transform scale-[0.45] sm:scale-[0.75] md:scale-100 transition-transform duration-300">

          {/* SOFTWARE ENGINEERING CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="absolute left-[40px] top-[10px] w-[280px] h-[280px] rounded-full border border-[#28cfc0]/55 overflow-hidden"
            style={{ background: 'radial-gradient(circle at 38% 35%, rgba(20,184,166,.15), rgba(20,184,166,.05) 45%, rgba(5,6,9,.72) 76%, rgba(5,6,9,.94))' }}
          >
            <div className="absolute inset-0 opacity-[0.11]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          </motion.div>

          {/* AI & DATA CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="absolute left-[280px] top-[10px] w-[280px] h-[280px] rounded-full border border-[#a87cf3]/55 overflow-hidden"
            style={{ background: 'radial-gradient(circle at 63% 35%, rgba(168,85,247,.14), rgba(168,85,247,.05) 45%, rgba(5,6,9,.72) 76%, rgba(5,6,9,.94))' }}
          >
            <div className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          </motion.div>

          {/* DESIGN CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="absolute left-[160px] top-[190px] w-[280px] h-[280px] rounded-full border border-[#dba43b]/55 overflow-hidden"
            style={{ background: 'radial-gradient(circle at 50% 65%, rgba(245,158,11,.13), rgba(245,158,11,.045) 45%, rgba(5,6,9,.74) 76%, rgba(5,6,9,.95))' }}
          >
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
          </motion.div>

          {/* SOFTWARE TEXT CONTENT */}
          <div className="absolute left-[95px] top-[145px] -translate-y-1/2 z-20 w-[150px] text-center">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#36d7c5]">01</span>
            <h3 className="mt-1 text-[11px] leading-[1.45] font-bold tracking-[0.16em] text-[#45dfce] uppercase">
              Software Engineering
            </h3>
            <div className="flex justify-center">
              <SkillList items={skills.software} color="#36d7c5" />
            </div>
          </div>

          {/* AI TEXT CONTENT */}
          <div className="absolute left-[365px] top-[135px] -translate-y-1/2 z-20 w-[150px] text-center">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#a87cf3]">02</span>
            <h3 className="mt-1 text-[11px] leading-[1.45] font-bold tracking-[0.16em] text-[#b18af4] uppercase">
              AI & Data
            </h3>
            <div className="flex justify-center">
              <SkillList items={skills.ai} color="#a87cf3" />
            </div>
          </div>

          {/* DESIGN TEXT CONTENT */}
          <div className="absolute left-[300px] top-[345px] -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] text-center">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#e2aa43]">03</span>
            <h3 className="mt-1 text-[11px] leading-[1.45] font-bold tracking-[0.16em] text-[#e5ae49] uppercase">
              Design & Human-Centered Systems
            </h3>
            <div className="flex justify-center">
              <SkillList items={skills.design} color="#e2aa43" />
            </div>
          </div>

          {/* OUTER ICONS */}
          <div className="absolute left-[40px] top-[150px] -translate-x-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-[#08090c] border border-[#36d7c5]/55 flex items-center justify-center text-[#36d7c5] shadow-[0_0_24px_rgba(54,215,197,.12)]">
            <CodeIcon />
          </div>
          <div className="absolute left-[560px] top-[150px] -translate-x-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-[#08090c] border border-[#a87cf3]/55 flex items-center justify-center text-[#a87cf3] shadow-[0_0_24px_rgba(168,124,243,.12)]">
            <BrainIcon />
          </div>
          <div className="absolute left-[300px] top-[465px] -translate-x-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-[#08090c] border border-[#e2aa43]/55 flex items-center justify-center text-[#e2aa43] shadow-[0_0_24px_rgba(226,170,67,.12)]">
            <HumanIcon />
          </div>

          {/* CENTRAL INTERSECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute left-[240px] top-[130px] -translate-x-1/2 -translate-y-1/2 z-50 w-[120px] h-[120px] rounded-full border border-white/[0.12] bg-[#07080b]/85 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_45px_rgba(20,184,166,.1)]"
          >
            <SparkIcon />
            <p className="mt-1 text-[8px] leading-[1.5] tracking-[0.18em] font-bold uppercase text-white/90">
              Building<br /><span className="text-[#55e4d0]">Intelligent</span> &<br />Useful Systems
            </p>
          </motion.div>

        </div>
      </div>

      {/* TOOLS & TECHNOLOGIES GRID - FORCED 5 COLUMNS ACROSS ALL DEVICES */}
      <div className="relative z-10 max-w-6xl mx-auto mt-8 sm:mt-12 px-2 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0a0b10]/60 backdrop-blur-md rounded-[16px] sm:rounded-[32px] p-4 sm:p-10 md:p-12 border border-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle Background pattern inside the board */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[16px] sm:rounded-[32px]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative text-center mb-6 sm:mb-10">
            <span className="text-[8px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold text-[#3dd7c5] bg-[#050609]/80 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-teal-500/20 shadow-xl backdrop-blur-sm">
              • &nbsp; Tools & Technologies &nbsp; •
            </span>
          </div>

          {/* Locked to exactly 5 columns at all times. Images will scale down fluidly. */}
          <div className="relative grid grid-cols-5 gap-2 sm:gap-6 lg:gap-8 place-items-center">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.03, 
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.08, 
                  zIndex: 10, 
                  transition: { duration: 0.2 } 
                }}
                className="relative w-full flex items-center justify-center cursor-pointer group p-1"
              >
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="w-full h-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] sm:drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out group-hover:drop-shadow-[0_4px_10px_rgba(62,217,197,0.25)] sm:group-hover:drop-shadow-[0_8px_16px_rgba(62,217,197,0.15)]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}