'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

/* ------------------ Curtain Reveal Component ------------------ */
const CurtainWord = ({ children, delay = 0 }) => {
  return (
    <span className="relative inline-flex overflow-hidden pb-1 mr-[0.25em] translate-y-1">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 inline-block"
      >
        {children}
      </motion.span>
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
          delay: delay,
        }}
        className="absolute inset-0 bg-yellow-400 z-20 pointer-events-none"
      />
    </span>
  );
};

const education = [
  {
    degree: "B.E. Computer Science And Engineering",
    institute: "BABASAHEB NAIK COLLEGE OF ENGG. ,PUSAD",
    year: "2023 — 2026",
    cgpa: "7.7 SGPA",
    details: "Researching the intersection of generative AI and intuitive motion systems. Focus on cognitive load reduction.",
    status: "In Progress",
  },
  {
    degree: "Diploma In Computer Technology",
    institute: "GOVERNMENT POLYTECHNIC , SOLAPUR",
    year: "2020 — 2023",
    cgpa: "73%",
    details: "Specialized in software architecture and computational geometry.",
    status: "Completed",
  },
  {
    degree: "SSC",
    institute: "mahatma basweshwar Vidyalay , Omerga",
    year: "2009 - 2019",
    cgpa: "87.60",
    status: "Certified",
  }
];

export default function Education() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* LEFT SIDE: STICKY HEADER */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <p className="text-yellow-400 border p-2 rounded-2xl text-[10px] font-black tracking-[0.5em] uppercase">
              Qualifications
            </p>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">
            Academic <br /> 
            <span className="text-neutral-800 italic font-light">History</span>
          </h2>
          
          <p className="mt-8 text-neutral-500 text-sm font-mono uppercase tracking-[0.2em] max-w-[240px] leading-relaxed">
            Formation & technical <br />specializations.
          </p>
        </div>

        {/* RIGHT SIDE: LIST */}
        <div className="lg:w-2/3 flex flex-col">
          {education.map((edu, i) => (
            <EducationItem 
              key={i} 
              edu={edu} 
              index={i} 
              isLast={i === education.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

const EducationItem = ({ edu, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative py-12 ${!isLast ? 'border-b border-white/5' : ''}`}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        
        {/* YEAR & STATUS COLUMN */}
        <div className="w-32 flex flex-col gap-3">
          <span className="text-neutral-600 font-mono text-[11px] uppercase tracking-widest">
            {edu.year}
          </span>
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-neutral-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
            {edu.status}
          </div>
        </div>

        {/* MAIN CONTENT COLUMN */}
        <div className="flex-1">
          <div className="flex justify-between items-start gap-4 mb-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-yellow-400 transition-colors duration-500 leading-none flex flex-wrap">
              {edu.degree.split(" ").map((word, i) => (
                <CurtainWord key={i} delay={0.1 + (i * 0.05)}>{word}</CurtainWord>
              ))}
            </h3>
          </div>

          <p className="text-yellow-400/80 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            {edu.institute}
          </p>
          
          <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-2xl mb-10 group-hover:text-neutral-300 transition-colors flex flex-wrap">
            {edu.details && edu.details.split(" ").map((word, i) => (
              <CurtainWord key={i} delay={0.3 + (i * 0.03)}>{word}</CurtainWord>
            ))}
          </p>

          {/* SCORE METRIC */}
          <div className="inline-flex flex-col py-3 px-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Grade_Achieved</span>
            <span className="text-2xl font-black italic tracking-tighter text-white">
               {edu.cgpa}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
