import React from 'react';
import { motion } from 'framer-motion';

const ProjectHeader = () => {
  // Animation variants for staggered text reveal - EXACTLY AS BEFORE
  const titleVariant = {
    hidden: { y: 120 },
    visible: (i) => ({
      y: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i }
    })
  };

  return (
    <section className="relative bg-[#050505] pt-44 pb-32 px-6 lg:px-24 overflow-hidden border-b border-white/5">
      {/* 🟢 DESIGN ELEMENTS: Ambient Glow & Grid background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
 

        {/* 2. HERO TITLES (Split Text Reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-2">
              <motion.h1 
                custom={1} variants={titleVariant} initial="hidden" animate="visible"
                className="text-7xl md:text-[11rem] font-black uppercase tracking-[-0.05em] text-white leading-[0.8]"
              >
                Digital
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                custom={2} variants={titleVariant} initial="hidden" animate="visible"
                className="text-7xl md:text-[11rem] font-black uppercase tracking-[-0.05em] text-transparent stroke-text leading-[0.8]"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
              >
                Archive<span className="text-yellow-400 font-light italic">.</span>
              </motion.h1>
            </div>
          </div>

          {/* 3. CAPTION & STATS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-4 space-y-8 lg:border-l lg:border-white/10 lg:pl-12 pb-4"
          >
            <p className="text-neutral-400 text-sm leading-relaxed font-medium uppercase tracking-wider">
              Specializing in building aesthetic digital interfaces that convert. From complex SaaS to minimalist high-fashion e-commerce.
            </p>
            
            <div className="flex items-center gap-12">
              <div>
                <p className="text-3xl font-bold text-white tracking-tighter">12</p>
                <p className="text-[9px] uppercase tracking-widest text-yellow-400 font-black">Successes</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white tracking-tighter">04</p>
                <p className="text-[9px] uppercase tracking-widest text-yellow-400 font-black">Year Exp.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. FOOTER DETAIL (Replacing Filter Bar) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center"
        >
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Latest Releases</span>
            <div className="w-10 h-[1px] bg-white/20" />
            <span className="text-[10px] font-mono text-neutral-600 tracking-tighter uppercase">Available for new projects</span>
          </div>
          <span className="hidden md:block text-[10px] font-mono text-neutral-600 tracking-tighter">SCROLL TO EXPLORE ↓</span>
        </motion.div>

      </div>

      {/* CSS For the Stroke Effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default ProjectHeader;