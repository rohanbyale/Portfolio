import React from 'react';
import { motion } from 'framer-motion';

const TechMarqueeMinimal = () => {
  const stack = ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Three.js", "Locomotive", "GSAP"];
  
  // Duplicating for infinite effect
  const loopStack = [...stack, ...stack, ...stack];

  return (
    <section className="bg-[#050505] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. THE FLOATING TRACK */}
        <div className="relative py-6 px-4 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-sm overflow-hidden">
          
          {/* EDGE MASKING: Creates the fade-in/out effect */}
          <div className="absolute inset-0 z-20 pointer-events-none [background:linear-gradient(to_right,#050505,transparent_15%,transparent_85%,#050505)]" />

          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {loopStack.map((item, index) => (
              <div key={index} className="flex items-center gap-16 group">
                <div className="flex items-center gap-4">
                  {/* Subtle Accent Dot */}
                  <span className="w-1 h-1 rounded-full bg-yellow-400 group-hover:scale-150 group-hover:shadow-[0_0_8px_#facc15] transition-all duration-500" />
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 group-hover:text-white transition-colors duration-500 cursor-default">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 2. SUBTLE FOOTER TAG (Optional) */}
        <div className="mt-4 flex justify-center">
            <span className="text-[8px] font-mono text-neutral-700 uppercase tracking-widest">
                Automated Stack Pulse 
            </span>
        </div>
        
      </div>
    </section>
  );
};

export default TechMarqueeMinimal;