import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '/src/assets/heroSlide.webp'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image / Visual */}
        <div className="relative">
          <div className="w-full h-105 rounded-2xl overflow-hidden shadow-lg"> 
            <img
              src={aboutImg}
              alt="Stedi-City Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div>
          <span className="text-sm uppercase tracking-widest font-spaceGrotesk">
            About Stedi-City Ltd
          </span>

          <h2 className="mt-3 text-3xl py-1 lg:text-4xl text-[#0F2A44] font-semibold font-spaceGrotesk leading-tight">
            Your Trusted Partner in Integrated Consulting & Development
          </h2>

          <p className="mt-6 text-black/70 font-manRope leading-relaxed">
            Stedi-City Ltd is a multi-sector consulting and development company
            delivering professional solutions across real estate management,
            construction works, agricultural development, logistics, environmental
            services, and general consultancy.
          </p>

          <p className="mt-4 text-black/70 font-manRope leading-relaxed">
            We provide end-to-end support — from planning and advisory services
            to execution and delivery — helping businesses, institutions, and
            communities achieve sustainable growth and operational excellence.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block  text-[#0F2A44] border border-[#0F2A44] px-6 py-3 rounded-[46px] font-manRope text-sm font-bold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default AboutSection
