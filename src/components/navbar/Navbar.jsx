import React, { useState } from "react";
import { Link } from "react-router-dom";
import dropdownData from "../../data/DropdownData";
import socialData from "../../data/socialSiteData";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialDropdown, setSocialDropdown] = useState(false);

  // Toggle dropdown without affecting the hamburger menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSocialDropdown = () => {
    setSocialDropdown(!socialDropdown);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false); // Close dropdown when closing menu
  };

  return (
    <nav className="bg-gray-800 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <div className="text-sm md:text-xl font-bold whitespace-nowrap">
          <Link to="/" className=" text-sm md:text-lg hover:text-gray-300">
            SHIVANKIT AGARWAL
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-4 font-semibold ml-16 flex-row justify-start w-[60%] gap-12">
          <Link
            to="/"
            className="text-sm md:text-lg hover:text-gray-300 hover:underline"
          >
            Home
          </Link>

          {/* Dropdown Button */}
          <div className="relative inline-block text-sm md:text-lg whitespace-nowrap">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-300 hover:underline"
            >
              Machine Round Problem
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-4 w-48 bg-white text-black rounded shadow-lg">
                {dropdownData.map((data) => {
                  return (
                    <li className="border-b">
                      <Link
                        to={data.path}
                        className="block px-4 py-2 hover:bg-gray-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {data.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* <--------------- Social  links start here-----------> */}
          <div className="relative inline-block text-sm md:text-lg whitespace-nowrap">
            <button
              onClick={toggleSocialDropdown}
              className="hover:text-gray-300 hover:underline"
            >
              My Social links
            </button>

            {/* Dropdown Menu */}
            {socialDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                {socialData.map((data) => {
                  return (
                    <li className="border-b">
                      <Link
                        to={data.url}
                        className="block px-4 py-2 hover:bg-gray-300"
                        onClick={() => toggleSocialDropdown(false)}
                      >
                        {data.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* contact us component(Temporary close) */}

          {/* <div className="relative inline-block text-sm md:text-lg whitespace-nowrap">
          <Link to='/contact-us'>
           Contact Us
          </Link>
          </div> */}

          {/* <-------------end here------------> */}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none text-lg">☰</button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-2 w-[50%] h-auto bg-gray-700 text-white md:hidden">
            <div className="flex flex-col p-4 space-y-2 h-auto">
              <Link
                to="/"
                className="text-sm md:text-lg hover:text-gray-300"
                onClick={toggleMenu}
              >
                Home
              </Link>

              {/* Dropdown Menu in Mobile */}
              <button
                onClick={toggleDropdown}
                className="text-sm md:text-lg hover:text-gray-300 text-left"
              >
                Machine Round Problem
              </button>

              {dropdownOpen && (
                <ul className="bg-gray-700 text-white rounded-md shadow-lg text-xs ">
                  {dropdownData.map((item) => {
                    return (
                      <li className="border-b" key={item.id}>
                        <Link
                          to={item.path}
                          className="block px-4 py-1 hover:bg-gray-500"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="relative inline-block text-sm md:text-lg whitespace-nowrap">
                <button
                  onClick={toggleSocialDropdown}
                  className="hover:text-gray-300 hover:underline"
                >
                  My Social links
                </button>

                {/* Dropdown Menu */}
                {socialDropdown && (
                  <ul className="absolute left-0 mt-2 w-[100%] bg-gray-700 text-white rounded-md shadow-lg text-xs">
                    {socialData.map((data) => {
                      return (
                        <li className="border-b">
                          <Link
                            to={data.url}
                            className=" block px-4 py-1 hover:bg-gray-500"
                            onClick={() => toggleSocialDropdown(false)}
                          >
                            {data.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div> 
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
