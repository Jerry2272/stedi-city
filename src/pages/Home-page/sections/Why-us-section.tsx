import React from 'react';
import { FaUsers, FaHandshake, FaClipboardCheck, FaGavel, FaBullseye } from 'react-icons/fa';

interface Feature {
  title: string;
  description: string; 
  icon: any
}

const features: Feature[] = [
  {
    title: 'Expert Multi-Sector Advice',
    description: 'Decades of experience across real estate, construction, agriculture, logistics, manufacturing, and consulting, ensuring the right solutions for every sector.',
    icon: <FaUsers className="text-4xl text-white" />,
  },
  {
    title: 'Trusted Partners & Reliable Execution',
    description: 'We collaborate with verified contractors, suppliers, and service providers, guaranteeing quality, reliability, and timely delivery.',
    icon: <FaHandshake className="text-4xl text-white" />,
  },
  {
    title: 'End-to-End Solutions',
    description: 'From advisory and planning to project execution and post-delivery support, we manage every step so you can focus on growth.',
    icon: <FaClipboardCheck className="text-4xl text-white" />,
  },
  {
    title: 'Legal & Compliance Assurance',
    description: 'Complete documentation, regulatory compliance, and environmental approvals for peace of mind across all projects and services.',
    icon: <FaGavel className="text-4xl text-white" />,
  },
  {
    title: 'Client-Focused Approach',
    description: 'Every solution is tailored to your business, institutional, or community needs, delivering measurable results and sustainable growth.',
    icon: <FaBullseye className="text-4xl text-white" />,
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0D3B66]/90 to-[#093A5A] px-6 md:px-12 lg:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          WHY CHOOSE STEDI-CITY LTD
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Your Success is Our Mission
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0D3B66] bg-opacity-20 rounded-xl p-6 flex flex-col items-start gap-4 shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <div>{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-[#0D3B66] text-white rounded hover:bg-blue-700 transition text-lg font-medium">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default WhyChooseSection;
