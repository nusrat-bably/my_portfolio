'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Tool = {
  name: string;
  short: string;
  tone: string;
  rotation: string;
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

const tools: Tool[] = [
  {
    name: 'Python',
    short: 'Py',
    tone: 'light',
    rotation: '-1.2deg',
  },
  {
    name: 'Java',
    short: '☕',
    tone: 'dark',
    rotation: '0.8deg',
  },
  {
    name: 'Spring Boot',
    short: 'SB',
    tone: 'cream',
    rotation: '-0.4deg',
  },
  {
    name: 'JavaScript',
    short: 'JS',
    tone: 'yellow',
    rotation: '1.4deg',
  },
  {
    name: 'PHP',
    short: 'PHP',
    tone: 'blue',
    rotation: '-0.8deg',
  },
  {
    name: 'C / C++',
    short: 'C++',
    tone: 'light',
    rotation: '0.9deg',
  },
  {
    name: 'Laravel',
    short: 'L',
    tone: 'dark',
    rotation: '-1deg',
  },
  {
    name: 'SQL',
    short: 'SQL',
    tone: 'cream',
    rotation: '0.5deg',
  },
  {
    name: 'Git / GitHub',
    short: 'GH',
    tone: 'dark',
    rotation: '-0.7deg',
  },
  {
    name: 'Maven',
    short: 'M',
    tone: 'light',
    rotation: '1.1deg',
  },
  {
    name: 'MySQL',
    short: 'My',
    tone: 'cream',
    rotation: '-1.3deg',
  },
  {
    name: 'H2',
    short: 'H2',
    tone: 'light',
    rotation: '0.7deg',
  },
  {
    name: 'TensorFlow',
    short: 'TF',
    tone: 'cream',
    rotation: '-0.5deg',
  },
  {
    name: 'Pandas',
    short: 'P',
    tone: 'light',
    rotation: '1.2deg',
  },
  {
    name: 'NumPy',
    short: 'Nu',
    tone: 'light',
    rotation: '-0.8deg',
  },
  {
    name: 'Matplotlib',
    short: 'M',
    tone: 'dark',
    rotation: '0.6deg',
  },
  {
    name: 'LaTeX',
    short: 'TeX',
    tone: 'cream',
    rotation: '-1deg',
  },
  {
    name: 'Canva',
    short: 'Canva',
    tone: 'blueGradient',
    rotation: '0.9deg',
  },
  {
    name: 'Jira',
    short: '◆',
    tone: 'light',
    rotation: '-0.5deg',
  },
  {
    name: 'HTML / CSS',
    short: '5 3',
    tone: 'cream',
    rotation: '0.8deg',
  },
];

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5M13.5 4.5l-3 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M9.5 4.5a3 3 0 00-3 3v.5a3 3 0 00-2 2.8A3.2 3.2 0 007.2 14v1.2a3.3 3.3 0 003.3 3.3h1.5V5.8a3 3 0 00-2.5-1.3z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M14.5 4.5a3 3 0 013 3v.5a3 3 0 012 2.8 3.2 3.2 0 01-2.7 3.2v1.2a3.3 3.3 0 01-3.3 3.3H12V5.8a3 3 0 012.5-1.3z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 9h2M7.5 13h2M14 9h2M14.5 13h2M12 8v9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c.5-4 3-6 7-6s6.5 2 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12a2.5 2.5 0 01-1-2M20 12a2.5 2.5 0 001-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Tape() {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/45 rotate-[-2deg] shadow-sm backdrop-blur-sm z-20" />
  );
}

