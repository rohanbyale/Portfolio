'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sub-component for individual words
function Word({ children, progress, range }) {
  // Mapping progress to opacity and a shorter Y-axis lift for a tighter feel
  const opacity = useTransform(progress, range, [0.4, 1]);
  const y = useTransform(progress, range, [10, 0]);
  
  return (
    <motion.span 
      style={{ opacity, y }} 
      className="text-white inline-block will-change-transform"
    >
      {children}
    </motion.span>
  );
}

// Main Component
export default function StatementSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    // "start end" means start animating as soon as the top of the section hits the bottom of the screen
    offset: ["start end", "end center"] 
  });

  const text = "I build digital products that combine technical logic with human emotion. No templates. No shortcuts. Just pure engineering.";
  const words = text.split(" ");

  return (
    <section 
      ref={container} 
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        {/* Aesthetic Label - Reduced bottom margin to pull text up */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4"
        >
          {/* <div className="h-[1px] w-10 bg-yellow-400" /> */}
          <span className="text-[10px] border rounded-2xl p-2 font-black uppercase tracking-[0.5em] text-yellow-400">
            Statement
          </span>
        </motion.div>

        {/* Text Container - Slightly tighter leading for better visual density */}
        <p className="flex flex-wrap gap-x-[0.2em] gap-y-[0.05em] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] perspective-1000">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>

        {/* Bottom Accent Decor - Tighter margin */}
        <div className="mt-16 flex justify-start">
          <div className="h-px w-24 bg-gradient-to-r from-yellow-400/40 to-transparent opacity-20" />
        </div>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}

