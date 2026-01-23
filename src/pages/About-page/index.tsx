import React from 'react'
import Navbar from '../../components/Navbar'
import CTASection from '../Home-page/sections/CTA-section'
import Footer from '../../components/Footer'
import AboutHeroSection from './sections/About-hero-section'
import CompanyOverview from './sections/Company-overview-section'
import VisionValuesSection from './sections/Mission-section'
import IndustriesSection from './sections/Industrial-section'

const AboutPage:React.FC = () => {
  return (
    <div>
        <Navbar />
        <AboutHeroSection />
        <CompanyOverview />
        <VisionValuesSection />
        <IndustriesSection />
        <CTASection />
        <Footer />
    </div>
  )
}

export default AboutPage