import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 p-4 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-2 h-12 items-center">
          <img
            src="/Images/EduHelp.jpeg"
            alt="logo"
            className="h-12 w-12 rounded-full"
          />
          <div className="text-xl font-bold">EduHelp</div>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#home" className=" hover:text-gray-700">
            Home
          </a>
          <a href="#about" className=" hover:text-gray-700">
            About
          </a>
          <a href="#contact" className=" hover:text-gray-700">
            Contact
          </a>
          <a href="#courses" className=" hover:text-gray-700">
            SignUp
          </a>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden ">
          <a href="#home" className="block  hover:text-gray-700 py-2 px-4">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-700 py-2 px-4">
            About
          </a>
          <a href="#contact" className="block  hover:text-gray-700 py-2 px-4">
            Contact
          </a>
          <a href="#contact" className="block  hover:text-gray-700 py-2 px-4">
            SignUp
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
