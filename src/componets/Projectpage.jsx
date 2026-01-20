import React from 'react'
import Project from './Project'
import Projectone from './Projectone'
import ProcessSection from './ProcessSection'
import Projectmarque from './Projectmarque'
import PageTransition from './PageTransition'
const Projectpage = () => {
  return (
    <div>
      <PageTransition>
        
        <Projectone  />
        <Projectmarque />
      <Project />
      <ProcessSection />
        </PageTransition>
    </div>
  )
}


export default Projectpage
