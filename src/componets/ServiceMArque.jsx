import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const CompactMarquee = ({ children, baseVelocity = 100, isPaused }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-5, -25, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    if (isPaused) return; // Stop animation on hover for better UX

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex whitespace-nowrap overflow-hidden py-5 items-center">
      <motion.div style={{ x }} className="flex whitespace-nowrap gap-12 items-center">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 font-medium uppercase tracking-[0.2em] text-[11px]">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServicesMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  // List of professional services
  const items = [
    "Web Design",
    "Frontend Development",
    "UI/UX Strategy",
    "Backend Systems",
    "Mobile Solutions",
    "Digital Branding",
  ];

  return (
    <div className="w-full bg-[#050505] py-6 px-4">
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-7xl mx-auto overflow-hidden border-y border-white/10 hover:border-yellow-400/50 transition-colors duration-500 cursor-default"
      >
        <CompactMarquee baseVelocity={-0.8} isPaused={isHovered}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white hover:text-yellow-400 transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </React.Fragment>
          ))}
        </CompactMarquee>
      </div>
    </div>
  );
};

export default ServicesMarquee;