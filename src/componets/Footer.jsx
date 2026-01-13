import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added this import
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiArrowUpRight, 
  FiMail,
  FiMapPin,
  FiCheck,
  FiSend
} from 'react-icons/fi';
import { 
  SiBehance, 
  SiPinterest 
} from 'react-icons/si';

const socials = [
  { name: 'Github', icon: <FiGithub />, link: 'https://github.com/rohanbyale', brandColor: '#ffffff' },
  { name: 'LinkedIn', icon: <FiLinkedin />, link: 'https://linkedin.com/in/rohan-byale', brandColor: '#0077b5' },
  { name: 'Instagram', icon: <FiInstagram />, link: 'https://www.instagram.com/_rohan__04_/', brandColor: '#e4405f' },
  { name: 'Behance', icon: <SiBehance />, link: 'https://www.behance.net/rohanbyale', brandColor: '#0057ff' },
  { name: 'Pinterest', icon: <SiPinterest />, link: 'https://in.pinterest.com/byalerohan8/', brandColor: '#bd081c' },
];

export default function Footer() {
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true,
        timeZone: 'Asia/Kolkata' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('byalerohan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-10 px-6 lg:px-24 border-t border-white/5 overflow-hidden font-sans">
      
      {/* 🚀 LARGE CTA SECTION */}
      <div className="max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12">
            Let's create <br />
            <span className="text-neutral-800 italic font-light">something great.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* EMAIL COPY BUTTON */}
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold uppercase text-sm tracking-widest transition-all overflow-hidden shadow-2xl shadow-white/5"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="copied" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="relative z-10 flex items-center gap-2">
                    Email Copied <FiCheck className="text-green-600" />
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="relative z-10">
                    Copy Gmail
                  </motion.span>
                )}
              </AnimatePresence>
              <FiMail className="relative z-10 text-xl group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            {/* NEW REDIRECT CONTACT BUTTON - CHANGED TO LINK */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contactpage" 
                className="group flex items-center gap-4 px-10 py-5 bg-transparent border border-white/10 hover:border-yellow-400/50 rounded-full font-bold uppercase text-sm tracking-widest transition-all"
              >
                <span>Get In Touch</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <p className="mt-6 text-[10px] text-neutral-600 font-mono tracking-widest uppercase">Direct: byalerohan@gmail.com</p>
        </motion.div>
      </div>

      {/* 🌐 SOCIAL GRID & INFO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/5">
        
        {/* Brand & Time & Location */}
        <div className="space-y-6">
          <div className="text-2xl font-black tracking-tighter uppercase">
            Byale Rohan<span className="text-yellow-400">.</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="space-y-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl w-fit">
              <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest flex items-center gap-2">
                <FiMapPin className="text-yellow-400" /> Based In
              </p>
              <p className="text-sm font-bold text-neutral-300 tracking-tight">Maharashtra, India</p>
            </div>
            <div className="space-y-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl w-fit">
              <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">Local Time (IST)</p>
              <p className="text-lg font-mono text-neutral-300 tracking-tighter">{time}</p>
            </div>
          </div>
        </div>

        {/* Navigation Map - CHANGED TO LINK */}
        <div className="space-y-6">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Sitemap</p>
          <ul className="space-y-3">
            {[ 'Home', 'Work', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={
                    item === 'Contact' ? '/contactpage' : 
                    item === 'About' ? '/mainabout' : 
                    item === 'Work' ? '/projectpage' : 
                    // item === 'Services' ? '/mainservices' : 
                    `/#${item.toLowerCase()}`
                  } 
                  className="text-neutral-500 hover:text-white transition-colors uppercase text-[11px] font-bold tracking-[0.2em] flex items-center gap-2 group"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Connections */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Digital Presence</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="relative flex items-center gap-3 px-5 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: social.brandColor }} />
                <span className="text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] text-neutral-400 group-hover:text-white">
                  {social.icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                  {social.name}
                </span>
                <FiArrowUpRight className="text-neutral-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* 📜 BOTTOM BAR - CHANGED TO LINK */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] font-mono text-neutral-700 uppercase tracking-[0.4em]">
          Byale Rohan © 2026 // {new Date().toLocaleDateString('en-GB').replace(/\//g, '.')}
        </p>
        
       <div className="flex items-center gap-8 group/container">
  {['Explore', 'The', 'Craft'].map((text, index) => (
    <Link 
      key={text} 
      to="/thankspage" 
      onClick={() => window.scrollTo(0, 0)}
      className="relative text-[10px] font-black font-mono text-neutral-500 hover:text-yellow-400 uppercase tracking-[0.4em] transition-all duration-500 hover:scale-110 group-hover/container:opacity-50 hover:!opacity-100"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        {text}
      </motion.span>
      
      {/* Animated underline that appears on hover */}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
    </Link>
  ))}
  
  {/* The "Hook" - A small pulsing indicator to grab attention */}
  <div className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
  </div>
</div>
      </div>

      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-yellow-400/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
}