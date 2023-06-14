import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { FaFacebook } from 'react-icons/fa';
import React from 'react';
import Image from "next/image";


const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-white border-t border-gray-200" style={{ backgroundColor: '#BCA56F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          Copyright © 2023. soundDr
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/SoundDr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a href="mailto:info@sounddr.com">
              <MailIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </a>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-gray-600" />
              <span className="text-gray-600">+1 (123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
