import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavData } from '../utils/NavbarData';
import { Squash } from 'hamburger-react'
import imoLogo from '../assets/imoLogo.png'; 

const Navbar = () => {

  const navigate = useNavigate();
  const handleClick = (route) => navigate(route);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-white z-10 p-4">

      <div className="grid grid-cols-[auto_1fr] items-center w-full">

        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <Squash toggled={isOpen} toggle={setIsOpen} />
          </div>
          <img
            src={imoLogo}
            alt="Logo"
            className="h-30 w-auto cursor-pointer"
            onClick={() => handleClick('/')}
          />
        </div>

        <div className="hidden md:flex justify-center gap-45 w-full">
          {NavData.map((item, index) => (
            <button
              key={`menu${index}`}
              className={`text-lg cursor-pointer transition hover:text-[#dacdc4] ${
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
        } flex flex-col items-center mt-3`}
      >
        {NavData.map((item, index) => (
          <button
            key={`mobile${index}`}
            className="w-full text-lg p-2"
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