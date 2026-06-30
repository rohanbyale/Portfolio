import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Intro from "./componets/Intro";

// Pages
import Home from "./componets/Home";
import MainServices from "./componets/MainServices";
import Projectpage from "./componets/Projectpage";
import Contactpage from "./componets/Contactpage";
import MainAbout from "./componets/MainAbout";
import Thankspage from "./componets/Thankspage";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

  // Smooth Scroll
useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.015,          // Extremely smooth
    smoothWheel: true,
    wheelMultiplier: 0.55,
    touchMultiplier: 1,
    syncTouch: false,
    autoRaf: false,
  });

  let rafId;

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, []);
const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // intro duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* MAIN APP (ALWAYS MOUNTED) */}
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mainabout" element={<MainAbout />} />
            <Route path="/mainservices" element={<MainServices />} />
            <Route path="/projectpage" element={<Projectpage />} />
            <Route path="/contactpage" element={<Contactpage />} />
            <Route path="/thankspage" element={<Thankspage />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* INTRO OVERLAY */}
      {showIntro && <Intro />}
    </>
  );
};

export default App;
