
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSection = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // 1. Lock scroll and cleanup
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isVisible]);

  // 2. High-performance counter logic
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        // Random increments for a more "organic" loading feel
        const diff = Math.random() < 0.3 ? 1 : Math.floor(Math.random() * 12) + 1;
        setCount(prev => Math.min(prev + diff, 100));
      }, 50 + (count * 0.5)); // Slower as it approaches 100
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsVisible(false), 1000);
    }
  }, [count]);

  const words = ["Innovation", "Precision", "Logic", "Emotion", "Ready"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.1 } 
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* ✨ IMPROVEMENT: Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 w-full max-w-md px-10">
            
            {/* ✨ IMPROVEMENT: Binary Stream Labels */}
            <div className="absolute -left-20 top-1/2 -rotate-90 hidden md:block opacity-10">
              <span className="text-[10px] font-mono text-white tracking-[1em]">01011001 01011010</span>
            </div>

            {/* Word Stagger Reveal */}
            <div className="mb-6 h-5 overflow-hidden flex justify-center">
              <motion.div
                animate={{ y: `-${(Math.min(Math.floor(count / 21), 4)) * 20}px` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="flex flex-col items-center"
              >
                {words.map((word, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-[0.8em] text-yellow-400 h-5 leading-5">
                    {word}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* The Counter with Glitch Style */}
            <div className="relative flex justify-center items-baseline">
               <motion.span 
                 key={count} // Key forces a re-render for a subtle "flicker"
                 initial={{ opacity: 0.8 }}
                 animate={{ opacity: 1 }}
                 className="text-[12vw] md:text-9xl font-black tracking-tighter text-white tabular-nums leading-none"
               >
                 {count}
               </motion.span>
               <span className="text-xl font-light text-neutral-600 ml-2">%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="mt-4 h-[1px] w-full bg-white/5 relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                className="absolute h-full bg-yellow-400"
              />
              {/* ✨ IMPROVEMENT: Glow point at the tip of the bar */}
              <motion.div 
                animate={{ left: `${count}%` }}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400/50 blur-lg"
              />
            </div>

            {/* Sub-labels */}
            <div className="mt-6 flex justify-between items-center overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest"
              >
                Engineered for Performance
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest"
              >
                EST. 2026
              </motion.span>
            </div>
          </div>

          {/* ✨ IMPROVEMENT: Dynamic Background Text Reveal */}
          <motion.div 
            style={{ x: "-50%" }}
            animate={{ 
              opacity: [0, 0.03, 0.02],
              scale: [0.95, 1],
            }}
            className="absolute bottom-10 left-1/2 text-[15vw] font-black text-white pointer-events-none select-none whitespace-nowrap"
          >
            PORTFOLIO
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSection;