import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import HowToUse from '../Components/HowToUse'
import Reviews from '../Components/Reviews'
import Faqs from '../Components/Faqs'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'
const App = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Feature/>
      <HowToUse/>
      <Reviews/>
      <Faqs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App