import { useEffect, useRef, useState } from "react";

// Swap these with your own FRONT (casual) and BACK (helmet + jacket) images.
const FRONT_URL =
  "./Confident Young Man in Black Suit.png";
const BACK_URL =
  "./Black and Red Motorcycle Rider Cutout (2).png";
const GHOST_TEXT = "Beyond The Code";
const SOLID_TEXT = "Built To Create";
const REPEAT = [0, 1, 2, 3];
const GUTTER = "clamp(16px,2.4vw,32px)";

export default function IronRiderHero() {
  const heroRef = useRef(null);
  const figureRef = useRef(null);
  const frontRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [coarse, setCoarse] = useState(false);

  // Reveal engine: autoplays on its own, hover/touch smoothly takes over
  useEffect(() => {
    const hero = heroRef.current;
    const figure = figureRef.current;
    const front = frontRef.current;
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const ctx = canvas.getContext("2d");

    const mask = document.createElement("canvas");
    const mctx = mask.getContext("2d");
    const buf = document.createElement("canvas");
    const bctx = buf.getContext("2d");

    // Pre-rendered soft brush (feathered edge = smooth blending, and cheap to draw)
    const brush = document.createElement("canvas");
    brush.width = brush.height = 128;
    const bg = brush.getContext("2d");
    const grad = bg.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(0,0,0,1)");
    grad.addColorStop(0.45, "rgba(0,0,0,0.95)");
    grad.addColorStop(0.75, "rgba(0,0,0,0.45)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    bg.fillStyle = grad;
    bg.fillRect(0, 0, 128, 128);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchMQ = window.matchMedia("(hover: none), (pointer: coarse)");
    let isCoarse = touchMQ.matches;
    setCoarse(isCoarse);
    const onTouchMQ = () => {
      isCoarse = touchMQ.matches;
      setCoarse(isCoarse);
    };
    touchMQ.addEventListener("change", onTouchMQ);

    let backReady = false;
    let frontReady = false;
    const back = new Image();
    back.onload = () => (backReady = true);
    back.src = BACK_URL;

    const markFront = () => {
      frontReady = true;
      setReady(true);
    };
    if (front.complete && front.naturalWidth) markFront();
    else front.addEventListener("load", markFront);

    let W = 0,
      H = 0,
      dpr = 1;
    const resize = () => {
      const r = figure.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width;
      H = r.height;
      const pw = Math.round(W * dpr);
      const ph = Math.round(H * dpr);
      canvas.width = mask.width = buf.width = pw;
      canvas.height = mask.height = buf.height = ph;
    };
    resize();
    window.addEventListener("load", resize);
    window.addEventListener("resize", resize);

    // ---- tuning ----
    const LIFE = 1300; // ms a stamp lives
    const IDLE = 1600; // ms of no input before autoplay takes back over
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const smooth = (t) => t * t * (3 - 2 * t);

    let stamps = [];
    let pointer = null; // latest real pointer (figure-local)
    let lastMove = -1e9;
    let pos = null; // smoothed "brush" position
    let stampPos = null; // where we last laid a stamp along the path
    let lastStampT = 0;
    let autoT = 0;
    let lastNow = 0;
    let raf = 0;

    const brushSize = () => Math.max(W, 260) * (isCoarse ? 0.16 : 0.13);

    const addStamp = (x, y, now) => {
      const base = brushSize();
      const lobes = [];
      const n = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = Math.random() * base * 0.35;
        lobes.push({
          dx: Math.cos(a) * d,
          dy: Math.sin(a) * d,
          r: base * (0.7 + Math.random() * 0.5),
        });
      }
      stamps.push({ x, y, t: now, lobes });
      lastStampT = now;
    };

    // Smooth looping path used when nobody is interacting
    const autoPath = (t) => ({
      x: W * (0.5 + 0.27 * Math.sin(t * 0.9) + 0.05 * Math.sin(t * 2.1 + 0.6)),
      y: H * (0.42 + 0.22 * Math.sin(t * 0.65 + 1.2) + 0.05 * Math.sin(t * 1.7)),
    });

    const toLocal = (e) => {
      const r = figure.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e) => {
      pointer = toLocal(e);
      lastMove = performance.now();
      cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      cursor.style.opacity = "1";
    };
    const onDown = (e) => {
      pointer = toLocal(e);
      lastMove = performance.now();
    };
    const onLeave = () => {
      pointer = null;
      cursor.style.opacity = "0";
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerdown", onDown);
    hero.addEventListener("pointerleave", onLeave);

    const drawCover = (c, img) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;
      const s = Math.max(cw / iw, ch / ih);
      const dw = iw * s;
      const dh = ih * s;
      c.drawImage(img, (cw - dw) / 2, ch - dh, dw, dh);
    };

    const frame = (now) => {
      const dt = lastNow ? Math.min((now - lastNow) / 1000, 0.05) : 0.016;
      lastNow = now;
      autoT += dt * (reduce ? 0.5 : 1);

      // Pick target: real pointer if recently active, otherwise autoplay path
      const userActive = pointer && now - lastMove < IDLE;
      const target = userActive ? pointer : autoPath(autoT);

      if (!pos) {
        pos = { x: target.x, y: target.y };
        stampPos = { x: pos.x, y: pos.y };
      }
      // Frame-rate independent easing: snappy on hover, gentle when autoplaying
      const k = 1 - Math.exp(-dt * (userActive ? 16 : 5));
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;

      // Lay stamps evenly along the travelled path (no gaps, no clumps)
      const step = brushSize() * 0.28;
      let guard = 0;
      let dx = pos.x - stampPos.x;
      let dy = pos.y - stampPos.y;
      let dist = Math.hypot(dx, dy);
      while (dist >= step && guard++ < 40) {
        stampPos.x += (dx / dist) * step;
        stampPos.y += (dy / dist) * step;
        addStamp(stampPos.x, stampPos.y, now);
        dx = pos.x - stampPos.x;
        dy = pos.y - stampPos.y;
        dist = Math.hypot(dx, dy);
      }
      // Hold the reveal while the brush is nearly still
      if (now - lastStampT > 80) addStamp(pos.x, pos.y, now);

      stamps = stamps.filter((s) => now - s.t < LIFE);

      // Build soft mask
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mctx.globalCompositeOperation = "source-over";
      mctx.globalAlpha = 1;
      mctx.clearRect(0, 0, W, H);
      for (let i = 0; i < stamps.length; i++) {
        const s = stamps[i];
        const age = (now - s.t) / LIFE;
        const grow = easeOut(Math.min(1, age / 0.18));
        const fade = 1 - smooth(Math.min(1, Math.max(0, (age - 0.2) / 0.8)));
        mctx.globalAlpha = fade;
        const scale = grow * (0.4 + 0.6 * fade);
        for (let j = 0; j < s.lobes.length; j++) {
          const l = s.lobes[j];
          const r = l.r * scale;
          if (r < 0.5) continue;
          mctx.drawImage(
            brush,
            s.x + l.dx * scale - r,
            s.y + l.dy * scale - r,
            r * 2,
            r * 2
          );
        }
      }
      mctx.globalAlpha = 1;

      // Compose: front with holes punched, back clipped to the same mask
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (frontReady) drawCover(ctx, front);

      if (stamps.length) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.drawImage(mask, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        if (backReady) {
          bctx.setTransform(1, 0, 0, 1, 0, 0);
          bctx.globalCompositeOperation = "source-over";
          bctx.clearRect(0, 0, buf.width, buf.height);
          bctx.drawImage(mask, 0, 0);
          bctx.globalCompositeOperation = "source-in";
          drawCover(bctx, back);
          ctx.drawImage(buf, 0, 0);
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      front.removeEventListener("load", markFront);
      touchMQ.removeEventListener("change", onTouchMQ);
      window.removeEventListener("load", resize);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerdown", onDown);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const marqueeText =
    "text-[clamp(54px,9.6vw,168px)] leading-none tracking-[-0.035em] uppercase pr-[0.3em]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000] font-['Inter_Tight',system-ui,-apple-system,'Segoe_UI',sans-serif] text-[#121417] antialiased">
      {/* Keyframes for the marquee rows (Tailwind has no built-in for these) */}
      <style>{`
        @keyframes slideL{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes slideR{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        @media (prefers-reduced-motion:reduce){.marquee-row{animation-duration:120s !important}}
      `}</style>

      {/* Nav */}
   

      {/* Hero */}
      <section
        ref={heroRef}
        aria-label="Hover to reveal the iron rider"
       // className="relative h-[100svh] min-h-[560px] touch-pan-y cursor-none overflow-hidden bg-[radial-gradient(60%_55%_at_50%_45%,#f6f8f9_0%,rgba(246,248,249,0)_70%),linear-gradient(180deg,#e8ecef_0%,#d9dfe4_100%)] max-[720px]:cursor-auto"
        className="relative h-[100svh] min-h-[560px] touch-pan-y cursor-none overflow-hidden bg-[#050505] max-[720px]:cursor-auto"
      >
        {/* Marquees */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-[1] flex -translate-y-[58%] select-none flex-col gap-[clamp(4px,1.2vw,18px)] max-[720px]:-translate-y-[62%]"
        >
          <div
            className="marquee-row flex w-max whitespace-nowrap will-change-transform"
            style={{ animation: "slideL 38s linear infinite" }}
          >
            {REPEAT.map((i) => (
              <span key={i} className={`${marqueeText} font-normal text-[#FDC700]`}>
                {GHOST_TEXT}
              </span>
            ))}
          </div>
          <div
            className="marquee-row flex w-max whitespace-nowrap will-change-transform"
            style={{ animation: "slideR 32s linear infinite" }}
          >
            {REPEAT.map((i) => (
              <span key={i} className={`${marqueeText} font-medium text-[#ffffff]`}>
                {SOLID_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* Figure */}
        <div
          ref={figureRef}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] aspect-[3/4] h-[min(80svh,133vw)] -translate-x-1/2 max-[720px]:h-auto max-[720px]:w-[min(120vw,50svh)]"
        >
          <img
            ref={frontRef}
            src={FRONT_URL}
            alt="Young man in a casual fitted tee"
            className="absolute inset-0 block h-full w-full object-cover object-bottom opacity-0"
          />
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={`absolute inset-0 block h-full w-full object-cover object-bottom transition-opacity duration-[800ms] ease-in-out ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Hint */}
      
        {/* Tag */}
        <span
          className="absolute z-[3] rounded-[10px] bg-[#FDC700] px-3 py-2 text-xs text-[#121417] backdrop-blur-lg max-[720px]:hidden"
          style={{ right: GUTTER, bottom: GUTTER }}
        >
        ROHAN BYALE
        </span>
      </section>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-30 -ml-[7px] -mt-[7px] h-3.5 w-3.5 rounded-full bg-[#FDC700] opacity-0 transition-opacity duration-[250ms] [@media(hover:none)]:hidden"
      />
    </div>
  );
}
