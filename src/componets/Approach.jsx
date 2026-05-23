'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ------------------ Refined Easing ------------------ */
const customEase = [0.76, 0, 0.24, 1];

// Word Component: Combines Scroll-linked Opacity AND the Individual Curtain Reveal
function Word({ children, progress, range, index }) {
  // Existing Scroll-linked logic (turns white as you scroll)
  const opacityScroll = useTransform(progress, range, [0.2, 1]);
  const yScroll = useTransform(progress, range, [5, 0]);
  
  return (
    <span className="relative inline-block overflow-hidden pb-1 px-1">
      {/* THE ACTUAL TEXT */}
      <motion.span 
        style={{ opacity: opacityScroll, y: yScroll }} 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
            duration: 0.8, 
            delay: 0.2 + (index * 0.05), // Staggered entrance
            ease: customEase 
        }}
        viewport={{ once: true }}
        className="inline-block will-change-transform relative z-10"
      >
        {children}
      </motion.span>

      {/* THE INDIVIDUAL YELLOW CURTAIN (Top to Bottom) */}
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: customEase,
          delay: index * 0.05, // Staggered wipe
        }}
        // Increased Z-Index to 20 to ensure it's ABOVE the words (z-10)
        className="absolute inset-0 bg-yellow-400 z-20 pointer-events-none"
      />
    </span>
  );
}

// Main Component
export default function StatementSection() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end center"] 
  });

  const text = "I build digital products that combine technical logic with human emotion. No templates. No shortcuts. Just pure engineering.";
  const words = text.split(" ");

  return (
    <section 
      ref={container} 
      className="relative py-24 md:py-48 bg-[#050505] overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative">
        
        {/* Statement Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="text-[10px] border border-yellow-400/30 rounded-md p-2 px-4 font-black uppercase tracking-[0.5em] text-yellow-400">
            Statement
          </span>
        </motion.div>

        {/* THE TEXT CONTAINER */}
        <p className="flex flex-wrap gap-x-[0.1em] gap-y-[0.1em] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] perspective-1000 relative z-10">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            
            return (
              <Word 
                key={i} 
                index={i} 
                progress={scrollYProgress} 
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>

        {/* Bottom Accent Decor */}
        <motion.div 
          
        />
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-400/[0.03] blur-[140px] rounded-full pointer-events-none" />
    </section>
  );
}
