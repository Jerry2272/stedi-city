import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D3B66] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <span className="text-sm uppercase tracking-widest text-white font-spaceGrotesk">
            About Stedi-City Ltd
          </span>

          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-white font-spaceGrotesk leading-tight">
            Your Trusted Partner in Integrated Consulting & Development
          </h2>

          <p className="mt-6 text-white/70 font-manRope leading-relaxed">
            Stedi-City Ltd is a multi-sector consulting and development company
            delivering professional solutions across real estate management,
            construction works, agricultural development, logistics, environmental
            services, and general consultancy.
          </p>

          <p className="mt-4 text-white/70 font-manRope leading-relaxed">
            We provide end-to-end support — from planning and advisory services
            to execution and delivery — helping businesses, institutions, and
            communities achieve sustainable growth and operational excellence.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-[#fff] text-[rgba(26,26,26,0.75)] px-6 py-3 rounded-lg font-manRope text-sm font-bold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg"> 
            <img
              src="/src/assets/heroSlide.webp"
              alt="Stedi-City Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
