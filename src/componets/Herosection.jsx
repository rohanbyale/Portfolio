import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

// ─── Trail Configuration ───────────────────────────────────────────────────
const TRAIL_IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuO8GGo3wIIaMg8nBjZR8KZ7ozkssk6g7Qg&s",
  "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZWkwcHK_g5_g3yZpEu9W-4bWwpX4wzzWBA&s",
  "https://miro.medium.com/1*wGdP-ym3kqQopOA9us8nXg.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SQhmZG4H_JkhQs0kpFx15aSPpCPecll3gg&s"
];

const TRAIL_MAX  = 12;   // max ghost cards alive at once
const MIN_DIST   = 55;   // px cursor must travel before spawning
const CARD_W     = 100;  // px width of each ghost card
const CARD_H     = 130;  // px height of each ghost card
const CARD_DECAY = 0.008; // base life lost per frame (~120 frames lifespan)

// ─── Canvas Card Class ─────────────────────────────────────────────────────
let _uid = 0;

class TrailCard {
  constructor(x, y, img, vx, vy) {
    this.id     = ++_uid;
    this.img    = img;
    this.rotate = (Math.random() - 0.5) * 28;
    // spring target position
    this.tx = x; this.ty = y;
    // spring current position
    this.sx = x; this.sy = y;
    this.vsx = 0; this.vsy = 0;
    // visual state
    this.scale   = 0;
    this.targetScale = 0.72 + Math.random() * 0.36;
    this.opacity = 0;
    this.life    = 1;
    this.decay   = CARD_DECAY + Math.random() * 0.006;
    // inherit cursor momentum (dampened)
    this.velX = vx * 0.04;
    this.velY = vy * 0.04 - 0.5; // slight upward pop
  }

  update() {
    // spring physics toward target
    const STIFF = 0.18, DAMP = 0.72;
    this.vsx += (this.tx - this.sx) * STIFF;
    this.vsy += (this.ty - this.sy) * STIFF;
    this.vsx *= DAMP;
    this.vsy *= DAMP;
    this.sx += this.vsx;
    this.sy += this.vsy;

    // drift target with micro-gravity
    this.tx  += this.velX;
    this.ty  += this.velY;
    this.velY += 0.012;    // gravity
    this.velX *= 0.97;     // air resistance

    // ease in scale + opacity
    this.scale   += (this.targetScale - this.scale)   * 0.14;
    this.opacity  = Math.min(1, this.opacity + 0.12);

    // countdown
    this.life -= this.decay;
  }

  get alpha() {
    if (this.life < 0.25) return this.life / 0.25; // fade out
    return this.opacity;
  }

  draw(ctx, freshness, loadedImages) {
    if (this.life <= 0) return;

    const img = loadedImages[this.img];
    const w = CARD_W, h = CARD_H;
    const x = -w / 2, y = -h / 2, r = 14;

    ctx.save();
    ctx.globalAlpha = this.alpha * (0.32 + freshness * 0.68);
    ctx.translate(this.sx, this.sy);
    ctx.rotate((this.rotate * Math.PI) / 180);
    ctx.scale(this.scale, this.scale);

    // ── Rounded rect path ──
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();

    // ── Card background ──
    ctx.fillStyle = "rgba(8,8,8,0.85)";
    ctx.fill();

    // ── Image (clipped) ──
    ctx.save();
    ctx.clip();
    if (img && img.complete && img.naturalWidth > 0) {
      const gs  = Math.round((1 - freshness) * 75);
      const br  = (0.5 + freshness * 0.5).toFixed(2);
      ctx.filter = `grayscale(${gs}%) brightness(${br})`;

      const iw = img.naturalWidth, ih = img.naturalHeight;
      const s  = Math.max(w / iw, h / ih);
      const dw = iw * s, dh = ih * s;
      ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
      ctx.filter = "none";
    }

    // ── Bottom vignette ──
    const vGrad = ctx.createLinearGradient(x, y + h * 0.45, x, y + h);
    vGrad.addColorStop(0, "rgba(0,0,0,0)");
    vGrad.addColorStop(1, "rgba(0,0,0,0.65)");
    ctx.fillStyle = vGrad;
    ctx.fillRect(x, y + h * 0.45, w, h * 0.55);

    ctx.restore();

    // ── Border ──
    const strokeA = (0.06 + freshness * 0.22).toFixed(3);
    ctx.strokeStyle = `rgba(255,255,255,${strokeA})`;
    ctx.lineWidth   = 1 / this.scale;
    ctx.stroke();

    // ── Yellow accent glow on newest cards ──
    if (freshness > 0.65) {
      const glow = ctx.createRadialGradient(0, -h * 0.1, 0, 0, 0, w * 0.7);
      glow.addColorStop(0, `rgba(250,204,21,${(freshness * 0.08).toFixed(3)})`);
      glow.addColorStop(1, "rgba(250,204,21,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(x, y, w, h);
    }

    ctx.restore();
  }
}

// ─── HeroSection ──────────────────────────────────────────────────────────
const HeroSection = () => {
  const cardRef    = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const isInView   = useInView(sectionRef, { once: true });

  // ── Tilt physics (original) ──
  const x            = useMotionValue(0);
  const y            = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX      = useTransform(mouseYSpring, [-15, 15], [15, -15]);
  const rotateY      = useTransform(mouseXSpring, [-15, 15], [-15, 15]);

  // ── Text reveal variants (original) ──
  const revealVariants = {
    hidden: { y: "110%" },
    visible: (i) => ({
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i },
    }),
  };

