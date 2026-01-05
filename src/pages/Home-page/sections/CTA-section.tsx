import React from 'react';
import heroImg from '../../../assets/heroSilde.jpeg'; 


const CTASection: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center py-20 px-6 md:px-12 lg:px-20 rounded-xl shadow-lg"
      style={{
        minHeight: '400px',
        backgroundImage: `linear-gradient(to right, rgba(13,59,102,0.7), rgba(9,58,90,0.7)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Let's Build Your Investment Story
      </h2>
      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Connect with our experts today and discover your perfect property.
      </p>
      <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg font-medium">
        Contact Us Today
      </button>
    </div>
  );
};

export default CTASection;
