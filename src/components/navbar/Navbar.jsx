import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dropdown without affecting the hamburger menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false); // Close dropdown when closing menu
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <div className="text-sm md:text-xl font-bold whitespace-nowrap">
          <Link to="/" className="text-xs md:text-lg hover:text-gray-300">SHIVANKIT AGARWAL</Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-4 font-semibold ml-16 flex-row justify-start w-[60%] gap-12">
          <Link to="/" className="text-sm md:text-lg hover:text-gray-300 hover:underline">Home</Link>

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
              <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <li className="border-b">
                  <Link
                    to="/counter"
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Counter
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    to="/fetch-component"
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Fetch Component
                  </Link>
                </li>
                <li>
                  <Link
                    to="/infinite-scroll"
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Infinite Scroll
                  </Link>
                </li>
                <li className='border-b'>
                  <Link
                  to="/todo-list"
                  className="block px-4 py-2 hover:bg-gray-300"
                  onClick={() => setDropdownOpen(false)}
                  >
                  ToDo List
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    to="/registration-form"
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Registration Form
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="https://github.com/shivankit1210" className="text-sm md:text-lg hover:text-gray-300 hover:underline">Github</Link>
          <Link to="https://leetcode.com/u/_SHIV_ANKIT_/" className="text-sm md:text-lg hover:text-gray-300 hover:underline">Leetcode</Link>
          <Link to="https://www.linkedin.com/in/shivankit-agarwal/" className="text-sm md:text-lg hover:text-gray-300 hover:underline">LinkedIn</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white md:hidden">
            <div className="flex flex-col p-4 space-y-2">
              <Link to="/" className="text-sm md:text-lg hover:text-gray-300" onClick={toggleMenu}>Home</Link>

              {/* Dropdown Menu in Mobile */}
              <button
                onClick={toggleDropdown}
                className="text-sm md:text-lg hover:text-gray-300 text-left"
              >
                Machine Round Problem
              </button>

              {dropdownOpen && (
                <ul className="bg-gray-700 text-white rounded-md shadow-lg text-xs ">
                  <li className="border-b">
                    <Link
                      to="/counter"
                      className="block px-4 py-1 hover:bg-gray-500"
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                    >
                      Counter
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/fetch-component"
                      className="block px-4 py-1 hover:bg-gray-500"
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                    >
                      Fetch Component
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/infinite-scroll"
                      className="block px-4 py-1 hover:bg-gray-500"
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                    >
                      Infinite Scroll
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/registration-form"
                      className="block px-4 py-1 hover:bg-gray-500"
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                    >
                      Registration Form
                    </Link>
                  </li>
                  <li className='border-b'>
                  <Link
                  to="/todo-list"
                  className="block px-4 py-2 hover:bg-gray-300"
                  onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                  >
                  ToDo List
                  </Link>
                </li>
                </ul>
              )}

              <Link to="https://github.com/shivankit1210" className="text-sm md:text-lg hover:text-gray-300" onClick={toggleMenu}>Github</Link>
              <Link to="https://leetcode.com/u/_SHIV_ANKIT_/" className="text-sm md:text-lg hover:text-gray-300" onClick={toggleMenu}>Leetcode</Link>
              <Link to="https://www.linkedin.com/in/shivankit-agarwal/" className="text-sm md:text-lg hover:text-gray-300" onClick={toggleMenu}>LinkedIn</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;








































