import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

// 1. DATA CONFIGURATION
const projects = [
  {
    title: "Mamoth Murals",
    category: "Personal Website",
    image: "https://assets.awwwards.com/awards/submissions/2025/09/68b7aa90dbac3889881012.jpg",
    stack: ["React.js", "Tailwind"],
    liveLink: "https://mammothmurals-agency.netlify.app/",
    githubLink: "https://github.com/rohanbyale/Mammoth-Murals",
  },
  {
    title: "Dog Studio",
    category: "Portfolio",
    image: "/ochi.png",
    stack: ["React.js", "Three Js", "GLSL"],
    liveLink: "https://ochi-de-sign.netlify.app/",
    githubLink: "https://github.com/rohanbyale/Ochi-Design",
  },
  {
    title: "Lazarev",
    category: "Personal Site",
    image: "/lazarev.png",
    stack: ["Html", "JS", "Gsap"],
    liveLink: "https://portfoli0-lazrev.netlify.app/",
    // githubLink: "https://github.com",
  },
  {
    title: "The Garrison Times",
    category: "Blog",
    image: "/peaky.png",
    stack: ["Html", "JS", "Gsap"],
    liveLink: "https://the-garrison-times.netlify.app/",
    githubLink: "https://github.com/rohanbyale/The-Garrison-Times",
  },
  {
    title: "Works Studio",
    category: "Blog",
    image: "/worksstudio.png",
    stack: ["Html", "JS", "Gsap"],
    liveLink: "https://works-studioro.netlify.app/",
    githubLink: "https://github.com/rohanbyale/Works-Studio?tab=readme-ov-file",
  },
  {
    title: "Task Management",
    category: "FullStack",
    image: "https://cdn.dribbble.com/userupload/42675164/file/original-cbd633c1b343179c6494dc643abf6cda.png?format=webp&resize=400x300&vertical=center",
    stack: ["React.js", "Tailwind", ],
    // liveLink: "https://the-garrison-times.netlify.app/",
    githubLink: "https://github.com/rohanbyale/Task_Management",
  },
];

// 2. PROJECT CARD COMPONENT
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group flex flex-col w-full relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 shadow-2xl">
        <motion.img
          whileHover={{ scale: 1.08, rotate: -1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
        />
        
        <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full text-[9px] font-mono text-white/40 tracking-widest uppercase">
          Project // 0{index + 1}
        </div>
      </div>

      {/* Content Container */}
      <div className="mt-6 space-y-4 px-1">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <motion.p 
              className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-400"
            >
              {project.category}
            </motion.p>
            <h3 className="text-3xl font-bold tracking-tighter text-white">
              {project.title}
            </h3>
          </div>
          
          <div className="flex gap-3 pb-1">
            <a 
              href={project.githubLink} 
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href={project.liveLink} 
              className="p-2.5 rounded-xl bg-yellow-400 text-black hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4 py-1">
          {project.stack.map((tech) => (
            <div key={tech} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Agency Underline Animation */}
        <div className="relative h-[2px] w-full bg-white/5 mt-4">
          <div className="absolute inset-0 w-full h-full bg-white/[0.03]" />
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"
          />
          <motion.div 
            initial={{ left: "0%" }}
            whileInView={{ left: "100%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 shadow-[0_0_10px_#facc15] rounded-full z-10"
          />
          <motion.div 
            className="absolute -bottom-[1px] left-0 h-[2px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </motion.div>
  );
};

// 3. MAIN SECTION COMPONENT
const ProjectsSection = () => {
  return (
    <section className="bg-[#050505] py-32 px-6 lg:px-24 relative overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* <span className="w-16 h-[1px] bg-yellow-400" /> */}
              <span className="text-xs font-black uppercase tracking-[0.6em] border p-2 rounded-2xl  text-yellow-400">Selected Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              Featured <br />
              <span className="text-neutral-700 italic font-light">Creations.</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
             <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-2">Architecting the future</p>
             <div className="h-10 w-[1px] bg-yellow-400 ml-auto" />
          </div>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center justify-center space-y-8"
        >
          <div className="w-px h-24 bg-gradient-to-b from-yellow-400 to-transparent opacity-30" />

          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold rounded-full border border-white/10 transition-all duration-500 hover:border-yellow-400/50"
          >
            {/* Liquid Fill Effect */}
            <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-[0.76,0,0.24,1] translate-y-full bg-yellow-400 group-hover:translate-y-0"></span>
            
            <span className="relative flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors duration-500">
           <a href="https://github.com/rohanbyale">Explore More on GitHub</a>   
              <FiGithub className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              <FiArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </a>

          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.4em] font-black italic">
            Built with Passion & Precision
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
