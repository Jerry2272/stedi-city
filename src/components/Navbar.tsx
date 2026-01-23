import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/stedi-city-logo.webp";

// optional service images (remove if not needed)
import realEstate from "../assets/real-estate.jpg";
import consulting from "../assets/BusinessConsulting.jpeg";
import agriculture from "../assets/agric-bg.jpg";
import logistics from "../assets/logistic.png";
import manufacturing from "../assets/constructioin.jpg"
import environmental from "../assets/cleaner.jpg";
import { FaUserTimes } from "react-icons/fa";

interface ServiceItem {
  name: string;
  link: string;
  img?: string;
}

interface NavItem {
  name: string;
  link?: string;
  ServiceChildren?: ServiceItem[];
}

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const NavItems: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      ServiceChildren: [
        { name: "Real Estate & Construction", link: "/services/real-estate", img: realEstate },
        { name: "Business & Consulting", link: "/services/consulting", img: consulting },
        { name: "Agriculture & Food", link: "/services/agriculture", img: agriculture },
        { name: "Logistics & Supply", link: "/services/logistics", img: logistics },
        { name: "Manufacturing & Production", link: "/services/manufacturing", img: manufacturing },
        { name: "Cleaning & Environmental", link: "/services/cleaning", img: environmental },
      ],
    },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#f5f5f5] z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Stedi City Logo" className="w-24 h-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NavItems.map((item, i) => (
            <div key={i} className="relative">
              {item.link ? (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `font-medium text-[#0F2A44] hover:underline ${
                      isActive ? "underline" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-1 font-medium text-[#0F2A44] hover:underline"
                >
                  {item.name}
                  <FaChevronDown
                    className={`transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {/* Desktop Dropdown */}
              {item.ServiceChildren && openDropdown === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6 w-[700px]">
                  {item.ServiceChildren.map((child, j) => (
                    <NavLink
                      key={j}
                      to={child.link}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.img && (
                        <img
                          src={child.img}
                          alt={child.name}
                          className="w-12 h-12 rounded-md"
                        />
                      )}
                      <span className="text-sm font-medium text-[#0F2A44]">
                        {child.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            className="border-2 border-[#0F2A44] rounded-full px-8 py-2 font-medium text-[#0F2A44] hover:bg-[#0F2A44] hover:text-white transition"
          >
            Request Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleNav}>
          {navOpen ? <FaUserTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <nav className="lg:hidden bg-[#0F2A44] px-6 py-6 space-y-4">
          {NavItems.map((item, i) => (
            <div key={i}>
              {item.link ? (
                <Link
                  to={item.link}
                  className="block text-white font-medium"
                  onClick={() => setNavOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    className="flex items-center gap-1 text-white font-medium"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {item.ServiceChildren && openDropdown === item.name && (
                    <div className="ml-4 mt-3 space-y-3">
                      {item.ServiceChildren.map((child, j) => (
                        <Link
                          key={j}
                          to={child.link}
                          className="block text-sm text-gray-300"
                          onClick={() => {
                            setNavOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
