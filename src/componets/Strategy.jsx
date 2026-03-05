'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ------------------ Curtain Reveal Component ------------------ */
const CurtainWord = ({ children, delay = 0, color = "bg-yellow-400" }) => {
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
        // Dynamic color prop
        className={`absolute inset-0 ${color} z-20 pointer-events-none`}
      />
    </span>
  );
};

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understanding the problem, audience, and business goals before touching pixels or code.",
    tags: ["Research", "Strategy", "Context"]
  },
  {
    step: "02",
    title: "Design",
    desc: "Crafting clean interfaces, strong systems, and experiences that feel effortless.",
    tags: [ "Systems", "Prototyping"]
  },
  {
    step: "03",
    title: "Develop",
    desc: "Building fast, scalable, maintainable products using modern frameworks.",
    tags: ["Frontend", "Performance", "Logic"]
  },
  {
    step: "04",
    title: "Refine",
    desc: "Polishing performance, motion, accessibility, and final delivery.",
    tags: ["QA", "Animation", "Deployment"]
  },
];

const Process = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#050505] text-white py-48 px-6 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <p className="text-yellow-400 border p-2 rounded-2xl text-[10px] font-black tracking-[0.5em] uppercase">
                Workflow // 04
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] uppercase"
            >
              The <span className="text-neutral-800 italic font-light">Method.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neutral-500 text-sm uppercase tracking-widest font-mono mb-4"
          >
            [ structured — execution ]
          </motion.p>
        </div>

        <div className="relative">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[15px] md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-yellow-400 via-yellow-400 to-transparent z-0 hidden md:block"
          />

          <div className="flex flex-col gap-32">
            {steps.map((itemData, i) => (
              <ProcessStep key={i} data={itemData} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 px-8 md:px-20">
        <div className="group relative">
          <motion.span 
            className="absolute -top-16 -left-10 text-[12rem] font-black text-white/[0.03] select-none group-hover:text-yellow-400/10 transition-colors duration-700 group-hover:-translate-y-4 transition-transform"
          >
            {data.step}
          </motion.span>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter flex flex-wrap">
              {data.title.split(" ").map((word, i) => (
                <CurtainWord key={i} delay={0.1} color="bg-emerald-500">{word}</CurtainWord>
              ))}
            </h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8 flex flex-wrap">
              {data.desc.split(" ").map((word, i) => (
                <CurtainWord key={i} delay={0.2 + (i * 0.03)} color="bg-yellow-400">{word}</CurtainWord>
              ))}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {data.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-neutral-500 group-hover:border-yellow-400/30 group-hover:text-yellow-400 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[15px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-20">
        <motion.div 
          whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1] }}
          className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" 
        />
        <div className="absolute w-8 h-8 border border-yellow-400/20 rounded-full animate-ping" />
      </div>

      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default Process;
