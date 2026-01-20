
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const anim = (variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  });

  const nbOfColumns = 5; // Number of slats

  // Slat variants for staggered entry/exit
  const expand = {
    initial: { top: 0 },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: { top: "100%", height: 0 }
    }),
    exit: (i) => ({
      height: "100%",
      top: "0%",
      transition: {
        duration: 0.5,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  };

  return (
    <div className="page transition">
      {/* THE SHUTTER OVERLAY */}
      <div className="fixed inset-0 pointer-events-none flex z-[99999]">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim(expand)}
            custom={i}
            className="relative h-full w-full bg-yellow-400"
          />
        ))}
      </div>

      {/* THE ACTUAL PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;