import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMapPin, FiClock, FiWifi, FiCoffee, 
  FiCode, FiTerminal, FiCpu, FiGlobe,
  FiArrowUpRight, FiZap, FiActivity, FiTarget 
} from 'react-icons/fi';

const VisitorExperiencePage = () => {
  const containerRef = useRef(null);
  
  // 1. DATA DEFINITIONS
  const statusItems = [
    { icon: <FiMapPin />, label: "Location", value: "India, IST", color: "text-blue-400" },
    { icon: <FiClock />, label: "Local Time", value: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), color: "text-purple-400" },
    { icon: <FiWifi />, label: "Availability", value: "Open for Q1", color: "text-green-400", pulse: true },
    { icon: <FiCoffee />, label: "Energy Level", value: "High", color: "text-yellow-400", progress: "85%" },
  ];

  const milestones = [
    { year: "2023", title: "The Spark", desc: "Started building high-fidelity UI components." },
    { year: "2024", title: "Engineering", desc: "Mastered Framer Motion and React optimization." },
    { year: "2025", title: "Architecture", desc: "Leading complex system designs for global brands." },
    { year: "2026", title: "The Legacy", desc: "Pushing the boundaries of Human-Centric Logic." }
  ];

  const arsenal = [
    { name: "React.js", icon: <FiCpu />, level: "Frontend", tag: "Library" },
    { name: "Next.js", icon: <FiGlobe />, level: "Fullstack", tag: "Framework" },
    { name: "Node.js", icon: <FiCode />, level: "Backend", tag: "Runtime" },
    { name: "Terminal", icon: <FiTerminal />, level: "Hardcore", tag: "Workflow" },
  ];

  return (
    <main ref={containerRef} className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-yellow-400 selection:text-black font-sans">
      
      {/* SECTION 1: LIVE SYSTEM STATUS */}
      <section className="pt-32 pb-20 px-6 lg:px-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16">
          <h2 className="text-yellow-400 font-mono text-[10px] uppercase tracking-[0.6em] mb-4">Live System Status</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Current <span className="text-neutral-700 italic">Context</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative group overflow-hidden">
              <div className={`${item.color} text-2xl mb-4 group-hover:scale-110 transition-transform duration-500`}>{item.icon}</div>
              <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{item.label}</p>
              <h3 className="text-xl font-bold uppercase mt-1 tracking-tight">{item.value}</h3>
              {item.pulse && (
                <div className="absolute top-6 right-6 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
              )}
              {item.progress && (
                <div className="h-1 w-full bg-white/10 mt-4 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: item.progress }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-yellow-400"/>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: DIGITAL FINGERPRINT (Core Philosophy) */}
      <section className="py-24 px-6 lg:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-64 h-64 flex-shrink-0">
          {/* Spinning Text Ring */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
              <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
              <text className="fill-white text-[6px] uppercase tracking-[0.4em] font-bold">
                <textPath xlinkHref="#curve">Performance • Scalability • Accessibility • SEO • </textPath>
              </text>
            </svg>
          </motion.div>
          {/* Center Glow Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.1)]">
              <FiActivity className="text-yellow-400 text-3xl animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">Engineering <span className="text-yellow-400 not-italic">Standards</span></h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I build for the modern web—where <span className="text-white">speed is a feature</span> and <span className="text-white">clean code</span> is a requirement. Every project is a balance between technical logic and human-centered design.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE ARSENAL */}
      <section className="py-24 px-6 lg:px-24 bg-neutral-900/20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <FiZap className="text-yellow-400 mb-6" size={30} />
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">The <br /> Arsenal</h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-sm font-medium uppercase tracking-tight">Technical stack built for high-performance web applications and seamless user flows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arsenal.map((tool, i) => (
            <motion.div key={i} whileHover={{ y: -10, rotateZ: 1 }} className="p-10 rounded-[3rem] bg-black border border-white/5 flex flex-col items-center text-center group transition-all hover:border-yellow-400/30">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center text-4xl text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500 shadow-2xl">{tool.icon}</div>
              <h5 className="text-white text-xl font-black mt-8 uppercase tracking-widest">{tool.name}</h5>
              <div className="mt-4 px-4 py-1 rounded-full border border-white/10 text-[9px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">{tool.tag} • {tool.level}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE TIMELINE */}
      <section className="py-32 px-6 lg:px-24 relative">
        <h2 className="text-neutral-800 font-black text-[15vw] absolute top-10 left-0 leading-none select-none pointer-events-none opacity-20 uppercase">Journey</h2>
        <div className="relative z-10 space-y-24">
          {milestones.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} relative`}>
              <div className="max-w-xl">
                <span className="text-yellow-400 font-mono text-6xl font-black opacity-40 mb-4 block">{m.year}</span>
                <h4 className="text-3xl font-bold uppercase tracking-tighter text-white mb-4">{m.title}</h4>
                <p className="text-neutral-500 text-lg leading-relaxed">{m.desc}</p>
                <div className="w-20 h-[2px] bg-yellow-400/20 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="py-40 px-6 lg:px-24 text-center bg-yellow-400 text-black">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">Let's Start <br /> A Legacy.</h2>
          <Link to="/contactpage" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Get in touch <FiArrowUpRight size={24} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default VisitorExperiencePage;