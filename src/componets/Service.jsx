import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-stack Development",
    ghostTitle: "Code",
    description: "Building robust, scalable web applications using the MERN stack, Next.js, and cloud architecture. Focus on performance and clean code.",
    tags: ["React", "Node.js", "MongoDb", "JavaScript"]
  },
  {
    id: "02",
    title: "UI/UX Strategy",
    ghostTitle: "Design",
    description: "Bridging the gap between design and code. Creating design systems that scale and user journeys that convert.",
    tags: [ "Storybook", "System Design"]
  },
  {
    id: "03",
    title: "Performance Optimization",
    ghostTitle: "Speed",
    description: "Specializing in Core Web Vitals, SEO architecture, and lightning-fast load times for high-traffic applications.",
    tags: ["SEO", "Web Vitals", "Next.js"]
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDownloadCV = () => {
    const pdfUrl = "/Resume"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/RohanByale[1].pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-[#050505] text-white py-32 px-6 lg:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className=" text-yellow-400 font-bold tracking-[0.5em] uppercase text-[10px] mb-4"
          >
           <h1 className="
  border 
  rounded-md
  px-4 py-2 
  text-center 
  w-fit 
  sm:w-auto 
  md:w-[11vw]

">
  Craft
</h1>

          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase"
            >
              Digital <br/>
              <span className="text-gray-700 italic font-light lowercase">excellence.</span>
            </motion.h2>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-10 lg:py-14 cursor-pointer overflow-hidden"
            >
              {/* Animated Reveal Background - Faster & Smoother */}
              <motion.div 
                className="absolute inset-0 bg-yellow-400"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                style={{ originY: 1 }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between transition-colors duration-300 group-hover:text-black px-2">
                
                <div className="flex items-center gap-6 lg:gap-16">
                  <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                    {service.id}
                  </span>
                  <div className="relative">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    {/* Ghost Text - Scaled down to prevent "looking big" */}
                    <span className="absolute -top-4 -right-8 text-4xl font-black opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none uppercase italic scale-75 group-hover:scale-100">
                      {service.ghostTitle}
                    </span>
                  </div>
                </div>

                <div className="mt-6 lg:mt-0 flex flex-wrap gap-2 lg:justify-end">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[8px] uppercase tracking-widest font-black group-hover:border-black/30 group-hover:bg-black/5 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* REFINED DESCRIPTION - Auto height but contained */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 overflow-hidden lg:ml-24 px-2"
                  >
                    <p className="mt-6 text-lg lg:text-xl text-black/80 leading-relaxed max-w-2xl font-medium tracking-tight">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">Available for new projects</p>
          </div>

          <button 
            onClick={handleDownloadCV}
            className="group relative flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full overflow-hidden transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 font-black uppercase tracking-widest text-[10px]">
              Download CV 
            </span>
            <div className="relative z-10 w-5 h-5 bg-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
               <svg width="10" height="10" viewBox="0 0 15 15" fill="none" className="text-white">
                  <path d="M7.5 10.2071L10.3536 7.35355C10.5488 7.15829 10.8654 7.15829 11.0607 7.35355C11.2559 7.54882 11.2559 7.8654 11.0607 8.06066L7.85355 11.2678C7.65829 11.463 7.34171 11.463 7.14645 11.2678L3.93934 8.06066C3.74408 7.8654 3.74408 7.54882 3.93934 7.35355C4.1346 7.15829 4.45118 7.15829 4.64645 7.35355L7.5 10.2071Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  <path d="M7.5 11V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
               </svg>
            </div>
            <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
