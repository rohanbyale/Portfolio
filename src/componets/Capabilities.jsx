
import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   CARD 01 — Product Design
   Stable phone frame, parts animate independently
───────────────────────────────────────────── */
const ProductDesignSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Phone frame — static */}
    <rect x="68" y="18" width="64" height="112" rx="13" fill="none" stroke="black" strokeWidth="2.5" strokeOpacity="0.3"/>
    <rect x="75" y="30" width="50" height="82" rx="4" fill="black" fillOpacity="0.07"/>
    <rect x="85" y="118" width="30" height="3" rx="2" fill="black" fillOpacity="0.2"/>
    <rect x="88" y="22" width="24" height="5" rx="2.5" fill="black" fillOpacity="0.18"/>
    {/* Screen UI lines — static */}
    <rect x="82" y="40" width="36" height="4" rx="2" fill="black" fillOpacity="0.22"/>
    <rect x="82" y="50" width="22" height="3" rx="1.5" fill="black" fillOpacity="0.13"/>
    {/* Card on screen — static */}
    <rect x="82" y="60" width="36" height="24" rx="4" fill="black" fillOpacity="0.1" stroke="black" strokeWidth="0.8" strokeOpacity="0.18"/>
    <rect x="86" y="65" width="12" height="12" rx="2" fill="black" fillOpacity="0.14"/>
    <rect x="102" y="66" width="12" height="3" rx="1.5" fill="black" fillOpacity="0.18"/>
    <rect x="102" y="72" width="8" height="2.5" rx="1" fill="black" fillOpacity="0.1"/>
    {/* Nav dots — static */}
    <circle cx="90" cy="96" r="3" fill="black" fillOpacity="0.22"/>
    <circle cx="100" cy="96" r="3" fill="black" fillOpacity="0.1"/>
    <circle cx="110" cy="96" r="3" fill="black" fillOpacity="0.1"/>

    {/* Floating node LEFT — bobs up/down */}
    <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
      <circle cx="38" cy="62" r="8" fill="black" fillOpacity="0.1" stroke="black" strokeWidth="1" strokeOpacity="0.2"/>
      <circle cx="38" cy="62" r="3" fill="black" fillOpacity="0.18"/>
      <line x1="46" y1="64" x2="68" y2="70" stroke="black" strokeOpacity="0.12" strokeWidth="0.8" strokeDasharray="3 3"/>
    </motion.g>

    {/* Floating node RIGHT — bobs opposite */}
    <motion.g animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
      <circle cx="162" cy="88" r="6" fill="black" fillOpacity="0.1" stroke="black" strokeWidth="1" strokeOpacity="0.18"/>
      <circle cx="162" cy="88" r="2.5" fill="black" fillOpacity="0.18"/>
      <line x1="156" y1="88" x2="132" y2="82" stroke="black" strokeOpacity="0.12" strokeWidth="0.8" strokeDasharray="3 3"/>
    </motion.g>

    {/* Floating node TOP-RIGHT — pulses */}
    <motion.g animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
      <circle cx="156" cy="44" r="4" fill="black" fillOpacity="0.12" stroke="black" strokeWidth="0.8" strokeOpacity="0.15"/>
      <line x1="152" y1="46" x2="132" y2="54" stroke="black" strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="3 3"/>
    </motion.g>

    {/* Cursor — drifts slowly */}
    <motion.g animate={{ x: [0, 5, 0], y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
      <path d="M112 70 L112 88 L116.5 83 L120 90 L122 89 L118.5 82 L124 82 Z" fill="black" fillOpacity="0.38"/>
    </motion.g>

    {/* Scan line — sweeps top to bottom inside screen */}
    <motion.rect x="75" width="50" height="2" rx="1" fill="black" fillOpacity="0.18"
      animate={{ y: [30, 112, 30] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}/>

    {/* Grid dots — static */}
    {[70, 82, 94, 106, 118, 130].map((cx, i) => (
      <React.Fragment key={i}>
        <circle cx={cx} cy="150" r="2" fill="black" fillOpacity={i % 2 === 0 ? 0.14 : 0.09}/>
        <circle cx={cx} cy="162" r="2" fill="black" fillOpacity={i % 2 === 0 ? 0.09 : 0.13}/>
      </React.Fragment>
    ))}
  </svg>
);

/* ─────────────────────────────────────────────
   CARD 02 — Visual Identity
   Stable lettermark + brackets, only needle + swatches move
───────────────────────────────────────────── */
const VisualIdentitySVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Central lettermark — static */}
    <text x="100" y="118" fontFamily="Georgia, serif" fontSize="110" fontWeight="700" textAnchor="middle"
      fill="black" fillOpacity="0.11" letterSpacing="-6">R</text>

    {/* Rings — static */}
    <circle cx="100" cy="100" r="82" stroke="black" strokeWidth="0.8" strokeOpacity="0.13" strokeDasharray="6 6"/>
    <circle cx="100" cy="100" r="58" stroke="black" strokeWidth="1" strokeOpacity="0.11"/>
    {/* Crosshair — static */}
    <line x1="18" y1="100" x2="182" y2="100" stroke="black" strokeOpacity="0.07" strokeWidth="0.8"/>
    <line x1="100" y1="18" x2="100" y2="182" stroke="black" strokeOpacity="0.07" strokeWidth="0.8"/>

    {/* Tick marks — static */}
    {Array.from({ length: 24 }).map((_, i) => {
      const rad = (i * 15 * Math.PI) / 180;
      return (
        <line key={i}
          x1={100 + 78 * Math.cos(rad)} y1={100 + 78 * Math.sin(rad)}
          x2={100 + 72 * Math.cos(rad)} y2={100 + 72 * Math.sin(rad)}
          stroke="black" strokeWidth={i % 6 === 0 ? '2' : '0.8'} strokeOpacity="0.18"/>
      );
    })}

    {/* Corner brackets — static */}
    <path d="M22 22 L22 34 M22 22 L34 22" stroke="black" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>
    <path d="M178 22 L178 34 M178 22 L166 22" stroke="black" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>
    <path d="M22 178 L22 166 M22 178 L34 178" stroke="black" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>
    <path d="M178 178 L178 166 M178 178 L166 178" stroke="black" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>

    {/* Compass needle — rotates around center point */}
    <motion.g
      style={{ originX: '100px', originY: '100px' }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <line x1="100" y1="100" x2="100" y2="42" stroke="black" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>
      <polygon points="100,36 96,50 104,50" fill="black" fillOpacity="0.28"/>
      <line x1="100" y1="100" x2="100" y2="158" stroke="black" strokeWidth="0.8" strokeOpacity="0.1" strokeLinecap="round"/>
    </motion.g>
    <circle cx="100" cy="100" r="4" fill="black" fillOpacity="0.28"/>

    {/* Color palette swatches — pulse one by one */}
    {[
      { x: 28, fillOp: 0.35, delay: 0 },
      { x: 54, fillOp: 0.22, delay: 0.4 },
      { x: 80, fillOp: 0.12, delay: 0.8 },
      { x: 106, fillOp: 0.05, delay: 1.2 },
    ].map((s, i) => (
      <motion.rect key={i} x={s.x} y="156" width="20" height="20" rx="4"
        fill="black" fillOpacity={s.fillOp}
        stroke={i === 3 ? 'black' : 'none'} strokeWidth="1" strokeOpacity="0.18"
        animate={{ scaleY: [1, 1.14, 1] }}
        style={{ originY: '176px' }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
      />
    ))}

    {/* Rotating ring accent */}
    <motion.circle cx="100" cy="100" r="82"
      stroke="black" strokeWidth="1.5" strokeOpacity="0.08" strokeDasharray="12 70"
      style={{ originX: '100px', originY: '100px' }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
    />
  </svg>
);

/* ─────────────────────────────────────────────
   CARD 03 — Development
   Stable terminal, code lines animate in, cursor blinks
───────────────────────────────────────────── */
const DevelopmentSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Terminal frame — static */}
    <rect x="18" y="32" width="164" height="116" rx="10" fill="black" fillOpacity="0.1" stroke="black" strokeWidth="1.5" strokeOpacity="0.22"/>
    <rect x="18" y="32" width="164" height="24" rx="10" fill="black" fillOpacity="0.14"/>
    <rect x="18" y="44" width="164" height="12" fill="black" fillOpacity="0.14"/>
    {/* Traffic lights — static */}
    <circle cx="34" cy="44" r="4.5" fill="black" fillOpacity="0.3"/>
    <circle cx="48" cy="44" r="4.5" fill="black" fillOpacity="0.18"/>
    <circle cx="62" cy="44" r="4.5" fill="black" fillOpacity="0.1"/>

    {/* Prompt — static */}
    <text x="28" y="76" fontFamily="monospace" fontSize="9" fill="black" fillOpacity="0.4" fontWeight="700">$</text>

    {/* Code line 1 — slides in */}
    <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 5 }}>
      <rect x="38" y="70" width="28" height="5" rx="2" fill="black" fillOpacity="0.32"/>
      <rect x="70" y="70" width="44" height="5" rx="2" fill="black" fillOpacity="0.18"/>
      <rect x="118" y="70" width="20" height="5" rx="2" fill="black" fillOpacity="0.12"/>
    </motion.g>

    {/* Code line 2 — slides in with delay */}
    <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatDelay: 5 }}>
      <rect x="50" y="82" width="18" height="5" rx="2" fill="black" fillOpacity="0.24"/>
      <rect x="72" y="82" width="56" height="5" rx="2" fill="black" fillOpacity="0.16"/>
    </motion.g>

    {/* Code line 3 */}
    <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 5 }}>
      <rect x="62" y="94" width="14" height="5" rx="2" fill="black" fillOpacity="0.28"/>
      <rect x="80" y="94" width="32" height="5" rx="2" fill="black" fillOpacity="0.14"/>
      <rect x="116" y="94" width="22" height="5" rx="2" fill="black" fillOpacity="0.2"/>
    </motion.g>

    {/* Code line 4 */}
    <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.7, repeat: Infinity, repeatDelay: 5 }}>
      <rect x="50" y="106" width="50" height="5" rx="2" fill="black" fillOpacity="0.16"/>
      <rect x="104" y="106" width="18" height="5" rx="2" fill="black" fillOpacity="0.26"/>
    </motion.g>

    {/* Closing brace */}
    <motion.g initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.2, repeat: Infinity, repeatDelay: 5 }}>
      <rect x="38" y="118" width="12" height="5" rx="2" fill="black" fillOpacity="0.32"/>
    </motion.g>

    {/* Blinking cursor */}
    <motion.rect x="54" y="130" width="3" height="9" rx="1.5" fill="black" fillOpacity="0.5"
      animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}/>

    {/* Tech badge pills — static */}
    <rect x="18" y="160" width="44" height="18" rx="9" fill="black" fillOpacity="0.16" stroke="black" strokeWidth="0.8" strokeOpacity="0.22"/>
    <text x="40" y="173" fontFamily="monospace" fontSize="7" fill="black" fillOpacity="0.45" textAnchor="middle" fontWeight="700">REACT</text>
    <rect x="68" y="160" width="54" height="18" rx="9" fill="black" fillOpacity="0.11" stroke="black" strokeWidth="0.8" strokeOpacity="0.18"/>
    <text x="95" y="173" fontFamily="monospace" fontSize="7" fill="black" fillOpacity="0.38" textAnchor="middle" fontWeight="700">NEXT.JS</text>
    <rect x="128" y="160" width="46" height="18" rx="9" fill="black" fillOpacity="0.16" stroke="black" strokeWidth="0.8" strokeOpacity="0.22"/>
    <text x="151" y="173" fontFamily="monospace" fontSize="7" fill="black" fillOpacity="0.45" textAnchor="middle" fontWeight="700">WebGL</text>

    {/* Corner circuit accents — static */}
    <path d="M150 18 L166 18 L166 30" stroke="black" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" fill="none"/>
    <circle cx="150" cy="18" r="2.5" fill="black" fillOpacity="0.18"/>
    <circle cx="166" cy="30" r="2.5" fill="black" fillOpacity="0.18"/>
    <path d="M34 18 L18 18 L18 30" stroke="black" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" fill="none"/>
    <circle cx="34" cy="18" r="2.5" fill="black" fillOpacity="0.18"/>
    <circle cx="18" cy="30" r="2.5" fill="black" fillOpacity="0.18"/>

    {/* Ping dot */}
    <motion.circle cx="170" cy="38" r="4" fill="black" fillOpacity="0.0"
      animate={{ r: [4, 10, 4], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      style={{ stroke: 'black', strokeWidth: 1, strokeOpacity: 0.2 }}
    />
    <circle cx="170" cy="38" r="3" fill="black" fillOpacity="0.28"/>
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const CapabilitiesSection = () => {
  const services = [
    {
      num: '01',
      title: 'Product Design',
      tags: ['UX Research', 'Wireframing', 'Prototyping'],
      desc: 'Creating intuitive digital journeys that prioritize the end-user while hitting business goals.',
      symbol: <ProductDesignSVG />,
    },
    {
      num: '02',
      title: 'Visual Identity',
      tags: ['Logo Systems', 'Art Direction', 'Brand Guidelines'],
      desc: 'Building cohesive visual languages that make your brand unmistakable in a crowded market.',
      symbol: <VisualIdentitySVG />,
    },
    {
      num: '03',
      title: 'Development',
      tags: ['React / Next.js', 'Creative Coding', 'WebGL'],
      desc: 'Pixel-perfect implementation where design meets high-performance engineering.',
      symbol: <DevelopmentSVG />,
    },
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-white/5 pb-16">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-8 flex items-center gap-3">
              <span className="rounded-full border border-white/20 px-4 py-1">Capabilities</span>
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
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] flex flex-col justify-between p-8 lg:p-10 bg-yellow-400 overflow-hidden rounded-sm"
            >
              {/* TOP NAV */}
              <div className="relative z-20 flex justify-between items-center">
                <span className="text-xs font-mono text-black font-black bg-black/5 px-2 py-1 rounded">
                  {service.num}
                </span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-yellow-400 transition-all duration-500">
                  <span className="text-lg">↗</span>
                </div>
              </div>

              {/* CENTER SVG — subtle breathe only, NO rotation */}
              <div className="absolute inset-0 flex items-center justify-center p-10 pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.025, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full aspect-square opacity-55 group-hover:opacity-100 transition-opacity duration-700"
                >
                  {service.symbol}
                </motion.div>
              </div>

              {/* BOTTOM TEXT */}
              <div className="relative z-20">
                <h4 className="text-3xl font-black text-black uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h4>
                <p className="text-black/70 text-sm leading-tight mb-6 font-medium max-w-[90%]">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, i) => (
                    <span key={i}
                      className="text-[8px] font-black uppercase tracking-widest px-2 py-1 border border-black/20 text-black rounded-full group-hover:bg-black group-hover:text-yellow-400 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GRAIN */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
