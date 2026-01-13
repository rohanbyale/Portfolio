import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Most MVP projects take 4–6 weeks. Full-scale platforms typically range from 3 to 5 months depending on complexity and the depth of the discovery phase."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, I provide monthly retainer options for continuous design iterations, testing, and asset creation to ensure your product evolves with its users."
    },
    {
      q: "How do we handle communication?",
      a: "I primarily use Slack for daily syncs and Notion for project tracking. Weekly strategy calls are scheduled to review milestones and blockers."
    },
    {
      q: "What do I need to start a project?",
      a: "Ideally, a clear vision of the problem you're solving. Any existing brand guidelines, user research, or competitor analysis is also extremely helpful."
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Absolutely. I specialize in taking raw ideas and turning them into high-fidelity prototypes that are ready for seed-round funding or development."
    }
  ];

  return (
    // Removed pb-40 so it doesn't create a massive gap at the bottom
    <section className="bg-[#050505] py-20 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto"> 
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h4 className="text-[10px]  font-black uppercase tracking-[0.5em] text-yellow-400 mb-6">
            Common Inquiries
          </h4>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
            Frequently Asked <br />
            <span className="text-neutral-800 italic font-light">Questions.</span>
          </h3>
        </div>
        
        {/* ACCORDION LIST */}
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-white/5 last:border-0"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group transition-all"
              >
                <span className={`text-sm md:text-base uppercase tracking-widest font-bold transition-all duration-300 ${openIndex === idx ? 'text-yellow-400 translate-x-2' : 'text-white/60 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'border-yellow-400 rotate-180' : 'border-white/10 group-hover:border-white/30'}`}>
                  {openIndex === idx ? <FiMinus className="text-yellow-400" /> : <FiPlus className="text-neutral-500" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-2">
                      <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FOOTNOTE - Adjusted margin for tighter fit */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-[10px] font-mono text-neutral-700 uppercase tracking-widest"
        >
          Still have questions? Reach out via the form above.
        </motion.p>

      </div>
    </section>
  );
};

export default ContactFaq;