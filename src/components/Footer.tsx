import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // TikTok icon

import footerLogo from '../assets/stedi-city-logo.webp'

const Footer: React.FC = () => {

const services = [
  'Real Estate & Construction',
  'Business & Consulting',
  'Agriculture & Food',
  'Logistics & Supply',
  'Manufacturing & Production',
  'Cleaning & Environmental',
];

  return (
    <footer
      className="flex flex-col justify-center  py-12  px-6 md:px-12 lg:px-20  bg-linear-to-t from-[#0F2A44] to-black text-white"
    > 

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 justify- items-  gap-8 mb-8">
        {/* About Section */}
        <div className=' '>
         <div className='mb-4'>
            <img src={footerLogo} className='w-24 h-24 ' alt="" />
         </div>
          <p className="text-white/70">
            Stedi-City Ltd is a multi-sector consulting and development company delivering professional solutions across real estate, construction, agriculture, logistics, and general consulting.
          </p>
        </div>

          {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-white  mb-2 lg:mb-12">Our Services</h3>
          <ul className="space-y-3 text-white/70">
            {services.map((service, index) => (
              <li key={index}>
                <a href={`#${service.toLowerCase().replace(/ & | /g, '-')}`} className="hover:underline transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div  className=''>
          <h3 className="text-xl font-bold text-white mb-2 lg:mb-12">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition hover:underline">Home</a></li>
            <li><a href="#about" className="hover:text-white transition hover:underline">About</a></li>
            <li><a href="#services" className="hover:text-white transition hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition hover:underline">Contact</a></li>
          </ul>
        </div>

        

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 lg:mb-10">Contact Us</h3>
          <p className="text-white/70">No 3 Rukpakwulusi,By Eliozu Flyover Eliozu Obio-Akpor LGA Rivers state. Port Harcourt, Nigeria</p>
          <p className="text-white/70 my-2">Phone: +234 706 207 6941</p>
          <p className="text-white/70">Email: info@stedi-city.com</p>
          <p className="text-white/70">Email: stephenedidiong8@gmail.com</p>

        <div className="flex space-x-4 mt-4">
  <a href="#" className="hover:text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
    <FaFacebookF />
  </a>
  <a href="#" className="hover:text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
    <FaInstagram />
  </a>
  <a href="#" className="hover:text-white transition bg-[#0F2A44] p-4 rounded-[46px] shadow-2xl">
    <SiTiktok />
  </a>
</div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="relative z-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © 2026 Stedi-City Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
