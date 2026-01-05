import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#whychoose' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#0D3B66] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Stedi-City
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0D3B66] px-6 pb-6 space-y-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="block text-white hover:text-blue-400 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
