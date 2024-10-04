'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Bar with Scrolling Mexican Food Items */}
      <div className="bg-custom-pink-1 py-2 overflow-hidden w-full">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold md:text-xl font-bungee">
          <span className="text-white mx-2 md:mx-4">Margaritas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Burritos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Tacos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Nachos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Chips</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Salsa</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Guacamole</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Quesadillas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Enchiladas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Margaritas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Burritos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Tacos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Nachos</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Chips</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Salsa</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Guacamole</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Quesadillas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
          <span className="text-white mx-2 md:mx-4">Enchiladas</span>
          <span className="text-white mx-2 md:mx-4">•</span>
        </div>
      </div>

      {/* Logo and Dropdown Navigation */}
      <nav className="bg-white shadow w-full border-t border-b border-gray-200"> {/* Gray lines added */}
        <div className="w-full flex justify-between items-center p-4 md:flex-col md:items-center">
          {/* Logo on the left (on mobile) */}
          <div className="flex items-center justify-between w-full md:hidden">
            <Link href="/">
              <img
                src="/images/carrburrito_Logo.png"
                alt="Taco Vista Logo"
                className="w-auto h-16 max-w-full"  // Flexible image
              />
            </Link>

            {/* Hamburger menu for mobile */}
            <button
              onClick={toggleDropdown}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Full navigation menu for larger screens */}
          <div className="hidden md:flex flex-col items-center w-full">
            <div className="my-4">
              <Link href="/">
                <img
                  src="/images/carrburrito_Logo.png"
                  alt="Taco Vista Logo"
                  className="w-auto h-48 max-w-full"  // Flexible image
                />
              </Link>
            </div>
            <ul className="flex space-x-6 md:space-x-12 lg:space-x-16 text-lg md:text-5xl font-amatic font-bold"> {/* Adjusted spacing for fluid grid */}
              <li>
                <Link href="/menu" className="text-custom-blue-5 hover:text-custom-pink-1">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-custom-blue-5 hover:text-custom-pink-1">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-custom-blue-5 hover:text-custom-pink-1">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-custom-blue-5 hover:text-custom-pink-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/online-ordering" className="text-custom-blue-5 hover:text-custom-pink-1">
                  Online Ordering
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown Menu for mobile */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center text-3xl bg-white border-t border-gray-200 font-amatic font-bold">
              <li className="py-2">
                <Link href="/menu" className="block text-custom-blue-5 hover:text-custom-green-1">
                  Menu
                </Link>
              </li>
              <li className="py-2">
                <Link href="/locations" className="block text-custom-blue-5 hover:text-custom-green-1">
                  Locations
                </Link>
              </li>
              <li className="py-2">
                <Link href="/catering" className="block text-custom-blue-5 hover:text-custom-green-1">
                  Catering
                </Link>
              </li>
              <li className="py-2">
                <Link href="/contact" className="block text-custom-blue-5 hover:text-custom-green-1">
                  Contact
                </Link>
              </li>
              <li className="py-2">
                <Link href="/online-ordering" className="block text-custom-blue-5 hover:text-custom-green-1">
                  Online Ordering
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
