import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link import
import { FiArrowUpRight, FiMousePointer } from 'react-icons/fi';

const PortfolioHero = () => {
  // Animation variants for the staggered text reveal
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVars = {
    initial: { y: "100%" },
    animate: { 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="bg-[#050505] min-h-screen flex flex-col justify-center px-6 lg:px-24 relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[150px] rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* MAIN HEADING WITH REVEAL ANIMATION */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={textItemVars}
              className="text-white text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase"
            >
              Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.h1 
              variants={textItemVars}
              className="text-transparent stroke-white stroke-1 text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase" 
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              Architect.
            </motion.h1>
          </div>

          {/* FLOATING BADGE */}
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 5 }}
            transition={{ delay: 0.8 }}
            className="absolute top-0 right-0 md:right-20 bg-yellow-400 text-black px-4 py-2 rounded-full hidden md:flex items-center gap-2 -rotate-6 shadow-2xl"
          >
            <FiMousePointer size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">DEVELOPER</span>
          </motion.div>
        </motion.div>

        {/* SUB-SECTION: NAME & CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/5 pt-12">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-md"
          >
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed uppercase tracking-tight">
              I am <span className="text-white font-bold tracking-normal">ROHAN BYALE</span> — Crafting high-fidelity interfaces 
              and seamless digital products that prioritize <span className="text-yellow-400 italic font-serif">human logic</span> over complexity.
            </p>
          </motion.div>

          {/* INTERACTIVE LINK (REPLACED 'A' TAG) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="group relative"
          >
            <Link 
              to="/projectpage" 
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-8 no-underline"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-400 transition-all duration-500">
                  <FiArrowUpRight className="text-white group-hover:text-yellow-400 transition-colors" size={28} />
                </div>
                {/* Spinning Text Circle */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[8px] uppercase fill-yellow-400 font-bold tracking-[0.2em]">
                      <textPath xlinkHref="#circlePath">See My Latest Work • See My Latest Work • </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-white font-black uppercase tracking-widest text-xs mb-1">View Portfolio</p>
                <p className="text-neutral-600 text-[10px] uppercase font-mono">Curated Work (2024-2026)</p>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-800 hidden md:block">
        <p className="text-[10px] font-mono uppercase tracking-[1em]">Scroll to Explore</p>
      </div>
    </section>
  );
};

export default PortfolioHero;