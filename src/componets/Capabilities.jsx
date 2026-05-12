
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

              {/* CENTER ICON */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                >
                  <service.Icon
                    size={160}
                    strokeWidth={0.6}
                    className="text-black"
                  />
                </motion.div>
              </div>

              {/* BOTTOM TEXT */}
              <div className="relative z-20">
                {/* Small sharp icon above title */}
                <div className="mb-4">
                  <service.Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-black/60 group-hover:text-black transition-colors duration-300"
                  />
                </div>
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
