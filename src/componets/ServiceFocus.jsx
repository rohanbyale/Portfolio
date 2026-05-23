import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceFocus = () => {
  const [activeTab, setActiveTab] = useState(0);

  const focusAreas = [
    {
      title: "User Experience",
      subtitle: "Intuitive Flow",
      description: "Mapping complex user journeys into seamless digital pathways. We prioritize clarity and cognitive ease.",
      image: "https://thezoeteam.com/hubfs/Web%20Design%20MArketing%20Best%20Practices-min.jpg",
    },
    {
      title: "Interface Design",
      subtitle: "Visual Polish",
      description: "Crafting high-fidelity aesthetics that reflect brand authority. Every pixel is intentional.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Motion Systems",
      subtitle: "Living UI",
      description: "Using micro-interactions and transitions to provide feedback and delight the user.",
      image: "https://artversion.com/wp-content/uploads/2024/05/two-desktop-monitors.webp",
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: INTERACTIVE TITLES (Takes more space now) */}
          <div className="w-full lg:w-[55%] space-y-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-4">
                <h1 className="
  border 
  rounded-md
  px-4 py-2 
  text-center 
  w-fit 
  sm:w-auto 
  md:w-[11vw]
  

">
  Focus Areas
</h1>
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                Strategic <br/> <span className="text-gray-500 italic font-light">Execution.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {focusAreas.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className="group cursor-pointer py-4"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-mono transition-colors duration-500 ${activeTab === idx ? 'text-yellow-400' : 'text-neutral-700'}`}>
                      0{idx + 1}—
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${activeTab === idx ? 'text-white' : 'text-neutral-800'}`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <AnimatePresence>
                    {activeTab === idx && (
                      <motion.p 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-4 ml-12 text-neutral-500 text-sm max-w-sm leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: COMPACT DYNAMIC IMAGE (Smaller and Framed) */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 p-2">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={focusAreas[activeTab].image} 
                      alt={focusAreas[activeTab].title}
                      className="w-full h-full object-cover grayscale brightness-50"
                    />
                    
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent" />
                    
                    {/* Floating Info */}
                    <div className="absolute bottom-6 left-6">
                      <p className="text-yellow-400 font-mono text-[9px] uppercase tracking-[0.3em] mb-1">
                        {focusAreas[activeTab].subtitle}
                      </p>
                      <p className="text-white font-bold uppercase tracking-tighter text-lg">
                        Phase 0{activeTab + 1}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Corner Accents (Agency style) */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
            </div>
            
            <p className="mt-4 text-[9px] text-neutral-700 uppercase tracking-widest text-right font-mono">
              [Visual_Reference_0{activeTab + 1}]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFocus;
