import { label, path } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
    {path: "/services", label: "Services"},
  ];

//   const serviceItems = [
//     { path: "/wealth", label: "Wealth Consultancy" },
//     { path: "/share-broking", label: "Share Broking" },
//     { path: "/lockers", label: "Lockers" },
//     { path: "/celebrity-service", label: "Celebrity Service" },
//     { path: "/yatra", label: "Anand Yatra" },
//   ];

  const isActiveLink = (path) => location.pathname === path;



  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 
      bg-white border-b 
      ${isScrolled ? "shadow-md border-gray-200" : "border-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-center py-3 md:py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="./images/image.png"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <img
              src="./images/Anandhlogo.png"
              alt="Logo"
              className="w-10 h-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-blue-800">
                <span className="text-yellow-500">ANAND </span>WEALTH
              </h1>
              <p className="text-xs text-gray-600 italic">Grow Your Future</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${
                  isActiveLink(item.path)
                    ? "text-blue-700 bg-blue-100 border border-blue-300"
                    : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Wealth Services Dropdown */}
            {/* <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-blue-800 hover:bg-blue-50 transition-all"
              >
                Wealth Services ▾
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-56 z-50">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-blue-800 hover:bg-blue-50 border-b last:border-none"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {/* Consultation Button */}
            <button
          
              className="px-6 py-3 rounded-lg text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:scale-105 shadow-lg"
            >
              Get Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-blue-800 hover:bg-blue-50 rounded-lg"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">

            <nav className="space-y-2 pt-3">
              {/* Basic Links */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ))}

              {/* Wealth Services Dropdown (Mobile) */}
              {/* <div className="px-4">
                <p className="font-semibold text-blue-700 mt-3">Wealth Services</p>

                <div className="mt-2 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 bg-blue-50 rounded-md text-blue-800"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div> */}

              {/* Consultation Button */}
              <button
                className="w-full mt-3 px-4 py-3 bg-blue-600 text-white rounded-lg"
              >
                Get Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
