import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiArrowRight } from 'react-icons/fi';

const MiniContactMarquee = () => {
  const contactString = "HAVE ANY QUESTIONS? CONTACT ME — ";

  return (
    <div className="bg-[#050505] border-y border-white/[0.05] py-4 overflow-hidden relative group cursor-pointer transition-colors duration-500 hover:border-yellow-400/20">
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 18, // Slightly faster for a "live" feel
          ease: "linear",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {/* The Text */}
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-neutral-600 group-hover:text-white transition-colors duration-500">
              {contactString}
            </span>

            {/* Visual Separator & Icon */}
            <div className="flex items-center gap-4 mx-12">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 group-hover:border-yellow-400/50 group-hover:bg-yellow-400 transition-all duration-500">
                <FiMessageSquare className="text-neutral-500 group-hover:text-black" size={12} />
              </div>
              
              {/* Live Ping Pulse */}
              <div className="flex items-center gap-2">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400"></span>
                </div>
                <span className="text-[9px] font-mono text-neutral-700 group-hover:text-neutral-400 uppercase tracking-[0.2em] transition-colors">
                  Online
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Subtle Side Gradients to fade the edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
};

export default MiniContactMarquee;