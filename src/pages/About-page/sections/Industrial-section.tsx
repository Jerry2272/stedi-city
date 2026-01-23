import React from 'react'
import { Building2, HardHat, Leaf, Truck, Recycle, Briefcase } from 'lucide-react'

const industries = [
  {
    title: 'Real Estate & Property Development',
    icon: Building2,
  },
  {
    title: 'Construction & Infrastructure',
    icon: HardHat,
  },
  {
    title: 'Agriculture & Food Processing',
    icon: Leaf,
  },
  {
    title: 'Logistics & Supply Chain',
    icon: Truck,
  },
  {
    title: 'Environmental & Facility Services',
    icon: Recycle,
  },
  {
    title: 'Commercial & Industrial Operations',
    icon: Briefcase,
  },
]

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">

        <span className="text-sm uppercase tracking-widest text-black/60 font-spaceGrotesk">
          Industries We Serve
        </span>

        <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-gray-900 font-spaceGrotesk">
          Serving Multiple Sectors With Expertise
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-black/80 font-manRope leading-relaxed">
          We provide professional consulting and operational support across
          diverse industries, delivering reliable solutions tailored to
          sector-specific needs.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center"
              >
                <Icon className="w-10 h-10 text-[#0D3B66]" />
                <h4 className="mt-4 text-lg font-semibold text-gray-900 font-spaceGrotesk text-center">
                  {industry.title}
                </h4>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default IndustriesSection
