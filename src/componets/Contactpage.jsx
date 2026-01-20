import React from 'react'
import Education from './Education'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import Question from './Question'
import Contactmarque from './Contactmarque'
import PageTransition from './PageTransition'
const Contactpage = () => {
  return (
    <div>
      <PageTransition>
       <ContactHero />
       <ContactForm />
      
       <Question />
        <Contactmarque />
        </PageTransition>
    </div>
  )
}


export default Contactpage
