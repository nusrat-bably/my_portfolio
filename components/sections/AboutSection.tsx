'use client';

import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Philosophy',
    description:
      'More than just a developer or researcher, I’m someone who finds meaning in patterns, peace in solitude, and purpose in learning.',
    tag: 'Mindset',
  },
  {
    title: 'Approach',
    description:
      'Whether I’m working on a hands-on project or diving into research, I see both as opportunities to ask better questions, not just chase quick results.',
    tag: 'Methodology',
  },
  {
    title: 'Values',
    description:
      'Clarity matters to me - in thought, design, and execution. I value depth over noise, intention over speed, and progress that feels grounded. Be it code, models, or ideas - I approach all with empathy, curiosity, and care.',
    tag: 'Principles',
  },
];

const galleryItems = [
  { id: 1, title: 'Strategic Thinking', subtitle: 'Chess', image: '/photos/Chess.jpeg', fit: 'object-contain' },
  { id: 2, title: 'Learning', subtitle: 'Reading', image: '/photos/reading.jpeg', fit: 'object-contain' },
  { id: 3, title: 'Creative Expression', subtitle: 'Sketching', image: '/photos/sketching.jpeg', fit: 'object-cover' },
  { id: 5, title: 'Captured Moments', subtitle: 'Photography', image: '/photos/photography.jpeg', fit: 'object-cover' },
  { id: 7, title: 'Companionship', subtitle: 'Pets', image: '/photos/pet.jpeg', fit: 'object-cover' },
];

const getGlowPosition = (index: number) => {
  if (index === 0) return "circle_at_top_right";
  if (index === 1) return "circle_at_bottom_left";
  return "circle_at_bottom_right";
};

const getStripWidth = (index: number) => {
  const widths = ['w-64', 'w-56', 'w-72', 'w-64', 'w-56'];
  return widths[index % widths.length];
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="bg-[#050505] pt-4 pb-16 relative overflow-hidden">
      
      {/* Ultra-subtle ambient texture */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[150px]" />

      <div className="container-max mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-10 md:mb-12 space-y-4"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="h-[1px] w-8 bg-teal-500/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888]">
              About Me
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Who I Am Beyond <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Tech</span>
          </motion.h2>
        </motion.div>

        {/* The Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group relative rounded-[20px] border border-white/5 bg-[#0d0d12]/40 p-6 md:px-8 md:py-8 backdrop-blur-sm transition-colors duration-700 hover:border-teal-500/30 hover:bg-[#0d0d12]/60 flex flex-col justify-between overflow-hidden"
            >
              <div 
                className={`absolute inset-0 bg-[radial-gradient(${getGlowPosition(index)},rgba(20,184,166,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[20px]`} 
              />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-medium text-teal-500/30 group-hover:text-teal-500/60 transition-colors duration-500 font-mono tracking-wider">
                    0{index + 1}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors duration-500">
                    {card.tag}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-300 font-light group-hover:text-white transition-colors duration-500">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="border-t border-white/5 pt-12"
        >
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-500/70 mb-3 block">
                Outside The Terminal
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-200">
                Things that keep me curious
              </h3>
            </div>
            
            <p className="text-[15px] leading-relaxed text-slate-300 font-light lg:max-w-2xl">
              I’m a person with multiple hobbies and interests. Outside of my technical work, I find balance and inspiration in nature and quiet moments. I enjoy gardening, photography, sketching and journaling — each giving me space to relax and stay creative. Reading broadens my perspective, while chess sharpens my strategic thinking. I also enjoy spending time with my pets, which brings a sense of calm and responsibility. These activities help me stay thoughtful, focused, and energized beyond my research and engineering.
            </p>
          </div>

          {/* Personal Archive Photo Strip */}
          <div className="relative overflow-hidden py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent" />

            <div className="animate-ticker flex w-max gap-4 sm:gap-6 px-4 will-change-transform items-center">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className={`group relative h-48 sm:h-56 shrink-0 overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a] flex items-center justify-center ${getStripWidth(idx)}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full ${item.fit} opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}