import React from 'react'
import Services from './Service'
import ServiceHero from './ServiceHero'
import ServiceFocus from './ServiceFocus'
import PriceModel from './PriceModel'
import Architect from './Architect'
import Fluid from './Fluid

const MainServices = () => {
  return (
    <div>
        <ServiceHero />
        <Architect />
        <Services />
        <ServiceFocus />
      <Fluid />
        {/* <PriceModel /> */}
    </div>
  )
}


export default MainServices
