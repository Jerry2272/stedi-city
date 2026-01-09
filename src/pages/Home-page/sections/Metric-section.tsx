import React from 'react';
import { FaBuilding, FaProjectDiagram, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';

const metrics = [
  { value: '10+', label: 'Years Combined Experience', icon: <FaBuilding /> },
  { value: '50+', label: 'Projects Executed', icon: <FaProjectDiagram /> },
  { value: '100+', label: 'Trusted Partners', icon: <FaHandshake /> },
  { value: 'Nationwide', label: 'Operations Coverage', icon: <FaMapMarkerAlt /> },
];

const MetricsSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0F2A44] font-bold  mb-4">
            Proven Results. Measurable Impact.
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto text-lg">
            Our track record reflects our commitment to excellence, reliability, and sustainable development across all sectors.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-[#0F2A44] rounded-2xl py-10 px-4 hover:bg-white/10 transition transform hover:scale-105"
            >
              <div className="text-4xl text-[#0F2A44] mb-4">{metric.icon}</div>
              <h4 className="lg:text-4xl text-xl  font-bold  mb-2">{metric.value}</h4>
              <p className="/80 text-sm md:text-base">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