function ToolCard({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  const toneClasses: Record<string, string> = {
    light: 'bg-[#eeeae2] text-[#151515]',
    cream: 'bg-[#f3f0e9] text-[#191919]',
    dark: 'bg-[#17171b] text-white border-white/10',
    yellow: 'bg-[#e7c63f] text-[#151515]',
    blue: 'bg-[#1f315f] text-white',
    blueGradient:
      'bg-gradient-to-br from-[#16a6a1] via-[#2584df] to-[#265de0] text-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotate: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: Number(tool.rotation.replace('deg', '')),
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        rotate: 0,
        scale: 1.025,
        transition: { duration: 0.2 },
      }}
      className={`relative rounded-[3px] border border-black/10 overflow-visible
        min-h-[118px] sm:min-h-[128px] p-5 flex flex-col justify-between
        shadow-[0_12px_30px_rgba(0,0,0,0.22)]
        ${toneClasses[tool.tone]}`}
    >
      <Tape />

      <div className="absolute right-3 top-8 opacity-[0.09] pointer-events-none">
        <svg width="74" height="55" viewBox="0 0 74 55" fill="none">
          <path
            d="M2 45C15 15 28 52 42 22C51 3 58 30 72 8"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="42" cy="22" r="3" stroke="currentColor" />
          <circle cx="58" cy="30" r="2" stroke="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 flex items-start justify-between">
        <span
          className={`font-bold leading-none ${
            tool.name === 'LaTeX'
              ? 'font-serif italic text-2xl'
              : 'text-2xl tracking-tight'
          }`}
        >
          {tool.short}
        </span>

        <span className="text-[8px] tracking-[0.22em] uppercase opacity-45">
          0{(index % 9) + 1}
        </span>
      </div>

      <div className="relative z-10">
        <p className="text-[11px] font-semibold tracking-[0.17em] uppercase">
          {tool.name}
        </p>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const SkillList = ({
    items,
    color,
  }: {
    items: string[];
    color: string;
  }) => (
    <ul className="mt-4 space-y-2.5 text-[11px] sm:text-xs text-white/75">
      {items.map((skill) => (
        <li key={skill} className="flex items-center gap-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050609] pt-20 pb-28 font-sans"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal-500/[0.025] blur-[130px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white"
          >
            Technical <span className="text-[#55e4d0]">Skills</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm sm:text-base text-white/55 tracking-wide"
          >
            The intersection of engineering, intelligence, and human experience.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-5 w-14 h-[2px] bg-[#3ed9c5]"
          />
        </motion.div>
      </div>

      {/* VENN DIAGRAM */}
      <div className="relative z-10 mt-10 sm:mt-14">
        {/* DESKTOP / TABLET */}
        <div className="hidden md:block relative mx-auto w-[820px] h-[720px]">

          {/* =========================================================
              CIRCLE GEOMETRY

              Parent: 820 × 720
              Circle: 430 × 430

              Left circle:
              x = 20
              y = 0

              Right circle:
              x = 370
              y = 0

              Bottom circle:
              x = 195
              y = 290

              All three therefore share the same horizontal center:
              410px.

              This is intentionally explicit rather than relying on
              percentage positioning so the Venn cannot drift.
             ========================================================= */}

          {/* SOFTWARE ENGINEERING */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="absolute left-[20px] top-[0px] w-[430px] h-[430px] rounded-full border border-[#28cfc0]/55 overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at 38% 35%, rgba(20,184,166,.15), rgba(20,184,166,.05) 45%, rgba(5,6,9,.72) 76%, rgba(5,6,9,.94))',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.11]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)',
                backgroundSize: '15px 15px',
              }}
            />
          </motion.div>

          {/* AI & DATA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="absolute left-[370px] top-[0px] w-[430px] h-[430px] rounded-full border border-[#a87cf3]/55 overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at 63% 35%, rgba(168,85,247,.14), rgba(168,85,247,.05) 45%, rgba(5,6,9,.72) 76%, rgba(5,6,9,.94))',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)',
                backgroundSize: '15px 15px',
              }}
            />
          </motion.div>

          {/* =========================================================
              FIXED THIRD CIRCLE
              ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="absolute left-[195px] top-[290px] w-[430px] h-[430px] rounded-full border border-[#dba43b]/55 overflow-hidden"
            style={{
              background:
                'radial-gradient(circle at 50% 65%, rgba(245,158,11,.13), rgba(245,158,11,.045) 45%, rgba(5,6,9,.74) 76%, rgba(5,6,9,.95))',
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)',
                backgroundSize: '15px 15px',
              }}
            />
          </motion.div>

          {/* SOFTWARE CONTENT */}
          <div className="absolute left-[105px] top-[86px] z-20 w-[210px]">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#36d7c5]">
              01
            </span>

            <h3 className="mt-2 text-[14px] leading-[1.55] font-bold tracking-[0.16em] text-[#45dfce] uppercase">
              Software
              <br />
              Engineering
            </h3>

            <SkillList
              items={skills.software}
              color="#36d7c5"
            />
          </div>

          {/* AI CONTENT */}
          <div className="absolute right-[105px] top-[86px] z-20 w-[190px]">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#a87cf3]">
              02
            </span>

            <h3 className="mt-2 text-[14px] leading-[1.55] font-bold tracking-[0.16em] text-[#b18af4] uppercase">
              AI & Data
            </h3>

            <SkillList
              items={skills.ai}
              color="#a87cf3"
            />
          </div>

          {/* DESIGN CONTENT */}
          <div className="absolute left-[410px] top-[347px] -translate-x-1/2 z-20 w-[230px] text-center">
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#e2aa43]">
              03
            </span>

            <h3 className="mt-2 text-[14px] leading-[1.55] font-bold tracking-[0.16em] text-[#e5ae49] uppercase">
              Design &
              <br />
              Human-Centered
              <br />
              Systems
            </h3>

            <ul className="mt-4 space-y-2 text-left inline-block text-[11px] sm:text-xs text-white/75">
              {skills.design.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2aa43]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* OUTER ICON — SOFTWARE */}
          <div className="absolute left-[-1px] top-[215px] z-30 w-10 h-10 rounded-full bg-[#08090c] border border-[#36d7c5]/55 flex items-center justify-center text-[#36d7c5] shadow-[0_0_24px_rgba(54,215,197,.12)]">
            <CodeIcon />
          </div>

          {/* OUTER ICON — AI */}
          <div className="absolute right-[-1px] top-[215px] z-30 w-10 h-10 rounded-full bg-[#08090c] border border-[#a87cf3]/55 flex items-center justify-center text-[#a87cf3] shadow-[0_0_24px_rgba(168,124,243,.12)]">
            <BrainIcon />
          </div>

          {/* OUTER ICON — HUMAN */}
          <div className="absolute left-[386px] top-[697px] z-30 w-10 h-10 rounded-full bg-[#08090c] border border-[#e2aa43]/55 flex items-center justify-center text-[#e2aa43] shadow-[0_0_24px_rgba(226,170,67,.12)]">
            <HumanIcon />
          </div>

          {/* CENTRAL INTERSECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute left-[315px] top-[165px] -translate-x-1/2 -translate-y-1/2 z-50 w-[180px] h-[180px] rounded-full border border-white/[0.12] bg-[#07080b]/78 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_45px_rgba(20,184,166,.1)]"
          >
            <SparkIcon />

            <p className="mt-2 text-[10px] leading-[1.7] tracking-[0.2em] font-bold uppercase text-white/90">
              Building
              <br />
              <span className="text-[#55e4d0]">Intelligent</span> &
              <br />
              Useful Systems
            </p>
          </motion.div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden px-5 space-y-5">
          {[
            {
              number: '01',
              title: 'Software Engineering',
              color: '#36d7c5',
              icon: <CodeIcon />,
              items: skills.software,
            },
            {
              number: '02',
              title: 'AI & Data',
              color: '#a87cf3',
              icon: <BrainIcon />,
              items: skills.ai,
            },
            {
              number: '03',
              title: 'Design & Human-Centered Systems',
              color: '#e2aa43',
              icon: <HumanIcon />,
              items: skills.design,
            },
          ].map((group) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55 }}
              className="relative rounded-3xl border p-6 overflow-hidden"
              style={{
                borderColor: `${group.color}55`,
                background: `linear-gradient(135deg, ${group.color}0d, rgba(5,6,9,.92))`,
              }}
            >
              <div
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: group.color }}
              />

              <div className="relative flex items-start justify-between">
                <div>
                  <span
                    className="text-[10px] tracking-[0.3em] font-bold"
                    style={{ color: group.color }}
                  >
                    {group.number}
                  </span>

                  <h3
                    className="mt-2 text-sm font-bold uppercase tracking-[0.13em]"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </h3>
                </div>

                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                  style={{
                    color: group.color,
                    borderColor: `${group.color}55`,
                  }}
                >
                  {group.icon}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-y-3 text-xs text-white/70">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center pt-2">
            <div className="rounded-full border border-white/10 bg-white/[0.025] px-7 py-5 text-center">
              <SparkIcon />

              <p className="mt-2 text-[9px] tracking-[0.2em] uppercase font-bold text-white/80">
                Building{' '}
                <span className="text-[#55e4d0]">
                  Intelligent
                </span>{' '}
                &
                <br />
                Useful Systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          TOOLS & TECHNOLOGIES
         ========================================================= */}
      <div className="relative z-10 max-w-[1120px] mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[26px] border border-white/[0.1] bg-[#0b0c10]/80 p-5 sm:p-8 md:p-10 overflow-hidden"
        >
          {/* Decorative notebook doodle */}
          <div className="absolute left-0 bottom-0 opacity-[0.06] pointer-events-none">
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
            >
              <path
                d="M15 160C45 120 20 80 75 70C125 60 110 20 165 15"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M15 135C50 100 45 150 95 120C130 100 130 65 165 55"
                stroke="white"
                strokeWidth="1.2"
              />
              <circle
                cx="75"
                cy="70"
                r="5"
                stroke="white"
              />
              <circle
                cx="130"
                cy="65"
                r="4"
                stroke="white"
              />
            </svg>
          </div>

          <div className="relative text-center mb-8">
            <span className="text-[9px] sm:text-[10px] tracking-[0.38em] uppercase font-bold text-[#3dd7c5]">
              • &nbsp; Tools & Technologies &nbsp; •
            </span>

            <p className="mt-2 text-[10px] text-white/35 tracking-wider">
              The stack behind the work.
            </p>
          </div>

          {/* Artistic pinboard */}
          <div
            className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {tools.map((tool, index) => (
              <ToolCard
                key={tool.name}
                tool={tool}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}