// const Nav = () => {
//   return (
//     <nav className="flex flex-wra items-center justify-between px-4 sm:px-6 py-4 shadow-md">
//       {/* Left: Logo + Brand */}
//       <div className="flex items-center space-x-3">
//         <p className="bg-blue-600 text-white rounded-full w-[28px] h-[28px] flex items-center justify-center font-bold text-lg">
//           Pr
//         </p>

//         <div className="sm:text-xl text-base font-bold text-blue-600">Pro-Skills</div>
//       </div>

//       {/* Center: Nav Links - hidden on mobile */}
//       <ul className="hidden md:flex space-x-6 text-gray-700 font-medium mt-4 md:mt-0">
//         <li className="text-blue-600">
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Classes</a>
//         </li>
//         <li>
//           <a href="#">Plans</a>
//         </li>
//         <li>
//           <a href="#">About Us</a>
//         </li>
//       </ul>

//       {/* Right: Auth Buttons - wrap on small screens */}
//       <div className="flex space-x-3 md:mt-0">
//         <button className="border border-blue-500 text-blue-500 py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-50 text-sm sm:text-base">
//           Login
//         </button>
//         <button className="bg-blue-600 text-white py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-700 text-sm sm:text-base">
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-16 py-4 flex items-center justify-between relative z-50">
      <div className="text-2xl font-bold text-blue-600">Oseichukwu</div>

      {/* Hamburger button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // X icon when open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`md:flex md:items-center md:static absolute bg-white md:bg-transparent w-full left-0 md:w-auto lg:space-x-8 transition-all duration-300 ease-in ${
          isOpen ? "top-16 block pl-2" : "top-[-490px] hidden"
        }`}
      >
        <li className="py-2 md:py-0">
          <a href="#" className="block px-4 text-gray-800 hover:text-blue-600">
            Home
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#" className="block px-4 text-gray-800 hover:text-blue-600">
            Courses
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#" className="block px-4 text-gray-800 hover:text-blue-600">
            About
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#" className="block px-4 text-gray-800 hover:text-blue-600">
            Contact
          </a>
        </li>

        {/* put the two buttons here below */}

        <div className="md:hidden flex space-x-3 md:mt-0">
          <button className="border border-blue-500 text-blue-500 py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-50 text-sm sm:text-base">
            Login
          </button>
          <button className="bg-blue-600 text-white py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-700 text-sm sm:text-base">
            Sign In
          </button>
        </div>
      </ul>

      <div className="hidden md:flex space-x-3 md:mt-0">
        <button className="border border-blue-500 text-blue-500 py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-50 text-sm sm:text-base">
          Login
        </button>
        <button className="bg-blue-600 text-white py-1 px-2 sm:px-5 rounded-2xl hover:bg-blue-700 text-sm sm:text-base">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
