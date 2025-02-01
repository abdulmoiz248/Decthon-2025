'use client'
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 bg-black text-white">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
      
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#about"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              About Us
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#contact"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            >
              Contact
            </a>
          </li>
        </ul>
        
       
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="/logo.png" alt="Logo" className="h-14 w-14" />
        </a>

      
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#service"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Services
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#pricing"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Pricing
            </a>
          </li>
        </ul>

       
        <button
          title="Menu"
          type="button"
          className="p-4 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
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

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-black text-white p-4 space-y-4`}
      >
        <a
          rel="noopener noreferrer"
          href="#about"
          className="block px-4 py-2 border-b-2 dark:border-"
        >
          About Us
        </a>
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="block px-4 py-2 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
        >
          Contact
        </a>
        <a
          rel="noopener noreferrer"
          href="#service"
          className="block px-4 py-2 border-b-2 dark:border-"
        >
          Services
        </a>
        <a
          rel="noopener noreferrer"
          href="#pricing"
          className="block px-4 py-2 border-b-2 dark:border-"
        >
          Pricing
        </a>
      </div>
    </header>
  );
}
