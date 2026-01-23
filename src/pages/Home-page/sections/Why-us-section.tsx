import React from 'react';
import {
  FaUsers,
  FaHandshake,
  FaClipboardCheck,
  FaGavel,
  FaBullseye,
} from 'react-icons/fa';

import bgImage from '../../../assets/wave-bg.webp';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Expert Multi-Sector Advice',
    description:
      'Decades of experience across real estate, construction, agriculture, logistics, manufacturing, and consulting.',
    icon: <FaUsers />,
  },
  {
    title: 'Trusted Partners & Reliable Execution',
    description:
      'We collaborate with verified contractors and suppliers to ensure quality and timely delivery.',
    icon: <FaHandshake />,
  },
  {
    title: 'End-to-End Solutions',
    description:
      'From planning to execution and post-delivery support, we manage the entire lifecycle.',
    icon: <FaClipboardCheck />,
  },
  {
    title: 'Legal & Compliance Assurance',
    description:
      'Complete documentation, regulatory compliance, and environmental approvals.',
    icon: <FaGavel />,
  },
  {
    title: 'Client-Focused Approach',
    description:
      'Tailored solutions designed to meet business, institutional, and community needs.',
    icon: <FaBullseye />,
  },
];

const WhyChooseSection: React.FC = () => {
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
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT CONTENT */} 
 
        <div className="space-y-6 lg:order">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-5 items-start bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 transition hover:bg-white/15"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F2A44] text-white text-lg shrink-0">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

              {/* RIGHT FEATURES */}
          <div className="max-w-xl order-first lg:order-2">
          <h2 className="text-2xl md:text-4xl  font-bold text-white mb-6">
            Why Choose Stedi City Limited
          </h2>

          <p className="text-white/80 text-lg mb-8">
            We are a multi-sector solutions company committed to excellence,
            integrity, and sustainable growth across every project we handle.
          </p>

          <ul className="space-y-4 text-white/80 text-sm mb-10">
            <li>• Professional project execution</li>
            <li>• Sustainable development mindset</li>
            <li>• Transparent processes</li>
            <li>• Long-term partnership approach</li>
          </ul>

          <button className="px-8 py-3 rounded-[46px] border text-white font-medium text-lg hover:bg-[#0F2A44] transition">
            Learn More About Us
          </button>
        </div>
      </div>
          <div
              className="absolute inset-0 bg-[#0D3B66]"
              style={{ mixBlendMode: "color" }}
            />
        </section>
  );
};

export default WhyChooseSection;
