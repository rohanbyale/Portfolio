import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link import
import { FiCommand, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi';

const ProcessSection = () => {
  const pillars = [
    {
      icon: <FiCommand className="text-yellow-400" size={24} />,
      title: "Discovery",
      desc: "Deep diving into the business logic and user personas to define the project's core purpose.",
      tag: "01 // Research"
    },
    {
      icon: <FiLayers className="text-yellow-400" size={24} />,
      title: "UI Architecture",
      desc: "Creating scalable design systems that maintain visual harmony across all digital touchpoints.",
      tag: "02 // Design"
    },
    {
      icon: <FiCpu className="text-yellow-400" size={24} />,
      title: "Engineering",
      desc: "Writing clean, performant code with modern stacks like React, Next.js, and Framer Motion.",
      tag: "03 // Code"
    },
    {
      icon: <FiTrendingUp className="text-yellow-400" size={24} />,
      title: "Optimization",
      desc: "Refining interactions and SEO performance to ensure the product thrives in the wild.",
      tag: "04 // Launch"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px " /> 
              <span className='rounded-2xl p-2 border inline-block'>Our Philosophy</span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Where <span className="italic font-light text-neutral-600">Aesthetics</span> <br /> 
              Meet Performance.
            </h3>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs leading-relaxed font-medium">
            We believe that great design is invisible. It’s a seamless bridge between the user’s intent and the technology’s power.
          </p>
        </div>

        {/* --- PROCESS BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-yellow-400/20"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-yellow-400 transition-colors duration-500 group-hover:text-black">
                    {React.cloneElement(item.icon, { 
                      className: "transition-colors duration-500 group-hover:text-black" 
                    })}
                  </div>
                  <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest mt-2">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-medium group-hover:text-neutral-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/5 rounded-tl-3xl group-hover:bg-yellow-400/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA BAR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-10 rounded-[2rem] border border-white/5 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-white text-xl font-bold tracking-tight">Ready to start a revolution?</h4>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-1">Currently accepting new projects for Q2 2026</p>
          </div>
          
          {/* REPLACED BUTTON/A TAG WITH ROUTER LINK */}
          <Link 
            to="/contactpage"
            onClick={() => window.scrollTo(0, 0)}
            className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all active:scale-95 no-underline"
          >
            Book a strategy call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;