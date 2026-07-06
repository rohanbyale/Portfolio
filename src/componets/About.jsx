import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added Link import

/* ------------------ Animation ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

/* ------------------ Circular Rotating Text ------------------ */
const CircularRole = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <path
          id="circle"
          d="
            M 100, 100
            m -70, 0
            a 70,70 0 1,1 140,0
            a 70,70 0 1,1 -140,0
          "
        />
      </defs>

      <text
        fill="#FDC700"
        fontSize="9"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#circle" className="">
          WEB DEVELOPER • WEB DEVLOPER • WEB DEVLOPER
        </textPath>
      </text>
    </motion.svg>
  );
};

/* ------------------ Main Component ------------------ */
const About = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white px-6 lg:px-24 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <p className="border p-2 rounded-md uppercase tracking-[0.4em] text-xs font-bold text-yellow-400">
              About Me
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="uppercase text-5xl lg:text-5xl font-medium tracking-tight leading-[0.9] max-w-5xl"
          >
            Building digital <br />
            <span className="italic font-light text-gray-500">
              experiences
            </span>{" "}
            with purpose.
          </motion.h1>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <img
                src="/file_0000000052007207b5070cc311dd0e50.png"
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* DEV IDENTITY BADGE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-44 h-44"
            >
              {/* Rotating Role */}
              <CircularRole />

              {/* Center Name */}
              <div className="absolute inset-0 m-auto w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-black font-black tracking-tight text-sm text-center leading-tight">
                 <img className="w-full h-full object-cover " src="/rohanlogo.png" alt="" />
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 pt-8">
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl text-gray-200 leading-snug font-light"
            >
              A multidisciplinary{" "}
              <span className="text-white font-medium underline underline-offset-8 decoration-yellow-400/30">
                Web Developer & Designer
              </span>{" "}
              crafting interfaces that feel intuitive, intentional, and human.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 text-lg text-gray-500 italic font-light leading-relaxed"
            >
              I design and build modern digital products with a strong focus on
              usability, performance, and clean aesthetics — helping brands turn
              ideas into meaningful experiences.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20 border-t border-white/10 pt-12">
              {[
                { label: "Execution", val: "20+" },
                { label: "Standard", val: "Quality" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx + 3}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="group cursor-default"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3 group-hover:text-yellow-400 transition-colors duration-300 font-bold">
                    {stat.label}
                  </p>
                  <h4 className="text-4xl md:text-5xl font-black tracking-tighter flex items-center gap-1">
                    {stat.val}
                    {stat.val.includes('+') && (
                      <span className="text-yellow-400 text-2xl font-light">+</span>
                    )}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16"
            >
              {/* REPLACED BUTTON WITH LINK TO FIX NAVIGATION AND SCROLL */}
              <Link 
                to="/contactpage"
                onClick={() => window.scrollTo(0, 0)}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 overflow-hidden hover:border-yellow-400 transition no-underline text-white hover:text-black"
              >
                <span className="relative z-10 font-medium transition">
                   Let’s Work Together →
                </span>
                <div className="absolute inset-0 bg-yellow-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
