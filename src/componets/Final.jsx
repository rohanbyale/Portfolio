import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const FinalThanks = () => {
  // Infinite marquee variants
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="bg-[#050505] min-h-screen flex flex-col justify-between py-20 px-6 lg:px-24 relative overflow-hidden">
      
      {/* 1. HUGE BACKGROUND MARQUEE (The "Vibe" layer) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none opacity-[0.02] select-none">
        <motion.div 
          variants={marqueeVariants}
          animate="animate"
          className="flex whitespace-nowrap text-[25vw] font-black uppercase tracking-tighter text-white"
        >
          <span>THANKS FOR VISITING • THANKS FOR VISITING • </span>
          <span>THANKS FOR VISITING • THANKS FOR VISITING • </span>
        </motion.div>
      </div>

      {/* 2. TOP CONTENT: THE FAREWELL */}
      <div className="relative z-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-yellow-400 font-mono text-xs uppercase tracking-[0.5em] mb-8">
            End of Line // 2026
          </h2>
          <h1 className="text-6xl md:text-[12vw] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12">
            Stay <br />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              Inspired.
            </span>
          </h1>
        </motion.div>
      </div>

      {/* 3. MIDDLE: INTERACTIVE LINKS */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md"
        >
          <p className="text-neutral-500 text-lg uppercase tracking-tight leading-relaxed">
            I believe every digital journey should end with a <span className="text-white font-bold">meaningful connection</span>. 
            Whether you're a fellow creator or a future partner, my inbox is always open for the extraordinary.
          </p>
        </motion.div>

        {/* <div className="flex flex-col items-start md:items-end gap-8">
           <div className="flex gap-4">
              {[FiGithub, FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -8, color: "#facc15" }}
                  className="text-white/30 hover:text-yellow-400 transition-colors"
                >
                  <Icon size={28} />
                </motion.a>
              ))}
           </div>
           
           <Link 
            to="/contactpage" 
            onClick={() => window.scrollTo(0, 0)}
            className="group flex items-center gap-4 text-white no-underline border-b border-white/10 pb-2 hover:border-yellow-400 transition-colors"
           >
              <span className="text-xs font-black uppercase tracking-widest">Start a Conversation</span>
              <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
           </Link>
        </div> */}
      </div>

      {/* 4. FOOTER: THE SIGN-OFF */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-12 mt-20">
        <div className="flex flex-col gap-2">
           <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Designed & Developed by</p>
           <p className="text-white font-black text-2xl tracking-tighter uppercase">Rohan Byale</p>
        </div>

        <div className="mt-8 md:mt-0 text-right">
           <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest mb-2">Current Status</p>
           <div className="flex items-center gap-2 justify-end">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Open for Collaboration</span>
           </div>
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20" />
    </section>
  );
};

export default FinalThanks;