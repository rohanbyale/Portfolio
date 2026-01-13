import React from 'react';
import { motion } from 'framer-motion';
import { FiHexagon, FiZap, FiTarget, FiShield } from 'react-icons/fi';

const LegacyCore = () => {
  return (
    <section className="relative min-h-[80vh] bg-[#050505] flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND RADIAL GRADIENT */}
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ background: 'radial-gradient(circle at 50% 50%, #facc15 0%, transparent 60%)', filter: 'blur(120px)' }} 
      />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 2. THE 3D CORE SYSTEM */}
        <div className="relative flex items-center justify-center w-96 h-96">
          
          {/* OUTER SPINNING RINGS */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
              className="absolute border border-white/5 rounded-full"
              style={{ 
                width: `${200 + i * 60}px`, 
                height: `${200 + i * 60}px`,
                borderStyle: i === 1 ? 'dashed' : 'solid'
              }}
            />
          ))}

          {/* THE FLOATING 3D CRYSTAL (Diamond shape using 45deg rotation) */}
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              rotateY: [0, 180, 360],
              rotateX: [15, -15, 15]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-40 h-40 flex items-center justify-center transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* The Core Box */}
            <div className="absolute inset-0 bg-yellow-400/10 backdrop-blur-2xl border-2 border-yellow-400 rotate-45 shadow-[0_0_50px_rgba(250,204,21,0.3)] flex items-center justify-center">
               <FiHexagon className="text-yellow-400 text-5xl rotate-[-45deg] animate-pulse" />
            </div>

            {/* Floating Nodes around the Core */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]" 
            />
            <motion.div 
              animate={{ scale: [1.5, 1, 1.5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]" 
            />
          </motion.div>
        </div>

        {/* 3. FLOATING INFO CARDS */}
        <div className="absolute w-full h-full pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-20 left-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
          >
            <FiZap className="text-yellow-400 mb-2" />
            <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Efficiency</p>
            <p className="text-white font-bold tracking-tighter">OPTIMIZED</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute bottom-20 right-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
          >
            <FiShield className="text-yellow-400 mb-2" />
            <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Stability</p>
            <p className="text-white font-bold tracking-tighter">HARDENED</p>
          </motion.div>
        </div>

        {/* 4. TEXT BLOCK */}
        <div className="text-center mt-12 relative z-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            The <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>Identity</span>
          </h2>
          <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-[0.6em] mt-4">
            System Core v2.0 // Architecture Secure
          </p>
        </div>

      </div>
    </section>
  );
};

export default LegacyCore;