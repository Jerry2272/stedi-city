import React from 'react'
import heroBg from '../../assets/real-estate.jpg'
import Img1 from '../../assets/real-estate.webp'
import bgImage from '../../assets/wave-bg.webp'
import CTASection from '../Home-page/sections/CTA-section'
import { Building2, HardHat, Home } from 'lucide-react'

const processSteps = [
  {
    title: 'Consult & Assess',
    description: 'Understand project scope, budget, and objectives before planning.',
  },
  {
    title: 'Plan & Design',
    description: 'Create detailed project plans, feasibility studies, and approvals.',
  },
  {
    title: 'Build & Deliver',
    description: 'Execute construction with quality control and project handover.',
  },
]

const services = [
  'Building Construction',
  'Real Estate Management',
  'Project Contracting',
  'Building Materials Supply',
  'Renovation & Upgrades',
  'Site Supervision',
]

const RealEstate: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="h-[65vh] flex flex-col justify-end pb-10 lg:pb-[4em] pl-6 lg:pl-14"
        style={{
          backgroundImage: `
           linear-gradient( rgba(13, 59, 102,0.6) ,rgba(2, 1, 1, 0.85)),
          url(${heroBg})
        `,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-white text-3xl lg:text-6xl font-bold font-spaceGrotesk mb-2">
          Real Estate & Construction
        </h1>
        <p className="text-gray-200 max-w-2xl text-base lg:text-lg">
          Professional real estate management and construction solutions delivered with quality, compliance, and long-term value.
        </p>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-20 bg-gray-50">
        <div className=" mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Text Content */}
          <div className='max-w-6xl px-10 lg:px-16'>
            <span className="text-sm uppercase tracking-widest text-[#0D3B66] font-spaceGrotesk">
              Company Overview
            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-[#0D3B66] font-spaceGrotesk leading-tight">
              Real Estate & Construction Expertise
            </h2>

            <p className="mt-6 text-gray-700 font-manRope leading-relaxed">
              Stedi-City Ltd delivers professional real estate management and construction services across residential, commercial, and industrial projects.
            </p>

            <p className="mt-4 text-gray-700 font-manRope leading-relaxed">
              From feasibility and planning to execution and post-project support, we ensure every project meets regulatory, safety, and quality standards.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={Img1}
              alt="Real estate services"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */} 


       <section className="py-24 bg-white text-white relative" 
     style={
        {
            backgroundImage: `url(${bgImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-14 font-spaceGrotesk">
            Our Project Delivery Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="border border-white text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      <div
          className="absolute inset-0 bg-[#0D3B66]"
          style={{ mixBlendMode: "color" }}
        />
    </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D3B66] mb-12 font-spaceGrotesk">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-[#0D3B66] p-8 rounded-xl shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center h-full transition duration-300"
              >
                <div className="mb-4">
                  {idx % 3 === 0 && <Building2 className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 1 && <HardHat className="w-10 h-10 text-[#0D3B66]" />}
                  {idx % 3 === 2 && <Home className="w-10 h-10 text-[#0D3B66]" />}
                </div>
                <h3 className="text-lg font-medium text-[#0D3B66]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTASection />

    </div>
  )
}

export default RealEstate
