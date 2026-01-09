import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from  '../assets/stedi-city-logo.webp'
import { Link } from 'react-router-dom';

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
    <nav className="bg-[#f5f5f5] h-25 items-center justify-between   fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-14 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <a href="/">
        <img src={logo} className='w-24 h-24 ' alt="" />
        </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center space-x-8">
          {navLinks.map((link, idx) => (
            <li key={idx} className={`${link.name === 'Contact' ? 'border-2 border-[#0F2A44] rounded-[45px] px-10 py-1 text-[#0F2A44]' : 'px-3'}`}>
              <Link
                to={link.href}
                className="transition font-medium text-[#0F2A44] text-lg"
              >
                {link.name}
              </Link>
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
