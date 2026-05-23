import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

// ─── Trail Configuration ───────────────────────────────────────────────────
const TRAIL_IMAGES = [
  "https://www.ahmedabdat.com/icons/Framer-Motion.png",
  "https://raw.githubusercontent.com/nuxt/modules/674149075378ae7d27f3df6d906eff088539a845/icons/nuxt3-lenis.svg",
  "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
  "https://avatars.githubusercontent.com/u/1923096?s=200&v=4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
  "https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png",
  "https://www.ahmedabdat.com/icons/Framer-Motion.png",
  "https://raw.githubusercontent.com/nuxt/modules/674149075378ae7d27f3df6d906eff088539a845/icons/nuxt3-lenis.svg",
  "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
  "https://avatars.githubusercontent.com/u/1923096?s=200&v=4",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
  "https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png",
 
];

const TRAIL_MAX  = 12;
const MIN_DIST   = 55;
const CARD_W     = 150;
const CARD_H     = 160;
const CARD_DECAY = 0.008;

// ─── Canvas Card Class ─────────────────────────────────────────────────────
let _uid = 0;

class TrailCard {
  constructor(x, y, img, vx, vy) {
    this.id     = ++_uid;
    this.img    = img;
    this.rotate = (Math.random() - 0.5) * 28;
    this.tx = x; this.ty = y;
    this.sx = x; this.sy = y;
    this.vsx = 0; this.vsy = 0;
    this.scale   = 0;
    this.targetScale = 0.72 + Math.random() * 0.36;
    this.opacity = 0;
    this.life    = 1;
    this.decay   = CARD_DECAY + Math.random() * 0.006;
    this.velX = vx * 0.04;
    this.velY = vy * 0.04 - 0.5;
  }

  update() {
    const STIFF = 0.18, DAMP = 0.72;
    this.vsx += (this.tx - this.sx) * STIFF;
    this.vsy += (this.ty - this.sy) * STIFF;
    this.vsx *= DAMP;
    this.vsy *= DAMP;
    this.sx += this.vsx;
    this.sy += this.vsy;

    this.tx  += this.velX;
    this.ty  += this.velY;
    this.velY += 0.012;
    this.velX *= 0.97;

    this.scale   += (this.targetScale - this.scale)   * 0.14;
    this.opacity  = Math.min(1, this.opacity + 0.12);

    this.life -= this.decay;
  }

  get alpha() {
    if (this.life < 0.25) return this.life / 0.25;
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

    ctx.fillStyle = "rgba(8,8,8,0.85)";
    ctx.fill();

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

    const vGrad = ctx.createLinearGradient(x, y + h * 0.45, x, y + h);
    vGrad.addColorStop(0, "rgba(0,0,0,0)");
    vGrad.addColorStop(1, "rgba(0,0,0,0.65)");
    ctx.fillStyle = vGrad;
    ctx.fillRect(x, y + h * 0.45, w, h * 0.55);

    ctx.restore();

    const strokeA = (0.06 + freshness * 0.22).toFixed(3);
    ctx.strokeStyle = `rgba(255,255,255,${strokeA})`;
    ctx.lineWidth   = 1 / this.scale;
    ctx.stroke();

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

// ─── PerspectiveSection ───────────────────────────────────────────────────
export default function PerspectiveSection() {
  const container = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // ── Canvas trail effect ──
  useEffect(() => {
    const canvas  = canvasRef.current;
    const section = container.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");

    const loadedImages = {};
    TRAIL_IMAGES.forEach((src) => {
      const img       = new Image();
      img.crossOrigin = "anonymous";
      img.src         = src;
      loadedImages[src] = img;
    });

    function resize() {
      const rect    = section.getBoundingClientRect();
      canvas.width  = rect.width;
      canvas.height = rect.height;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

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

    let rafId;
    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const alive = cards.filter((c) => c.life > 0);
      alive.forEach((c, i) => {
        c.update();
        const freshness = alive.length > 1 ? i / (alive.length - 1) : 1;
        c.draw(ctx, freshness, loadedImages);
      });

      while (cards.length && cards[0].life <= 0) cards.shift();

      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      section.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      ref={container}
      className="bg-[#050505] relative h-[80vh] flex items-center justify-center [perspective:1500px] overflow-hidden"
    >
      {/* ── Canvas trail layer ── */}
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

      <motion.div
        style={{ rotateX, scale, opacity }}
        className="max-w-5xl px-6 text-center z-10"
      >
        <h2 className="text-[10px] font-black tracking-[0.8em] text-[#FFEF4D] uppercase mb-8">
          The Philosophy
        </h2>
        <p className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          Static code is dead. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
            Motion is the new
          </span> <br />
          Standard.
        </p>

        <div className="mt-16 flex justify-center gap-10 md:gap-20 opacity-30">
          {['Innovation', 'Precision', 'Elegance'].map((text) => (
            <span key={text} className="text-[10px] font-black uppercase tracking-[0.3em]">{text}</span>
          ))}
        </div>
      </motion.div>

      {/* Background Grid Decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </section>
  );
}
