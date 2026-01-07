import React from 'react';

import img1 from '/src/assets/realEstate.webp'
import img2 from '/src/assets/BusinessConsulting.jpeg'
import img3 from '/src/assets/agricultureFood.webp'
import img4 from '/src/assets/logisticsSupply.webp'
import img5 from '/src/assets/manufacturingProduction.webp'
import img6 from '/src/assets/cleaningEnvironmental.webp'

interface Service {
  title: string;
  location?: string;
  description: string;
  img: string;
}

const services: Service[] = [
  {
    title: 'Real Estate & Construction',
    location: 'Nationwide',
    description: 'Building construction, construction works, real estate management, general contractor services, and supply of building materials.',
    img: img1,
  },
  {
    title: 'Business & Consulting',
    location: 'Global',
    description: 'Consultation, sales representative, and commission agency services to help your business grow.',
    img: img2,
  },
  {
    title: 'Agriculture & Food',
    location: 'Rural & Urban',
    description: 'Agricultural development management and food processing services for sustainable growth.',
    img: img3,
  },
  {
    title: 'Logistics & Supply',
    location: 'Nationwide',
    description: 'General logistics services, merchandise, and supply of goods across sectors.',
    img: img4,
  },
  {
    title: 'Manufacturing & Production',
    location: 'Industrial Zones',
    description: 'Manufacturing services to support business production and industrial needs.',
    img: img5,
  },
  {
    title: 'Cleaning & Environmental',
    location: 'All Locations',
    description: 'Professional cleaning and environmental services for a safe and healthy environment.',
    img: img6,
  },
];

const ServiceSection: React.FC = () => {
  return (
  <div className="bg-gradient-to-b from-[#000] to-[#000] shadow-md p-6 md:p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="border border-white rounded-xl overflow-hidden shadow hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-58 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-white">{service.title}</h3>
        {service.location && (
          <p className="text-sm text-white mb-2">{service.location}</p>
        )}
        <p className="text-white/60 mb-4">{service.description}</p>
        <div className="flex gap-3 justify-between">
          <button className="px-10 py-1 bg-[#0D3B66] cursor-pointer text-white rounded hover:bg-[#0D3B66]/60 transition">
            Book Visit
          </button>
          <button className="px-10 py-1 border border-white text-white rounded hover:bg-[#0D3B66] hover:text-white transition cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default ServiceSection;
