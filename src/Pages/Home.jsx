import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutAndCTA from '../Components/AboutAndCTA'
import ServicesSection from '../Components/ServicesSection'
import FAQAndCTA from '../Components/FAQAndCTA'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutAndCTA/>
      <ServicesSection/>
      <FAQAndCTA/>
    </div>
  )
}

export default Home