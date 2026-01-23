import React from 'react';
import heroImg from '../../../assets/heroSilde.jpeg'; 

const CTASection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center m-6 items-center text-center py-10 px-6 md:px-12 lg:px-20 rounded-xl shadow-lg"
  style={{
    minHeight: '500px',
    backgroundImage: `linear-gradient(to right, rgba(13,59,102,0.7), rgba(9,58,90,0.7)), url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
    Build Your Investment Story With Us
  </h2>
  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
    Explore our integrated solutions across industries and discover how Stedi-City Ltd helps businesses, institutions, and communities achieve sustainable growth.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <a href="#services" className="px-8 py-3 bg-white text-[#0F2A44] rounded-[46px]  transition font-bold">
      Explore Services
    </a>
    <a href="#contact" className="px-8 py-3 border border-white rounded-[46px] text-white hover:bg-white hover:text-[#0F2A44] transition font-bold">
      Request Consultation
    </a>
  </div>
</div>

  );
};

export default CTASection;
