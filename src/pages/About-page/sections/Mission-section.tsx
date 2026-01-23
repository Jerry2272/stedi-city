import React from 'react'
import { CheckCircle } from 'lucide-react'
import bgImage from '../../../assets/wave-bg.webp'

const values = [
  'Integrity & Transparency',
  'Professional Excellence',
  'Reliability & Accountability',
  'Sustainability & Responsibility',
  'Client-Focused Solutions',
]

const VisionValuesSection: React.FC = () => {
  return (
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">

        {/* Vision */}
        <div>
          <span className="text-sm uppercase tracking-widest text-white/80 font-spaceGrotesk">
            Our Vision
          </span>

          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-white font-spaceGrotesk leading-tight">
            Building the Future Through Trusted Expertise
          </h2>

          <p className="mt-6 text-white/80 font-manRope text-lg leading-relaxed">
            To become a trusted leader in multi-sector consulting and development,
            recognized for excellence, integrity, and sustainable impact across
            Nigeria and beyond.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <span className="text-sm uppercase tracking-widest text-white font-spaceGrotesk">
            Core Values
          </span>

          <ul className="mt-6 space-y-4">
            {values.map((value, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-white w-5 h-5 mt-1" />
                <span className="text-white/80 font-manRope text-base">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div
          className="absolute inset-0 bg-[#0D3B66]"
          style={{ mixBlendMode: "color" }}
        />
    </section>
  )
}

export default VisionValuesSection
