import { motion } from 'framer-motion';
import { Layers, Hexagon, Code2 } from 'lucide-react';

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
      Icon: Layers,
    },
    {
      num: '02',
      title: 'Visual Identity',
      tags: ['Logo Systems', 'Art Direction', 'Brand Guidelines'],
      desc: 'Building cohesive visual languages that make your brand unmistakable in a crowded market.',
      Icon: Hexagon,
    },
    {
      num: '03',
      title: 'Development',
      tags: ['React / Next.js', 'Creative Coding', 'WebGL'],
      desc: 'Pixel-perfect implementation where design meets high-performance engineering.',
      Icon: Code2,
    },
  ];

  return (
    <section className="bg-[#050505] py-20 md:py-32 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 relative items-start">
        
        {/* LEFT COLUMN: FIXED/STICKY HEADER (DESKTOP) */}
        {/* On desktop, this side stays pinned in place while cards scroll on the right */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col justify-between">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-6 md:mb-8 flex items-center gap-3">
              <span className="rounded-md border border-white/20 px-4 py-1">Capabilities</span>
            </h2>
            <h3 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
              Solving Problems <br />
              <span className="text-gray-500 sm:text-2xl xl:text-4xl  font-light italic">Through Design.</span>
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-medium uppercase tracking-wide max-w-xs">
              I create digital products that don't just work—they inspire.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: STACKING CARDS */}
        {/* A single vertical track where items overlap smoothly based on viewport scrolling */}
        <div className="w-full lg:w-[60%] flex flex-col gap-8 sm:gap-12 lg:gap-20">
          {services.map((service, index) => {
            // Calculates individual dynamic offsets so background card edges peek out
            const mobileTopOffset = `${12 + index * 3}vh`;
            const desktopTopOffset = `${16 + index * 4}vh`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                style={{ 
                  '--mobile-top': mobileTopOffset,
                  '--desktop-top': desktopTopOffset 
                }}
                className="sticky w-full top-[var(--mobile-top)] lg:top-[var(--desktop-top)] aspect-[14/11] sm:aspect-[16/9] flex flex-col justify-between p-6 sm:p-10 bg-yellow-400 overflow-hidden rounded-2xl border border-black/5 shadow-[0_-20px_50px_rgba(0,0,0,0.4)] group"
              >
                {/* TOP NAV */}
                <div className="relative z-20 flex justify-between items-center">
                  <span className="text-xs font-mono text-black font-black bg-black/10 px-2.5 py-1 rounded">
                    {service.num}
                  </span>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:text-yellow-400 transition-all duration-500 cursor-pointer">
                    <span className="text-base sm:text-lg">↗</span>
                  </div>
                </div>

                {/* BACKGROUND GRAPHIC */}
                <div className="absolute inset-0 flex items-center justify-end pr-6 sm:pr-16 pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="opacity-[0.06] group-hover:opacity-15 transition-opacity duration-700"
                  >
                    <service.Icon
                      size={260}
                      strokeWidth={0.4}
                      className="text-black"
                    />
                  </motion.div>
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-20 max-w-[85%] sm:max-w-[75%]">
                  <div className="mb-2 sm:mb-4">
                    <service.Icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-black/80"
                    />
                  </div>
                  <h4 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tighter mb-2 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h4>
                  <p className="text-black/70 text-xs sm:text-base leading-snug mb-4 sm:mb-6 font-medium">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, i) => (
                      <span key={i}
                        className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2.5 py-1 border border-black/20 text-black rounded-full bg-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* MICRO GRAIN SURFACE TEXTURE */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
