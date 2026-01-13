import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Layout Components
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Intro from './componets/Intro'
import Home from './componets/Home'
import MainServices from './componets/MainServices'
import Projectpage from './componets/Projectpage'
import Contactpage from './componets/Contactpage'
import MainAbout from './componets/MainAbout'
import Thankspage from './componets/Thankspage'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  // 1. Initialize showIntro to true so it shows immediately on reload
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // 2. Simply set a timer to hide the intro after your desired duration (4s)
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer)
  }, []) // Empty dependency array ensures this runs once per hard reload

  return (
    <>
      <ScrollToTop />

      {/* 3. Render Intro if showIntro is true */}
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mainabout" element={<MainAbout />} />
              <Route path="/mainservices" element={<MainServices />} />
              <Route path="/projectpage" element={<Projectpage />} />
              <Route path="/contactpage" element={<Contactpage />} />
              <Route path='/thankspage' element={<Thankspage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App