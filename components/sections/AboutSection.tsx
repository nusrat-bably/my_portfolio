'use client';

import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Philosophy',
    description:
      'More than just a developer or researcher, I’m someone who finds meaning in patterns, peace in solitude, and purpose in learning.',
    tag: '01',
  },
  {
    title: 'Approach',
    description:
      'Whether I’m working on a hands-on project or diving into research, I see both as opportunities to ask better questions, not just chase quick results.',
    tag: '02',
  },
  {
    title: 'Values',
    description:
      'Clarity matters to me - in thought, design, and execution. I value depth over noise, intention over speed, and progress that feels grounded. Be it code, models, or ideas - I approach all with empathy, curiosity, and care.',
    tag: '03',
  },
];

const galleryItems = [
  { id: 1, title: 'Strategic Thinking', subtitle: 'Chess', image: '/photos/Chess.jpeg', fit: 'object-contain' },
  { id: 2, title: 'Learning', subtitle: 'Reading', image: '/photos/reading.jpeg', fit: 'object-contain' },
  //{ id: 3, title: 'Creative Expression', subtitle: 'Sketching', image: '/photos/sketching.jpeg', fit: 'object-cover' },
  { id: 5, title: 'Captured Moments', subtitle: 'Photography', image: '/photos/photography.jpeg', fit: 'object-cover' },
  { id: 7, title: 'Companionship', subtitle: 'Pets', image: '/photos/pet.jpeg', fit: 'object-cover' },
];

const getStripWidth = (index: number) => {
  const widths = ['w-48', 'w-44', 'w-52', 'w-48', 'w-44'];
  return widths[index % widths.length];
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="bg-[#050505] pt-0 pb-8 relative overflow-hidden font-sans">
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="container-max mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="mb-5 text-center"
        >
          <motion.h2 variants={itemVariants} className="section-heading font-extrabold tracking-tight text-slate-100">
            Who I Am Beyond <span className="bg-gradient-to-r from-slate-100 via-teal-100 to-teal-500/80 bg-clip-text text-transparent">Tech</span>
          </motion.h2>
        </motion.div>

        <div className="w-full overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="grid grid-cols-3 min-w-[700px] md:min-w-0 max-w-4xl mx-auto gap-0 mb-8" 
          >
            {aboutCards.map((card, index) => {
              const clipPathStyle = 
                index === 0 ? 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%)' :
                index === 1 ? 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 0% 100%, 16px 50%)' :
                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 16px 50%)';

              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  style={{ clipPath: clipPathStyle }}
                  // Reduced vertical padding from py-3 to py-2
                  className={`relative bg-gradient-to-r from-teal-950 via-teal-900 to-teal-950/90 border border-teal-500/40 py-2 shadow-[0_6px_25px_rgba(0,0,0,0.4)] flex flex-col justify-center transition-all duration-300 hover:brightness-110 ${
                    index === 0 ? 'pl-5 pr-8' : index === 1 ? 'pl-8 pr-8' : 'pl-8 pr-5'
                  }`}
                >
                  <div>
                    {/* Reduced bottom margin from mb-1 to mb-0.5 */}
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-0.5">
                      {card.title}
                    </h3>

                    {/* Tightened line height from leading-relaxed to leading-[1.35] */}
                    <p className="text-[10px] sm:text-[11px] leading-[1.35] text-slate-200 font-light">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-white/10 pt-8"
        >
          <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start mb-8">
            
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#45D3B5] mb-1.5">
                Outside The Terminal
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
                Things that<br />keep me curious
              </h3>
              <svg className="w-40 h-3 mt-2 text-[#45D3B5]" viewBox="0 0 180 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C45 4 135 3 178 9M10 6C55 8 125 3 170 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="text-[11.5px] sm:text-[12.5px] leading-relaxed text-slate-300 font-light text-left pt-0">
              <p>
                I’m a person with multiple hobbies and interests. Outside of my technical work, I find balance and inspiration in nature and quiet moments. I enjoy gardening, photography, sketching and journaling — each giving me space to relax and stay creative. Reading broadens my perspective, while chess sharpens my strategic thinking. I also enjoy spending time with my pets, which brings a sense of calm and responsibility. These activities help me stay thoughtful, focused, and energized beyond my research and engineering.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050505] to-transparent" />

            <div className="animate-ticker flex w-max gap-4 px-2 will-change-transform items-center">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className={`group relative h-36 sm:h-44 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center shadow-md ${getStripWidth(idx)}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full ${item.fit} opacity-85 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100`}
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