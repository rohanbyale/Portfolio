import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCommand, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle window resizing safely for SSR/NextJS context compatibility
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pillars = [
    {
      icon: <FiCommand size={20} />,
      title: "Discovery",
      desc: "Deep diving into business logic and user personas to define the project's core purpose.",
      num: "01",
      tag: "Research"
    },
    {
      icon: <FiLayers size={20} />,
      title: "UI Architecture",
      desc: "Creating scalable design systems that maintain visual harmony across all digital touchpoints.",
      num: "02",
      tag: "Design"
    },
    {
      icon: <FiCpu size={20} />,
      title: "Engineering",
      desc: "Writing clean, performant code with modern stacks like React, Next.js, and Framer Motion.",
      num: "03",
      tag: "Code"
    },
    {
      icon: <FiTrendingUp size={20} />,
      title: "Optimization",
      desc: "Refining interactions and SEO performance to ensure the product thrives in the wild.",
      num: "04",
      tag: "Launch"
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className={`bg-[#050505] text-white relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 ${
        isDesktop ? "h-[500vh]" : "h-auto py-24 md:py-36"
      }`}
    >
      
      {/* Sticky container wrapper - Changed justify-center to justify-start and added pt-20 to fix top clipping */}
      <div className={`${
        isDesktop ? "sticky top-0 h-screen flex flex-col justify-start overflow-hidden pt-20 pb-12" : "relative w-full max-w-7xl mx-auto"
      }`}>
        
        {/* --- SECTION HEADER --- */}
        {/* Adjusted bottom margin slightly to give components optimal spacing inside 100vh */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-12 gap-6 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-4 flex items-center gap-3">
            
              <span className="rounded-md px-3 py-1 border-2 border-yellow inline-block bg-neutral-900/50">Our Philosophy</span>
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] md:leading-none">
              Where <span className="italic font-light text-gray-500">Aesthetics</span> <br className="hidden sm:inline" /> 
              Meet Performance.
            </h3>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xs leading-relaxed font-normal md:mb-1">
            We believe that great design is invisible. It’s a seamless bridge between the user’s intent and the technology’s power.
          </p>
        </div>

        {/* --- RESPONSIVE CARD CONTAINER --- */}
        <div className={`w-full max-w-7xl mx-auto ${
          isDesktop 
            ? "relative min-h-[380px] flex items-center justify-center" 
            : "flex flex-col gap-6 items-center"
        }`}>
          {pillars.map((item, index) => {
            
            // --- ANIMATION TIMINGS (Untouched logic as requested) ---
            const entryStart = 0.02 + index * 0.10; 
            const entryEnd = entryStart + 0.10;
            const splitStart = 0.45;
            const splitEnd = 0.65;

            const targetYOffset = 0; 
            const y = useTransform(
              scrollYProgress,
              [0, entryStart, entryEnd, splitStart, splitEnd],
              [400, 250, targetYOffset, targetYOffset, 0],
              { clamp: true }
            );

            const centerPositions = [-150, -50, 50, 150]; 
            const initialX = `${centerPositions[index]}%`;

            const x = useTransform(
              scrollYProgress,
              [0, splitStart, splitEnd],
              [initialX, initialX, "0%"],
              { clamp: true }
            );

            const scale = useTransform(
              scrollYProgress,
              [0, entryStart, entryEnd],
              [0.85, 0.93, 1],
              { clamp: true }
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, entryStart, entryEnd],
              [0, 0.3, 1],
              { clamp: true }
            );

            const mobileTopOffset = `${12 + index * 4}vh`;

            return (
              <motion.div
                key={index}
                initial={!isDesktop ? { opacity: 0, y: 30 } : false}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-40px' }}
                style={isDesktop ? { x, y, scale, opacity, zIndex: 40 - index } : { top: mobileTopOffset }}
                className={`w-full ${
                  isDesktop 
                    ? "absolute left-0 right-0 mx-auto max-w-[24%] xl:max-w-[280px] 2xl:max-w-[310px]" 
                    : "sticky top-0 max-w-2xl"
                }`}
              >
                {/* --- PREMIUM SQUARE CARD --- */}
                <div className="relative p-6 xl:p-8 bg-[#0A0A0A] border border-white/10 rounded-sm aspect-[4/5] lg:h-[360px] xl:h-[380px] flex flex-col justify-between group transition-all duration-500 hover:border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden">
                  
                  {/* Subtle Top Linear Accent Line on Hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                  
                  {/* Monolithic Giant Background Number Layout */}
                  <div className="absolute -bottom-6 -left-4 text-[11rem] font-black tracking-tighter text-neutral-900/40 select-none pointer-events-none group-hover:text-yellow-400/[0.04] transition-colors duration-500 font-sans z-0">
                    {item.num}
                  </div>

                  {/* Top Row: Icon and Tag Line */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-3 bg-neutral-900 border border-white/10 text-neutral-400 group-hover:text-yellow-400 group-hover:border-yellow-500/30 transition-all duration-500 rounded-none">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-end font-mono text-[9px] tracking-widest text-neutral-500">
                      <span className="text-neutral-600 font-bold group-hover:text-yellow-400/70 transition-colors duration-500"> PHASE</span>
                      <span className="uppercase mt-0.5 text-neutral-400">{item.tag}</span>
                    </div>
                  </div>

                  {/* Bottom Content Frame */}
                  <div className="relative z-10 mt-auto">
                    <h4 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-yellow-400 transition-colors duration-500">
                      {item.title}
                    </h4>
                    
                    {/* Minimal decorative accent bar */}
                    <div className="w-6 h-[1px] bg-neutral-700 mb-3 group-hover:w-12 group-hover:bg-yellow-400 transition-all duration-500" />
                    
                    <p className="text-neutral-400 text-xs leading-relaxed font-normal group-hover:text-neutral-300 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

  
      </div>
    </section>
  );
};

export default ProcessSection;
