import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiX, FiCalendar } from 'react-icons/fi';

const ServicePricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const tiers = [
    {
      id: 'standard',
      name: "Standard Project",
      target: "Best for Startups",
      price: "Fixed Price",
      features: ["End-to-end Product Design", "Interactive Prototype", "Development Handoff", "2 Rounds of Revision"],
      accent: "border-white/10"
    },
    {
      id: 'subscription',
      name: "Design Subscription",
      target: "Best for Scaling",
      price: "Monthly Retainer",
      features: ["Dedicated Weekly Hours", "Unlimited Design Requests", "Slack Communication", "UI/UX & Asset Creation"],
      accent: "border-yellow-400/50"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-yellow-400" /> 
              <span className="border rounded-2xl px-4 py-2 text-center w-fit sm:w-auto md:w-[11vw]">
                Investment
              </span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.85]">
              Tailored <br /> 
              <span className="text-neutral-700 italic font-light">Partnerships.</span>
            </h3>
          </div>
          <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold mb-2">
            Pricing adjusted to scope // 2026
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              layout
              className={`relative p-12 bg-white/[0.02] border ${tier.accent} rounded-[2.5rem] overflow-hidden group transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[60px] group-hover:bg-yellow-400/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest mb-2">{tier.target}</p>
                    <h4 className="text-3xl font-bold text-white uppercase tracking-tighter">{tier.name}</h4>
                  </div>
                  <div className="text-right font-mono text-neutral-500 uppercase text-sm">
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-6 mb-16">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-neutral-400">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <FiCheck className="text-yellow-400" size={12} />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedPlan(tier)}
                  className="w-full group/btn relative flex items-center justify-between px-8 py-6 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-yellow-400 active:scale-[0.98]"
                >
                  <span className="relative z-10 text-white text-[11px] font-black uppercase tracking-[0.2em]">Check Availability</span>
                  <FiArrowUpRight className="relative z-10 text-white group-hover/btn:text-yellow-400 transition-colors" size={20} />
                  <div className="absolute inset-0 bg-white/[0.03] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>

              {/* THE REVEAL OVERLAY */}
              <AnimatePresence>
                {selectedPlan?.id === tier.id && (
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="absolute inset-0 z-20 bg-yellow-400 p-12 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <FiCalendar className="text-black" size={32} />
                      <button 
                        onClick={() => setSelectedPlan(null)}
                        className="p-2 hover:bg-black/10 rounded-full transition-colors"
                      >
                        <FiX className="text-black" size={24} />
                      </button>
                    </div>

                    <div>
                      <h4 className="text-black text-4xl font-black uppercase tracking-tighter leading-none mb-4">
                        Slots open for <br />February 2026.
                      </h4>
                      <p className="text-black/70 text-sm font-bold uppercase tracking-widest mb-8">
                        Selected: {tier.name}
                      </p>
                      
                      {/* FIXED NAVIGATION LINK */}
                      <Link 
                        to="/contactpage"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform active:scale-95 no-underline"
                      >
                        Secure your spot <FiArrowUpRight size={18}/>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CUSTOM INQUIRY FOOTER */}
        <div className="mt-12 p-8 border border-dashed border-white/10 rounded-[2rem] flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
            Need a custom enterprise solution?
          </p>
          {/* FIXED NAVIGATION LINK */}
          <Link 
            to="/contactpage"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white text-[10px] font-black uppercase tracking-widest border-b border-yellow-400 pb-1 hover:text-yellow-400 transition-colors inline-block no-underline"
          >
            Request a custom quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;