import React from 'react'
import Services from './Service'
import ServiceHero from './ServiceHero'
import ServiceFocus from './ServiceFocus'
import PriceModel from './PriceModel'
import Architect from './Architect'

const MainServices = () => {
  return (
    <div>
        <ServiceHero />
        <Architect />
        <Services />
        <ServiceFocus />
        <PriceModel />
    </div>
  )
}

export default MainServices