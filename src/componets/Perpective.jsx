
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export default function PerspectiveSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Perspective 3D Tilt Logic
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={container} className=" bg-[#050505] relative h-[80vh] flex items-center justify-center [perspective:1500px] overflow-hidden">
      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="max-w-5xl px-6 text-center z-10"
      >
        <h2 className="text-[10px] font-black tracking-[0.8em]  text-[#FFEF4D] uppercase mb-8">
          The Philosophy
        </h2>
        <p className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          Static code is dead. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
            Motion is the new
          </span> <br />
          Standard.
        </p>
        
        <div className="mt-16 flex justify-center gap-10 md:gap-20 opacity-30">
           {['Innovation', 'Precision', 'Elegance'].map((text) => (
             <span key={text} className="text-[10px] font-black uppercase tracking-[0.3em]">{text}</span>
           ))}
        </div>
      </motion.div>
      
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </section>
  );
}
