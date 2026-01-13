import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 1. SCROLL PROGRESS BAR SETUP
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 2. DETECT SCROLL FOR BACKGROUND BLUR
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/mainabout" },
    { title: "Projects", href: "/projectpage" },
    { title: "Services", href: "/mainservices" },
    { title: "Contact", href: "/contactpage" },
  ]

  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.4, duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <>
      {/* 🟢 TOP SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-yellow-400 origin-left z-[110]"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 w-full z-[100] px-6 py-5 lg:px-12 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-2xl bg-black/40 border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* 1. BRAND LOGO */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter uppercase cursor-pointer text-white"
          >
            Byale Rohan<span className="text-yellow-400">.</span>
          </motion.div>
        </Link>

        {/* 2. DESKTOP NAVIGATION */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="relative group overflow-hidden"
              >
                <motion.span className="block text-[11px] font-black uppercase tracking-[0.3em] cursor-pointer text-white/50 group-hover:text-white transition-colors duration-300">
                  {link.title}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <Link to="/contactpage">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
            >
              Start a Project
            </motion.button>
          </Link>
        </div>

        {/* 3. MOBILE TOGGLE */}
        <div
          className="md:hidden cursor-pointer z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-7 h-0.5 bg-white mb-2 transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2.5 bg-yellow-400' : ''}`} />
          <div className={`w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-7 h-0.5 bg-white mt-2 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2.5 bg-yellow-400' : ''}`} />
        </div>

        {/* 4. MOBILE FULLSCREEN MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 w-full h-screen bg-[#050505] origin-top flex flex-col items-center justify-center z-[105]"
            >
              <div className="flex flex-col items-center gap-6">
                <p className="text-[10px] text-yellow-400 font-black uppercase tracking-[0.5em] mb-4 opacity-50">
                  Navigation Map
                </p>

                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <Link to={link.href} onClick={() => setIsOpen(false)}>
                      <motion.span
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: [0.76, 0, 0.24, 1]
                        }}
                        className="block text-5xl font-bold tracking-tighter text-white hover:text-yellow-400 transition-colors uppercase"
                      >
                        {link.title}
                      </motion.span>
                    </Link>
                  </div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <Link to="/contactpage" onClick={() => setIsOpen(false)}>
                    <button className="px-12 py-5 border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.3em] text-white hover:bg-yellow-400 hover:text-black transition-all">
                      Contact Me
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="absolute bottom-10 text-[10px] font-mono text-white/20 tracking-widest uppercase">
                Byale Rohan © 2026 // Maharashtra, India
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
