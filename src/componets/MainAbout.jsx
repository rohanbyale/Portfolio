import React from 'react'
import Heroabout from './Heroabout'
import About from './About'
import Education from './Education'
import TechStack from './TeachStack'
import Capabilities from './Capabilities'
import PageTransition from './PageTransition'
const MainAbout = () => {
  return (
    <div>
      <PageTransition>
        <Heroabout />
        <About />
        <Education />
        <TechStack />
        <Capabilities />
        </PageTransition>
    </div>
  )
}


export default MainAbout
