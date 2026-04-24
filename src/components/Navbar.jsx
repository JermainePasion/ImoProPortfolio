import React, { useState } from 'react'
import { NavData } from '../utils/NavbarData';
import { Squash } from 'hamburger-react'
import imoLogo from '../assets/imoLogo.png'; 

const Navbar = () => {
  const handleClick = (route) => navigate(route);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-white z-10">

      <div className="flex items-center justify-between w-full px-4">

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Squash toggled={isOpen} toggle={setIsOpen} size={24} />
          </div>
          <img
            src={imoLogo}
            alt="Logo"
            className="h-20 md:h-28 w-auto cursor-pointer"
            onClick={() => handleClick('/')}
          />
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-50 w-full">
          {NavData.map((item, index) => (
            <button
              key={`menu${index}`}
              className={`text-base lg:text-lg cursor-pointer transition hover:text-[#dacdc4] ${
                index === 0 || index === 2 || index === 4 ? 'font-bold' : ''
              }`}
              onClick={() => handleClick(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2'
        } flex flex-col items-center`}
      >
        {NavData.map((item, index) => (
          <button
            key={`mobile${index}`}
            className="w-full text-lg p-3 hover:bg-gray-50 transition"
            onClick={() => {
              handleClick(item.path);
              setIsOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Navbar;