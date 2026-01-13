import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiDatabase, FiLayout, FiMaximize } from 'react-icons/fi';

const HolographicHub = () => {
  const skills = [
    { name: "Frontend", icon: <FiLayout />, color: "#facc15", x: 120, y: -40 },
    { name: "Backend", icon: <FiDatabase />, color: "#60a5fa", x: -120, y: 40 },
    { name: "Systems", icon: <FiCpu />, color: "#a78bfa", x: -100, y: -120 },
    { name: "Network", icon: <FiGlobe />, color: "#4ade80", x: 100, y: 120 },
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND GRID & GLOW */}
      <div className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #facc15 0%, transparent 70%)', filter: 'blur(100px)' }} 
      />
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* 2. THE 3D ORBITAL CONTAINER */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          
          {/* CENTRAL CORE */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotateZ: [0, 180, 360],
              boxShadow: ["0 0 20px #facc1522", "0 0 50px #facc1555", "0 0 20px #facc1522"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-[2.5rem] bg-black border-2 border-yellow-400 flex items-center justify-center z-20"
          >
            <FiMaximize className="text-yellow-400 text-4xl animate-pulse" />
          </motion.div>

          {/* SATELLITE SKILLS */}
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ 
                x: [skill.x, skill.x + 10, skill.x],
                y: [skill.y, skill.y - 15, skill.y],
                rotateY: [0, 360]
              }}
              transition={{ 
                x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              className="absolute p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center gap-2 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ color: skill.color }} className="text-2xl group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                {skill.name}
              </span>
              
              {/* Connector Line Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent -z-10 rotate-45 pointer-events-none" />
            </motion.div>
          ))}

          {/* SPINNING RING DECOR */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] border border-white/5 rounded-full pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]" />
          </motion.div>
        </div>

        {/* 3. SECTION TEXT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Unified <span className="text-yellow-400">Architecture</span>
          </h2>
          <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            Bridging Logic and Aesthetics via 3D Spatial Design
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HolographicHub;