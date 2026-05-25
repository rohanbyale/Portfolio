import React from 'react'
import Education from './Education'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

import Contactmarque from './Contactmarque'
import PageTransition from './PageTransition'
const Contactpage = () => {
  return (
    <div>
      <PageTransition>
       <ContactHero />
       <ContactForm />
      
    
        <Contactmarque />
        </PageTransition>
    </div>
  )
}


export default Contactpage
