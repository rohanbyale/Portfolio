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
        {/* Changed mb-24 to mb-12 to reduce gap */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-8 flex items-center gap-3">
            
              <span className='rounded-full border border-white/20 px-4 py-1'>Capabilities</span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              Solving Problems <br /> 
              <span className="text-neutral-700 italic">Through Design.</span>
            </h3>
          </div>
          <div className="lg:max-w-xs pt-4">
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium uppercase tracking-wide">
              I create digital products that don't just work—they inspire.
            </p>
            <div className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center group transition-colors">
              <span className="text-yellow-400 text-xl">→</span>
            </div>
          </div>
        </div>

        {/* SQUARE GRID AREA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              /* Removed group hover logic, set background and text colors permanently */
              className="relative aspect-square flex flex-col justify-between p-8 lg:p-12 border border-black/5 bg-yellow-400 overflow-hidden"
            >
              {/* Number */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono text-black transition-colors font-bold">
                  {service.num}
                </span>
                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
                    <span className="text-black text-sm">↗</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h4 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter mb-4">
                  {service.title}
                </h4>
                <p className="text-black/80 text-sm leading-tight mb-6 font-medium line-clamp-3">
                  {service.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-black/10 text-black rounded-sm border border-black/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Bottom Line - Now permanently visible */}
              <div className="absolute bottom-0 left-0 h-[4px] bg-black w-full z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
