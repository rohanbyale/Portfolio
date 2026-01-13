import React, { useRef } from "react";
import { Link } from "react-router-dom"; 
import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const HeroSection = () => {
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  
  // Mouse Physics for Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Parallax transforms for the 3D card
  const rotateX = useTransform(mouseYSpring, [-15, 15], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-15, 15], [-15, 15]);

  // Reveal Animation Variants
  const revealVariants = {
    hidden: { y: "110%" },
    visible: (i) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 * i,
      },
    }),
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 30; 
    const yPct = (mouseY / height - 0.5) * -30;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden px-6 lg:px-24 py-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#facc1505,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[30px] font-mono uppercase tracking-[0.1em] text-yellow-500">
              Rohan Byale
            </span>
          </div>

          {/* TEXT REVEAL HEADING */}
          <h1 className="text-7xl md:text-[100px] font-black tracking-[-0.04em] text-white leading-[0.85] mb-10 uppercase">
            <div className="overflow-hidden">
              <motion.span 
                className="block"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1}
              >
                Human
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="text-transparent italic font-light px-2 block" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
              >
                Centric
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="block"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3}
              >
                Logic
              </motion.span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-neutral-500 text-lg md:text-xl max-w-md leading-relaxed mb-12 font-medium"
          >
            Bridging the gap between <span className="text-white">complex engineering</span> and <span className="text-yellow-400">minimalist aesthetics</span>.
          </motion.p>

          <div className="flex flex-wrap items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Link
                to="/contactpage"
                onClick={() => window.scrollTo(0, 0)}
                className="relative z-10 bg-white text-black px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-widest flex items-center gap-3 overflow-hidden transition-all shadow-2xl shadow-yellow-400/10 cursor-pointer no-underline"
              >
                <span className="relative z-20 flex items-center gap-2">
                  Launch Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </Link>
            </motion.div>

            <motion.a
              href="/RohanByale[1].pdf"
              download
              whileHover={{ x: 5, color: "#facc15" }}
              className="flex items-center gap-3 text-neutral-400 text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer"
            >
              <FiDownload size={18} /> Get Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT - TILT IMAGE PANEL */}
        <div className="relative flex justify-center lg:justify-end perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[320px] md:w-[420px] aspect-[4/5] group cursor-pointer"
          >
            <div className="absolute inset-10 bg-yellow-400/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl">
              <motion.img
                src="/rohan.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            <motion.div
              style={{ transform: "translateZ(80px)" }}
              className="absolute -top-10 -left-10 bg-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl hidden md:block"
            >
              <p className="text-yellow-400 font-mono text-[9px] uppercase tracking-widest">Hello</p>
              <p className="text-white text-[11px] font-bold italic tracking-wide">Welcome to my space</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 lg:left-24 flex items-center gap-4">
          <div className="flex flex-col gap-1.5">
             <div className="w-10 h-[1px] bg-white/20" />
             <div className="w-6 h-[1px] bg-yellow-400" />
          </div>
          <span className="text-white/20 text-[9px] font-mono uppercase tracking-[0.5em]">Based in India</span>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;