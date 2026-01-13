'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
  
  // Track scroll for the "Timeline Line"
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
      {/* 🚀 BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              {/* <span className="w-12 h-[1px] bg-yellow-400" /> */}
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

        {/* STEPS CONTAINER */}
        <div className="relative">
          {/* ✨ PROGRESS LINE: This grows as you scroll */}
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
      {/* 1. CONTENT BLOCK */}
      <div className="w-full md:w-1/2 px-8 md:px-20">
        <div className="group relative">
          {/* Floating Background Number */}
          <motion.span 
            className="absolute -top-16 -left-10 text-[12rem] font-black text-white/[0.03] select-none group-hover:text-yellow-400/10 transition-colors duration-700 group-hover:-translate-y-4 transition-transform"
          >
            {data.step}
          </motion.span>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">
              {data.title}
            </h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
              {data.desc}
            </p>
            
            {/* Dynamic Tags */}
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

      {/* 2. CENTER POINT (Dot on the timeline) */}
      <div className="absolute left-[15px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-20">
        <motion.div 
          whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1] }}
          className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" 
        />
        <div className="absolute w-8 h-8 border border-yellow-400/20 rounded-full animate-ping" />
      </div>

      {/* 3. EMPTY SIDE (Maintains the zig-zag) */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default Process;