import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSection = () => {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // 1. Structural body scroll freezing
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isVisible]);

  // 2. Multi-stage high-precision timing loop
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        // High momentum jump early on, decelerating precisely at the terminal numbers
        const diff = count > 85 
          ? (Math.random() < 0.5 ? 1 : 2)
          : Math.floor(Math.random() * 16) + 1;
        setCount(prev => Math.min(prev + diff, 100));
      }, 30 + (count * 0.4));
      return () => clearTimeout(timer);
    } else {
      // Small semantic rest beat at 100% before violent spatial acceleration
      setTimeout(() => setIsLoaded(true), 700);
      // Terminate complete visibility once portal scales cleanly beyond viewport constraints
      setTimeout(() => setIsVisible(false), 2100);
    }
  }, [count]);

  const cinemaxEase = [0.87, 0, 0.13, 1];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[1000] overflow-hidden bg-[#070708] select-none pointer-events-none flex items-center justify-center">
          
          {/* ARCHITECTURAL BACKGROUND GRAPHICS */}
          <motion.div 
            animate={isLoaded ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: cinemaxEase }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            {/* Moving Technical Horizon Line */}
            <div className="absolute w-full h-[1px] bg-white/[0.04] top-1/2 left-0" />
            <div className="absolute h-full w-[1px] bg-white/[0.04] left-1/2 top-0" />
          </motion.div>

          {/* BACKGROUND SYSTEM LABELS (Fades outward instantly on load) */}
          <div className="absolute inset-x-12 top-10 flex justify-between items-center text-[9px] font-mono tracking-[0.4em] text-neutral-500 z-50">
            <motion.span animate={isLoaded ? { y: -20, opacity: 0 } : { y: 0 }} transition={{ duration: 0.5, ease: cinemaxEase }}>
              DATA_CORE_INIT // NULL_0x9
            </motion.span>
            <motion.span animate={isLoaded ? { y: -20, opacity: 0 } : { y: 0 }} transition={{ duration: 0.5, ease: cinemaxEase, delay: 0.05 }}>
              SYS_2026
            </motion.span>
          </div>

          {/* THE PORTAL ENGINE: Core Counter Typographical Structure */}
          <motion.div
            initial={{ scale: 1, filter: 'blur(0px)' }}
            animate={isLoaded ? { 
              scale: 24, // Extreme magnification creates portal illusion
              opacity: [1, 1, 0],
              transition: { duration: 1.4, ease: cinemaxEase }
            } : {}}
            className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-auto text-center"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Left Aesthetic Geometric Line Bracket */}
              <motion.div 
                animate={isLoaded ? { x: -150, opacity: 0, height: 0 } : { x: 0 }}
                transition={{ duration: 0.7, ease: cinemaxEase }}
                className="w-[1px] h-32 bg-gradient-to-b from-transparent via-neutral-700 to-transparent mr-12 hidden md:block"
              />

              {/* Central Primary Value Cluster */}
              <div className="relative mix-blend-difference flex flex-col items-center">
                
                {/* Secondary Fast Metric Label */}
                <div className="h-4 overflow-hidden mb-2 relative w-full flex justify-center">
                  <motion.span 
                    animate={isLoaded ? { y: -15, opacity: 0 } : { y: 0 }}
                    className="text-[9px] font-mono tracking-[0.6em] text-neutral-400 uppercase"
                  >
                    {count === 100 ? "INDEXING COMPLETE" : `LOADING MATRIX / ${count}%`}
                  </motion.span>
                </div>

                {/* Massive Dimensional Digit Stencil */}
                <div className="overflow-visible flex items-center justify-center h-[14vw] md:h-[10rem]">
                  <motion.span 
                    key={count}
                    initial={{ y: "40%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    className="text-[18vw] md:text-[11rem] font-black tracking-tighter text-white tabular-nums font-sans leading-none select-none"
                    style={{ fontWeight: 950 }}
                  >
                    {count}
                  </motion.span>
                </div>

                {/* Micro Percentage Fractional String */}
                <motion.span 
                  animate={isLoaded ? { opacity: 0, scale: 0.5 } : { opacity: 1 }}
                  className="text-xs font-mono tracking-widest text-neutral-500 mt-4 block"
                >
                  [ VOLT_MS_{count * 12} ]
                </motion.span>

              </div>

              {/* Right Aesthetic Geometric Line Bracket */}
              <motion.div 
                animate={isLoaded ? { x: 150, opacity: 0, height: 0 } : { x: 0 }}
                transition={{ duration: 0.7, ease: cinemaxEase }}
                className="w-[1px] h-32 bg-gradient-to-b from-transparent via-neutral-700 to-transparent ml-12 hidden md:block"
              />

            </div>
          </motion.div>

          {/* LOWER PERIMETER METRIC LABELS */}
          <div className="absolute inset-x-12 bottom-10 flex justify-between items-center text-[9px] font-mono tracking-[0.4em] text-neutral-500 z-50">
            <motion.span animate={isLoaded ? { y: 20, opacity: 0 } : { y: 0 }} transition={{ duration: 0.5, ease: cinemaxEase }}>
              © ALL RIGHTS RESERVED
            </motion.span>
            <motion.span animate={isLoaded ? { y: 20, opacity: 0 } : { y: 0 }} transition={{ duration: 0.5, ease: cinemaxEase, delay: 0.05 }}>
              EST. // MATRIX_LAB
            </motion.span>
          </div>

          {/* SYSTEM OVERVIEW SWEEP BLINDS */}
          {/* Subtle high-contrast light flashes matching luxury creative index animations */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: [0, 0.15, 0] } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute inset-0 bg-white z-40 pointer-events-none mix-blend-overlay"
          />

        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroSection;
