import React from 'react'
import Services from './Service'
import ServiceHero from './ServiceHero'
import ServiceFocus from './ServiceFocus'
import PriceModel from './PriceModel'
import Architect from './Architect'
import Fluid from './Fluid'
import PageTransition from './PageTransition'

const MainServices = () => {
  return (
    <div>
      <PageTransition>
        <ServiceHero />
        <Architect />
        <Services />
        <ServiceFocus />
        </PageTransition>
      <Fluid />
        {/* <PriceModel /> */}
    </div>
  )
}


export default MainServices


