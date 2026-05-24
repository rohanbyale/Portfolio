"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understanding the problem, audience, and business goals before touching pixels or code.",
    tags: ["Research", "Strategy", "Context"],
  },
  {
    step: "02",
    title: "Design",
    desc: "Crafting clean interfaces, strong systems, and experiences that feel effortless.",
    tags: ["Systems", "Prototyping"],
  },
  {
    step: "03",
    title: "Develop",
    desc: "Building fast, scalable, maintainable products using modern frameworks.",
    tags: ["Frontend", "Performance", "Logic"],
  },
  {
    step: "04",
    title: "Refine",
    desc: "Polishing performance, motion, accessibility, and final delivery.",
    tags: ["QA", "Animation", "Deployment"],
  },
];

const ProcessSection = () => {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current.filter(Boolean);
      const totalCards = cardElements.length;

      if (totalCards === 0) return;

      let mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          let { isMobile } = context.conditions;

          // 1. INITIAL POSITIONING (Optimized with GPU hardware acceleration hints)
          cardElements.forEach((card, index) => {
            if (index === 0) {
              gsap.set(card, { 
                y: "0%", 
                scale: 1, 
                rotation: 0, 
                zIndex: 1,
                force3D: true // Enforces independent composite layer on mobile GPU
              });
            } else {
              gsap.set(card, { 
                y: isMobile ? "140%" : "100%", 
                scale: 1, 
                rotation: 0, 
                zIndex: index + 1,
                force3D: true // Enforces independent composite layer on mobile GPU
              });
            }
          });

          // 2. TIMELINE CONFIGURATION
          const scrollTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: container.current.querySelector(".sticky-cards"),
              start: "top top",
              end: `+=${window.innerHeight * (totalCards - 1) * (isMobile ? 0.95 : 0.7)}`,
              pin: true,
              // Fixed mobile layout lag by softening the scrub slightly on mobile to damp finger touch spikes
              scrub: isMobile ? 0.6 : 0.3, 
              pinSpacing: true,
              invalidateOnRefresh: true,
              anticipatePin: 1 // Prevents jerky snapping right when the container locks on mobile
            },
          });

          // 3. CARD STACKING LOOP
          for (let i = 0; i < totalCards - 1; i++) {
            const currentCard = cardElements[i];
            const nextCard = cardElements[i + 1];
            const position = i;

            scrollTimeline.to(
              currentCard,
              {
                y: "0%", 
                scale: 0.92,
                rotation: 2.5,
                duration: 1,
                ease: "power1.inOut",
                force3D: true, // Prevents subpixel text blur redraws mid-flight
                lazy: true // Batch DOM operations to avoid layout thrashing
              },
              position
            );

            scrollTimeline.to(
              nextCard,
              {
                y: "0%",
                duration: 1,
                ease: "power1.out",
                force3D: true, // Prevents subpixel text blur redraws mid-flight
                lazy: true // Batch DOM operations to avoid layout thrashing
              },
              position
            );
          }
        },
        container
      );

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        mm.revert();
      };
    },
    { scope: container }
  );

  return (
    <div className="relative w-full bg-[#050505] text-white overflow-x-hidden" ref={container}>
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      {/* STICKY WORKSPACE */}
      <div className="sticky-cards relative h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-24">
        
        {/* UPPER LEFT HEADLINE AREA */}
        <div className="w-full max-w-7xl mx-auto text-left mb-6 md:mb-14 z-10 px-2">
          <div className="flex items-center justify-start gap-4 mb-2 md:mb-4">
            <p className="text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-md text-[10px] font-black tracking-[0.5em] uppercase bg-yellow-400/5">
              Workflow 
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none uppercase mb-2 md:mb-4">
            The <span className="text-gray-500 italic font-light">Method.</span>
          </h2>
          <p className="text-neutral-500 text-[10px] sm:text-xs uppercase tracking-widest font-mono">
            [ structured — execution ]
          </p>
        </div>

        {/* DOWNSIDE CARDS BLOCK */}
        <div className="relative w-[90vw] md:w-[82vw] max-w-7xl mx-auto h-[65vh] sm:h-[500px] md:h-[480px] z-20">
          {steps.map((itemData, i) => (
            <div
              key={itemData.step}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute inset-0 h-full w-full bg-yellow-400 text-black border border-black/10 rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col justify-between overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.4)] select-none touch-action-pan-y will-change-transform"
            >
              {/* Massive Industrial Number Stamp */}
              <span className="absolute bottom-2 right-2 md:-top-16 md:-right-10 text-7xl sm:text-[14rem] md:text-[26rem] font-black text-black/[0.04] select-none pointer-events-none font-sans leading-none">
                {itemData.step}
              </span>

              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] md:text-sm font-mono text-black/60 tracking-widest block mb-1 md:mb-3 font-bold">
                    PHASE {itemData.step}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 md:mb-4 uppercase tracking-tighter text-black">
                    {itemData.title}
                  </h3>
                  <p className="text-black/90 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-snug sm:leading-relaxed max-w-2xl">
                    {itemData.desc}
                  </p>
                </div>

                {/* Industrial Dark Badges */}
                <div className="flex flex-wrap gap-1.5 md:gap-2.5 mt-4">
                  {itemData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 md:px-4 md:py-1.5 border border-black/10 rounded-full text-[8px] md:text-[10px] uppercase tracking-widest text-black/70 bg-black/5 font-mono font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProcessSection;
