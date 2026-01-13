import React from 'react';
import { motion } from 'framer-motion';

const CapabilitiesSection = () => {
  const services = [
    {
      num: "01",
      title: "Product Design",
      tags: ["UX Research", "Wireframing", "Prototyping"],
      desc: "Creating intuitive digital journeys that prioritize the end-user while hitting business goals."
    },
    {
      num: "02",
      title: "Visual Identity",
      tags: ["Logo Systems", "Art Direction", "Brand Guidelines"],
      desc: "Building cohesive visual languages that make your brand unmistakable in a crowded market."
    },
    {
      num: "03",
      title: "Development",
      tags: ["React / Next.js", "Creative Coding", "WebGL"],
      desc: "Pixel-perfect implementation where design meets high-performance engineering."
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-8 flex items-center gap-3">
              <span className="w-8 h-px " /> 
              <h1 className='rounded-2xl border p-2'>Capabilities</h1>
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              Solving Problems <br /> 
              <span className="text-neutral-700 italic">Through Design.</span>
            </h3>
          </div>
          <div className="lg:max-w-xs pt-4">
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium uppercase tracking-wide">
              I  create digital products that don't just work—they inspire.
            </p>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-yellow-400 transition-colors">
              <span className="text-white group-hover:text-yellow-400 text-xl">→</span>
            </div>
          </div>
        </div>

        {/* LIST AREA */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-white/5 hover:bg-white/[0.01] transition-all duration-500 px-4"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-[10px] font-mono text-neutral-600 group-hover:text-yellow-400 transition-colors">
                  {service.num}
                </span>
              </div>

              {/* Title & Tags */}
              <div className="lg:col-span-6">
                <h4 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
                  {service.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-neutral-400 rounded-full border border-white/5 group-hover:border-yellow-400/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-5 flex items-center">
                <p className="text-neutral-500 text-sm leading-relaxed max-w-sm group-hover:text-neutral-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Hover Line Animation */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;