  // ── Card tilt handlers (original) ──
  const handleCardMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((( e.clientX - rect.left) / rect.width  - 0.5) *  30);
    y.set(((e.clientY - rect.top)  / rect.height - 0.5) * -30);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // ── Canvas trail effect ──
  useEffect(() => {
    const canvas  = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    // Pre-load images
    const loadedImages = {};
    TRAIL_IMAGES.forEach((src) => {
      const img      = new Image();
      img.crossOrigin = "anonymous";
      img.src        = src;
      loadedImages[src] = img;
    });

    // Resize canvas to section
    function resize() {
      const rect    = section.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    // Cursor state
    let mouseX = 0, mouseY = 0;
    let velX = 0, velY = 0;
    let lastSpawnX = 0, lastSpawnY = 0;
    let imgIdx = 0;
    const cards = [];

    function onMouseMove(e) {
      const rect = section.getBoundingClientRect();
      const nx   = e.clientX - rect.left;
      const ny   = e.clientY - rect.top;
      velX = nx - mouseX;
      velY = ny - mouseY;
      mouseX = nx;
      mouseY = ny;

      // Also drive card tilt
      handleCardMouseMove(e);

      // Spawn if cursor moved enough
      const dist = Math.hypot(mouseX - lastSpawnX, mouseY - lastSpawnY);
      if (dist > MIN_DIST) {
        lastSpawnX = mouseX;
        lastSpawnY = mouseY;
        const src = TRAIL_IMAGES[imgIdx++ % TRAIL_IMAGES.length];
        cards.push(new TrailCard(mouseX, mouseY, src, velX, velY));
        if (cards.length > TRAIL_MAX) cards.splice(0, cards.length - TRAIL_MAX);
      }
    }

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    // rAF loop
    let rafId;
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw alive cards
      const alive = cards.filter((c) => c.life > 0);
      alive.forEach((c, i) => {
        c.update();
        const freshness = alive.length > 1 ? i / (alive.length - 1) : 1;
        c.draw(ctx, freshness, loadedImages);
      });

      // Purge dead cards from the front
      while (cards.length && cards[0].life <= 0) cards.shift();

      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleCardMouseMove, handleMouseLeave]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden px-6 lg:px-24 py-20"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#facc1505,transparent_70%)]" />
      </div>

      {/* ── Canvas trail layer — sits above bg, below content ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      />

      {/* ── Original content — zero modifications ── */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[30px] font-mono uppercase tracking-[0.1em] text-yellow-500">
              Rohan Byale
            </span>
          </div>

          <h1 className="text-7xl md:text-[100px] font-black tracking-[-0.04em] text-white leading-[0.85] mb-10 uppercase">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1}
              >
                Human
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="text-transparent italic font-light px-2 block"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
              >
                Centric
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3}
              >
                Logic
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed mb-12 font-medium"
          >
            Bridging the gap between{" "}
            <span className="text-white">complex engineering</span> and{" "}
            <span className="text-yellow-400">minimalist aesthetics</span>.
          </motion.p>

          <div className="flex flex-wrap items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Link
                to="/contactpage"
                onClick={() => window.scrollTo(0, 0)}
                className="relative z-10 bg-white text-black px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-widest flex items-center gap-3 overflow-hidden transition-all shadow-2xl shadow-yellow-400/10 cursor-pointer no-underline"
              >
                <span className="relative z-20 flex items-center gap-2">
                  Launch Projects{" "}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </Link>
            </motion.div>

            <motion.a
              href="/Resumee.pdf"
              download
              whileHover={{ x: 5, color: "#facc15" }}
              className="flex items-center gap-3 text-neutral-400 text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer"
            >
              <FiDownload size={18} /> Get Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT - TILT IMAGE PANEL */}
        <div className="relative flex justify-center lg:justify-end perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[320px] md:w-[420px] aspect-[4/5] group cursor-pointer"
          >
            <div className="absolute inset-10 bg-yellow-400/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl">
              <motion.img
                src="/rohan.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            <motion.div
              style={{ transform: "translateZ(80px)" }}
              className="absolute -top-10 -left-10 bg-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl hidden md:block"
            >
              <p className="text-yellow-400 font-mono text-[9px] uppercase tracking-widest">Hello</p>
              <p className="text-white text-[11px] font-bold italic tracking-wide">Welcome to my space</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom left label */}
      <div className="absolute bottom-10 left-6 lg:left-24 flex items-center gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="w-10 h-[1px] bg-white/20" />
          <div className="w-6 h-[1px] bg-yellow-400" />
        </div>
        <span className="text-white/20 text-[9px] font-mono uppercase tracking-[0.5em]">Based in India</span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
