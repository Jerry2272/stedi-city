import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '/src/assets/real-estate.jpg';
import img2 from '/src/assets/BusinessConsulting.jpeg';
import img3 from '/src/assets/agric-bg.jpg';
import img4 from '/src/assets/logistic.png';
import img5 from '/src/assets/constructioin.jpg';
import img6 from '/src/assets/cleaner.jpg';

interface Service {
  title: string;
  slug: string;
  location?: string;
  description: string;
  img: string;
}

const services: Service[] = [
  {
    title: 'Real Estate & Construction',
    slug: 'real-estate ',
    location: 'Nationwide',
    description:
      'Building construction, real estate management, contracting services, and supply of building materials.',
    img: img1,
  },
  {
    title: 'Business & Consulting',
    slug: 'consulting',
    location: 'Global',
    description:
      'Consultation, sales representation, and commission agency services to grow your business.',
    img: img2,
  },
  {
    title: 'Agriculture & Food',
    slug: 'agriculture',
    location: 'Rural & Urban',
    description:
      'Agricultural development, food processing, and sustainable agro-services.',
    img: img3,
  },
  {
    title: 'Logistics & Supply',
    slug: 'logistics',
    location: 'Nationwide',
    description:
      'General logistics services and supply of goods across multiple sectors.',
    img: img4,
  },
  {
    title: 'Manufacturing & Production',
    slug: 'manufacturing',
    location: 'Industrial Zones',
    description:
      'Manufacturing and production services tailored to industrial needs.',
    img: img5,
  },
  {
    title: 'Cleaning & Environmental',
    slug: 'cleaning',
    location: 'All Locations',
    description:
      'Professional cleaning and environmental services for healthy spaces.',
    img: img6,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-24">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
          Our Services
        </h2>
        <p className="text-black/70 mt-4">
          We provide integrated solutions across key industries, delivering
          excellence, reliability, and long-term value.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group"
          >
            <div className="relative">
              {/* Image */}
              <div className="h-64 overflow-hidden rounded-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Card */}
              <div className="relative -mt-16 mx-6 bg-white border border-[#0F2A44] shadow-xl rounded-2xl p-6 transition-shadow duration-300 group-hover:shadow-xl">
                <h3 className="text-lg font-semibold text-[#0F2A44]">
                  {service.title}
                </h3>

                {service.location && (
                  <p className="text-sm text-black/70 mt-1">
                    {service.location}
                  </p>
                )}

                <p className="text-sm text-black/70 mt-3 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-bold text-[#0F2A44]">
                    Explore Service →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
