import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiDocker,
  SiMongodb,
  SiMysql,

} from "react-icons/si";

const stack = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
     
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "GSAP", icon: SiGreensock },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL / MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } },
};

const TechStack = () => {
  return (
    <section className="relative bg-[#050505] text-white py-32 px-6 lg:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-yellow-400/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            {/* <span className="w-10 h-[1px] bg-yellow-400" /> */}
            <p className="border p-2 rounded-2xl text-yellow-400 text-[10px] font-bold tracking-[0.4em] uppercase">
              Tech Stack
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]"
          >
            Technologies I use
            <br />
            <span className="italic font-light text-gray-500">
              to build digital products
            </span>
          </motion.h2>
        </div>

        {/* Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {stack.map((group, i) => (
            <motion.div
              key={i}
              variants={card}
              className="relative rounded-2xl p-10 bg-white/[0.02] border border-white/10 hover:border-yellow-400/30 transition-all duration-500"
            >
              <h3 className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-10">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {group.items.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group flex items-center gap-4 rounded-xl px-4 py-3 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 transition-all duration-300"
                    >
                      <Icon className="text-xl text-white/70 group-hover:text-black transition-colors" />
                      <span className="text-sm font-medium text-white/80 group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
