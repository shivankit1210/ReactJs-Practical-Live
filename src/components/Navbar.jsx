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
        <div className="text-sm md:text-xl font-bold whitespace-nowrap">
          <Link to="/" className=" text-xs hover:text-gray-300 ">SHIVANKIT AGARWAL</Link>
        </div>
        {/* <div className="text-sm md:text-xl font-bold whitespace-nowrap">SHIVANKIT AGARWAL</div> */}

        {/* Navbar Links */}
        <div className="space-x-4 font-semibold ml-16 flex flex-row justify-start  w-[60%] gap-12">
          <Link to="/" className=" text-sm hover:text-gray-300 hover:underline">Home</Link>
          {/* <Link to="/about" className="hover:text-gray-300 hover:underline">About</Link> */}

          {/* Dropdown Button */}
          <div className="relative inline-block text-sm whitespace-nowrap">
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

          {/* <Link to="/contactUs" className="hover:text-gray-300 hover:underline">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









































// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-500 p-4 nav-bar">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold ">SHIVANKIT'S WORK</div>
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } w-full md:w-auto md:flex md:items-center`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//             <li>
//               <Link
//                 className="text-black font-semibold hover:bg-blue-700 px-4 py-2 rounded-md"
//                 to="/fetch-component"
//               >
//                 FETCH COMPONENT
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="text-black font-semibold hover:bg-blue-700 px-4 py-2 rounded-md"
//                 to="/counter"
//               >
//                 COUNTER
//               </Link>
//             </li>

//             <li>
//               <Link
//                 className="text-black font-semibold hover:bg-blue-700 px-4 py-2 rounded-md"
//                 to="/infinite-scroll"
//               >
//                 INFINITE SCROLL
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
