import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiMail, FiInstagram, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi';

const ContactHero = () => {
  const socials = [
    { icon: <FiTwitter size={18} />, link: "#", name: "Twitter" },
    { icon: <FiLinkedin size={18} />, link: "https://linkedin.com/in/rohan-byale", name: "LinkedIn" },
    { icon: <FiDribbble size={18} />, link: "https://www.behance.net/rohanbyale", name: "Dribbble" },
    { icon: <FiInstagram size={18} />, link: "https://www.instagram.com/_rohan__04_/", name: "Instagram" },
  ];

  return (
    <section className="relative bg-[#050505] min-h-[70vh] flex flex-col justify-center pt-40 pb-20 px-6 lg:px-24 overflow-hidden">
      
      {/* BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: THE BIG HOOK */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                <p className="text-[9px] font-black uppercase tracking-widest text-yellow-400">Available for Q1 2026</p>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]"
            >
              Let’s build <br />
              <span className="text-neutral-800 italic font-light">The Future</span> <br />
              Together<span className="text-yellow-400">.</span>
            </motion.h1>
          </div>

          {/* RIGHT: QUICK INFO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="space-y-8 lg:pb-6">
              <div className="flex items-start gap-4">
                <FiArrowDownRight className="text-yellow-400 mt-1" size={24} />
                <p className="text-neutral-500 text-sm leading-relaxed uppercase tracking-wide font-medium">
                  Have a specific idea or just want to say hi? Drop a message and I'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:byalerohan@gmail.com" className="group flex items-center justify-between p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-yellow-400/50 transition-all">
                  <div className="flex items-center gap-4">
                    <FiMail className="text-neutral-500 group-hover:text-yellow-400 transition-colors" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">byalerohan@gmail.com</span>
                  </div>
                  <span className="text-neutral-700 group-hover:text-white transition-colors">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STRIP: UPDATED WITH ICONS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mr-2">Follow —</span>
            {socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all duration-300 group"
                aria-label={social.name}
              >
                <motion.div whileHover={{ rotate: 15 }}>
                  {social.icon}
                </motion.div>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
             <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Scroll</span>
             {/* <span className="text-[10px] font-mono text-white">10:45 PM GMT+5</span> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default ContactHero;
