import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheck, FiLoader, FiArrowRight } from 'react-icons/fi';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', mobile: '', location: '', email: '', subject: '', message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', mobile: '', location: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Modern Input Design
  const inputClass = "w-full bg-white/[0.02] border-b border-white/10 px-4 py-5 text-white focus:outline-none focus:border-yellow-400 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-neutral-700 text-sm font-light rounded-t-lg";
  const labelClass = "text-[9px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-3 block ml-1";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact-form" className="bg-[#050505] py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-yellow-400/5 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* LEFT: INFO CONTENT (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-400 mb-8 flex items-center gap-3">
                <span className="w-8 h-px " /><h1 className="
  border 
  rounded-md
  px-4 py-2 
  text-center 
  w-fit 
  sm:w-auto 
  md:w-[11vw]

">
get in touch
</h1>

              </motion.h2>
              <motion.h3 variants={itemVariants} className="text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9] mb-8">
                Let's Talk <br /> <span className="text-gray-500 italic font-light">Strategy.</span>
              </motion.h3>
              <motion.p variants={itemVariants} className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-10">
                Ready to elevate your digital presence? I specialize in turning complex ideas into intuitive visual experiences.
              </motion.p>
              
              <motion.div variants={itemVariants} className="hidden lg:block">
                <div className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Estimated response time</div>
                <div className="text-white font-bold mt-2">{'< 24 Hours'}</div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: THE FORM */}
          <motion.div 
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                
                {[
                  { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
                  { label: "Mobile Number", name: "mobile", type: "tel", placeholder: "+1 234 567 890" },
                  { label: "Location", name: "location", type: "text", placeholder: "New York, USA" }
                ].map((field) => (
                  <motion.div key={field.name} variants={itemVariants} className="group">
                    <label className={labelClass}>{field.label}</label>
                    <input 
                      required
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      type={field.type} 
                      placeholder={field.placeholder} 
                      className={inputClass} 
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="group">
                <label className={labelClass}>Subject</label>
                <input 
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  placeholder="UI/UX Design Project" 
                  className={inputClass} 
                />
              </motion.div>

              <motion.div variants={itemVariants} className="group">
                <label className={labelClass}>Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Tell me about your project goals..." 
                  className={`${inputClass} resize-none`} 
                />
              </motion.div>

              {/* SUBMIT BUTTON */}
              <motion.div variants={itemVariants} className="pt-6">
                <button 
                  disabled={formState !== 'idle'}
                  className={`
                    relative group flex items-center justify-between px-12 py-7 rounded-2xl overflow-hidden transition-all duration-500 w-full md:w-auto min-w-[280px]
                    ${formState === 'success' ? 'bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]' : 'bg-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]'}
                    ${formState === 'sending' ? 'cursor-wait' : ''}
                  `}
                >
                  <span className="relative z-10 text-black text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-4">
                    <AnimatePresence mode="wait">
                      {formState === 'idle' && (
                        <motion.span key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-4">
                          Submit <FiArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                        </motion.span>
                      )}
                      {formState === 'sending' && (
                        <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                          Transmitting... <FiLoader className="animate-spin" size={16} />
                        </motion.span>
                      )}
                      {formState === 'success' && (
                        <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4">
                          Received Successfully <FiCheck size={18} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  
                  {/* Subtle Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
