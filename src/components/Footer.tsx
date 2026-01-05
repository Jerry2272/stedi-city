import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D3B66] text-gray-200 py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">About Stedi-City</h3>
          <p className="text-gray-300">
            Stedi-City Ltd is a multi-sector consulting and development company delivering professional solutions across real estate, construction, agriculture, logistics, and general consulting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
          <p className="text-gray-300">123 Stedi-City Avenue, Lagos, Nigeria</p>
          <p className="text-gray-300">Phone: +234 800 123 4567</p>
          <p className="text-gray-300">Email: info@stedi-city.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © 2026 Stedi-City Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
