"use client";

import { useState } from "react";

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="ml-8"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        Contact
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <li>
            <a
              href="tel:1234567890"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Phone: 1234567890
            </a>
          </li>
          <li>
            <a
              href="mailto:email@example.com"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Email: email@example.com
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Facebook
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ContactDropdown;
export const useClient = true;
