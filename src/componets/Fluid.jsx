import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiActivity, FiGlobe, FiCode, FiZap } from 'react-icons/fi';

const LiquidNexus = () => {
  const containerRef = useRef(null);

  const features = [
    { title: "Fluid Logic", icon: <FiActivity />, desc: "Responsive systems that adapt to any environment." },
    { title: "Global Scale", icon: <FiGlobe />, desc: "Infrastructure built for worldwide deployment." },
    { title: "Clean Source", icon: <FiCode />, desc: "High-performance code with zero technical debt." },
    { title: "Instant Velocity", icon: <FiZap />, desc: "Optimized for sub-second interaction speeds." },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080808] text-white overflow-hidden relative font-sans">
      
      {/* 1. THE LIQUID BLOB BACKGROUND (SVG Filter) */}
      <div className="absolute inset-0 z-0">
        <svg className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 filter blur-[80px] opacity-40" style={{ filter: 'url(#goo)' }}>
          <motion.div 
            animate={{ 
              x: [0, 200, -200, 0], 
              y: [0, -150, 150, 0],
              scale: [1, 1.5, 0.8, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full"
          />
          <motion.div 
            animate={{ 
              x: [0, -250, 250, 0], 
              y: [0, 200, -200, 0],
              scale: [1, 1.2, 1.5, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        
        {/* HERO CONTENT */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mb-10">
              Fluid <br /> 
              <span className="text-yellow-400">Engineering.</span>
            </h1>
            <p className="text-neutral-500 text-xl md:text-2xl max-w-xl font-medium tracking-tight">
              We dissolve the boundaries between <span className="text-white italic">Design Logic</span> and <span className="text-white italic">Functional Code</span>.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-10 border border-white/10 rounded-[2.5rem] backdrop-blur-xl transition-all group"
            >
              <div className="text-yellow-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiArrowRight className="text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECOR: KINETIC TEXT */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="text-[12rem] font-black uppercase"
          >
            Liquid Architecture • Human Logic • Scalable Systems • High Fidelity • 
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LiquidNexus;