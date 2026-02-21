import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Grow from "../image/GROW.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
             <img
              src={Grow}
              alt="GROW Logo"
              className="h-10 sm:h-14 md:h-18 lg:h-22 xl:h-24 w-auto object-contain transition-all duration-300"
            />

            </NavLink>
          </div>

          {/* Desktop Navigation */}
         <div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => (
    <NavLink
      key={link.path}
      to={link.path}
      className={({ isActive }) =>
        `relative px-4 py-2 rounded-md 
        text-base lg:text-lg font-medium 
        transition-all duration-300 ease-in-out 
        ${
          isActive
            ? "text-grow-green font-bold"
            : "text-gray-700 hover:text-grow-green"
        }`
      }
    >
      {({ isActive }) => (
        <span
          className={`relative inline-block transition-all duration-300 
            ${
              isActive
                ? "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-grow-green"
                : "after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-grow-green hover:after:w-full after:transition-all after:duration-300"
            }`}
        >
          {link.label}
        </span>
      )}
    </NavLink>
  ))}
</div>



          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-grow-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grow-green"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-grow-green bg-grow-accent bg-opacity-20"
                      : "text-gray-700 hover:text-grow-green hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
