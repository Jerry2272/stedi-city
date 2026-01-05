import React from 'react'
import { HeroSection } from './sections/Hero-section'
import AboutSection from './sections/About-section'
import ServiceSection from './sections/Service-section'
import WhyChooseSection from './sections/Why-us-section'
import CTASection from './sections/CTA-section'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <WhyChooseSection />
        <CTASection />
        <Footer />
    </div>
  )
}
