import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <div className="text-xl font-bold">SHIVANKIT</div>

        {/* Navbar Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>

          {/* Dropdown Button */}
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-300"
            >
              Works
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <li className="border-b">
                  <Link
                    to="/counter"
                    className="block px-4 py-2 hover:bg-gray-300"
                    onClick={() => setDropdownOpen(false)} // Close dropdown when clicked
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
              </ul>
            )}
          </div>

          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
