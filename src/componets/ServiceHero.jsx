import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  const words = ["Scalable", "Intuitive", "Impactful", "Modern"];

  return (
    <section className="relative bg-[#050505] min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-24 overflow-hidden">
      
      {/* 🟢 BLURRED DESIGN ELEMENTS */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT: THE STATEMENT */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                Service Suite 2026 // Design & Code
              </p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-9xl font-black uppercase tracking-[-0.04em] text-white leading-[0.85]"
              >
                Crafting <br />
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Products</span> <br />
                With <span className="text-yellow-400 italic font-light">Purpose.</span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {words.map((word, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{word}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CONTENT: THE PITCH */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 lg:pt-24"
          >
            <div className="relative p-1 border-l border-white/10 pl-8 space-y-8">
              <p className="text-neutral-400 text-lg leading-relaxed font-medium">
                I help startups and established brands transform complex ideas into <span className="text-white">seamless digital realities.</span> My approach blends behavioral psychology with cutting-edge engineering.
              </p>
              
              <div className="space-y-4">
                {/* 🟢 CONVERTED TO LINK COMPONENT FOR NAVIGATION */}
                <Link 
                  to="/contactpage" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="group relative block w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] overflow-hidden rounded-sm transition-transform active:scale-95 text-center no-underline"
                >
                  <span className="relative z-10">Start a Project —</span>
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <p className="text-[9px] text-center text-neutral-600 uppercase tracking-widest font-bold">
                  Avg. Response Time: 24 Hours
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM DECORATIVE NUMBERS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Design Discovery", val: "01" },
            { label: "User Architecture", val: "02" },
            { label: "Visual System", val: "03" },
            { label: "Scaleable Dev", val: "04" },
          ].map((item, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-2xl font-black text-white/20 group-hover:text-yellow-400 transition-colors duration-500 font-mono">/{item.val}</p>
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ServiceHero;