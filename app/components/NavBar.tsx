"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactDropdown from './ContactDropdown';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bottom-0 w-full bg-white border-gray-200 top-0 left-0 right-0 z-50 flex justify-between items-center font-semibold p-4 text-black text-xl"
      style={{ backgroundColor: '#BCA56F' }}
    >
      <div className="flex items-center">
        <Image src="/soundDr_logo.png" width={90} height={30} alt="" />
      </div>
      <div className="flex items-center lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round" 
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row lg:items-center`}
      >
        <Link href="/">
          <div className="block mt-4 lg:inline-block lg:mt-0 mr-8">Home</div>
        </Link>
        <Link href="/about">
          <div className="block mt-4 lg:inline-block lg:mt-0 mr-8">About</div>
        </Link>
        <Link href="/services">
          <div className="block mt-4 lg:inline-block lg:mt-0 mr-8">Services</div>
        </Link>
        <Link href="/contact">
          <div className="block mt-4 lg:inline-block lg:mt-0 mr-8">Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
