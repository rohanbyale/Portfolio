import React from "react";
import { motion } from "framer-motion";

const techItems = [
  { name: "Next.js", img: "https://skillicons.dev/icons?i=nextjs" },
  { name: "React", img: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
  { name: "TypeScript", img: "https://skillicons.dev/icons?i=ts" },
  { name: "Framer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq5gse3kEA76gI2S7FHh4TGq6-jE3nGlPQg&s" },
  { name: "NodeJS", img: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Docker", img: "https://skillicons.dev/icons?i=docker" },
  { name: "PostgreSQL", img: "https://skillicons.dev/icons?i=postgres" },
  { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Java", img: "https://skillicons.dev/icons?i=java" },
];

const AgencyMarquee = () => {
  // We duplicate the list to ensure the loop is perfectly seamless
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="w-full bg-[#050505] py-12 flex items-center overflow-hidden">
      <div className="relative w-full">
        {/* Left & Right Fades for a "Luxury" look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }} // Adjust number based on total width of one set
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 mx-10 group cursor-default"
            >
              {/* Image Container */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain  transition-all duration-500 ease-out"
                />
              </div>
              
              {/* Text Label */}
              <span className="text-xl font-bold tracking-tighter text-neutral-800 group-hover:text-white transition-colors duration-500 uppercase">
                {item.name}
              </span>
              
              {/* Separator Dot */}
              <span className="ml-10 w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-yellow-400 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AgencyMarquee;
