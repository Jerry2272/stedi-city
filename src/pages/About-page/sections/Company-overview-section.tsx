import React from 'react'

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Text Content */}
        <div>
          <span className="text-sm uppercase tracking-widest text-black/80 font-spaceGrotesk">
            Company Overview
          </span>

          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-gray-900 font-spaceGrotesk leading-tight">
            Integrated Consulting & Development Solutions
          </h2>

          <p className="mt-6 text-black/80 font-manRope leading-relaxed">
            Stedi-City Ltd is a multi-sector consulting and development company
            delivering professional services across real estate management,
            construction works, agricultural development, logistics, environmental
            services, and general commercial operations.
          </p>

          <p className="mt-4 text-black/80  font-manRope leading-relaxed">
            We support businesses, institutions, and communities through strategic
            planning, project execution, and sustainable solutions tailored to
            real-world challenges. Our approach combines industry expertise,
            operational efficiency, and a strong commitment to quality delivery.
          </p>

          <p className="mt-4 text-black/80  font-manRope leading-relaxed">
            From advisory and planning to execution and long-term support,
            Stedi-City Ltd serves as a reliable partner for projects that demand
            professionalism, accountability, and results.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 font-spaceGrotesk">
              Multi-Sector Expertise
            </h4>
            <p className="mt-2 text-black/80  font-manRope text-sm">
              Professional services delivered across diverse industries under one trusted brand.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 font-spaceGrotesk">
              End-to-End Delivery
            </h4>
            <p className="mt-2 text-black/80  font-manRope text-sm">
              From consultation and planning to execution and long-term support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 font-spaceGrotesk">
              Sustainable Approach
            </h4>
            <p className="mt-2 text-black/80  font-manRope text-sm">
              Solutions designed to create long-term value for clients and communities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 font-spaceGrotesk">
              Trusted Partnership
            </h4>
            <p className="mt-2 text-black/80  font-manRope text-sm">
              Reliable support built on professionalism, integrity, and accountability.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompanyOverview
