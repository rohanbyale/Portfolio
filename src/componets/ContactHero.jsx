import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowDownRight,
  FiMail,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiDribbble,
} from 'react-icons/fi';

/* ─────────────────────────────────────────────
   BG SMS WATERMARK
───────────────────────────────────────────── */
const SmsBgWatermark = () => (
  <svg
    viewBox="0 0 220 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 340, height: 340, opacity: 0.04, userSelect: 'none', pointerEvents: 'none' }}
  >
    {/* outer bubble */}
    <rect x="10" y="10" width="200" height="140" rx="28" fill="#facc15" />
    {/* tail */}
    <path d="M40 150 L20 185 L80 155" fill="#facc15" />
    {/* text lines */}
    <rect x="34" y="42" width="120" height="12" rx="6" fill="#050505" opacity="0.5" />
    <rect x="34" y="66" width="90"  height="12" rx="6" fill="#050505" opacity="0.5" />
    <rect x="34" y="90" width="105" height="12" rx="6" fill="#050505" opacity="0.5" />
    {/* dot trio */}
    <circle cx="44" cy="120" r="7" fill="#050505" opacity="0.4" />
    <circle cx="64" cy="120" r="7" fill="#050505" opacity="0.4" />
    <circle cx="84" cy="120" r="7" fill="#050505" opacity="0.4" />
  </svg>
);

/* ─────────────────────────────────────────────
   EMAIL HOVER TOOLTIP SVG
───────────────────────────────────────────── */
const EmailTooltipSvg = () => (
  <svg
    viewBox="0 0 260 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 260, height: 120 }}
  >
    {/* card bg */}
    <rect x="1" y="1" width="258" height="100" rx="16" fill="#0d0d0d" stroke="#facc15" strokeWidth="0.8" />

    {/* envelope body */}
    <rect x="18" y="28" width="56" height="42" rx="6" fill="#1a1a1a" stroke="#facc15" strokeWidth="0.8" />
    {/* envelope flap */}
    <path d="M18 34 L46 54 L74 34" fill="none" stroke="#facc15" strokeWidth="0.8" strokeLinejoin="round" />
    {/* envelope corner lines */}
    <line x1="18" y1="70" x2="36" y2="52" stroke="#facc15" strokeWidth="0.5" opacity="0.5" />
    <line x1="74" y1="70" x2="56" y2="52" stroke="#facc15" strokeWidth="0.5" opacity="0.5" />

    {/* signal arcs */}
    <path d="M82 49 Q95 38 82 27"  fill="none" stroke="#facc15" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <path d="M88 49 Q106 35 88 21" fill="none" stroke="#facc15" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <path d="M94 49 Q117 32 94 15" fill="none" stroke="#facc15" strokeWidth="1" strokeLinecap="round" opacity="0.12" />

    {/* right text */}
    <text x="108" y="38" fontFamily="monospace" fontSize="9" fill="#facc15" opacity="0.9" fontWeight="700" letterSpacing="2">
      SEND A MESSAGE
    </text>
    <rect x="108" y="46" width="80" height="4" rx="2" fill="#1e1e1e" />
    <rect x="108" y="56" width="60" height="4" rx="2" fill="#1e1e1e" />

    {/* pill badge */}
    <rect x="108" y="68" width="68" height="16" rx="8" fill="#facc15" />
    <text x="142" y="80" fontFamily="monospace" fontSize="8" fill="#000" textAnchor="middle" fontWeight="700">
      24H REPLY
    </text>

    {/* bubble tail */}
    <path d="M30 101 L20 118 L55 104" fill="#0d0d0d" stroke="#facc15" strokeWidth="0.8" strokeLinejoin="round" />
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ContactHero = () => {
  const [emailHovered, setEmailHovered] = useState(false);

  const socials = [
    { icon: <FiTwitter size={18} />,   link: '#',                                        name: 'Twitter'   },
    { icon: <FiLinkedin size={18} />,  link: 'https://linkedin.com/in/rohan-byale',       name: 'LinkedIn'  },
    { icon: <FiDribbble size={18} />,  link: 'https://www.behance.net/rohanbyale',        name: 'Dribbble'  },
    { icon: <FiInstagram size={18} />, link: 'https://www.instagram.com/_rohan__04_/',   name: 'Instagram' },
  ];

  return (
    <section
      className="relative bg-[#050505] min-h-[70vh] flex flex-col justify-center pt-40 pb-20 px-6 lg:px-24 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      {/* SMS WATERMARK — top-right corner */}
      <div
        className="absolute top-0 right-0"
        style={{ transform: 'translate(48px, -48px) rotate(12deg)' }}
      >
        <SmsBgWatermark />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* ── LEFT: BIG HOOK ── */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                </span>
                <p className="text-[9px] font-black uppercase tracking-widest text-yellow-400">
                  Available for Q1 2026
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]"
            >
              Let's build <br />
              <span className="text-neutral-800 italic font-light">The Future</span> <br />
              Together<span className="text-yellow-400">.</span>
            </motion.h1>
          </div>

          {/* ── RIGHT: QUICK INFO ── */}
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
                {/* EMAIL LINK */}
                <div className="relative">
                  {/* TOOLTIP */}
                  <AnimatePresence>
                    {emailHovered && (
                      <motion.div
                        key="email-tooltip"
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          bottom: 'calc(100% + 10px)',
                          left: 0,
                          zIndex: 50,
                          pointerEvents: 'none',
                        }}
                      >
                        <EmailTooltipSvg />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <a
                    href="mailto:byalerohan@gmail.com"
                    onMouseEnter={() => setEmailHovered(true)}
                    onMouseLeave={() => setEmailHovered(false)}
                    className="group flex items-center justify-between p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-yellow-400/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <FiMail className="text-neutral-500 group-hover:text-yellow-400 transition-colors" />
                      <span className="text-xs font-bold text-white uppercase tracking-widest">
                        byalerohan@gmail.com
                      </span>
                    </div>
                    <span className="text-neutral-700 group-hover:text-white transition-colors">→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 mr-2">
              Follow —
            </span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
