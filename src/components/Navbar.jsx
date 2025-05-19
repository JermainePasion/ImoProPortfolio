import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavData } from '../utils/NavbarData';
import { Squash } from 'hamburger-react'

const Navbar = () => {

  const navigate = useNavigate();
  const handleClick = (route) => {
        navigate (route);
    }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 bg-white z-10 p-4 ">

      <div className="grid grid-cols-1 justify-center">
        <h2 className="text-center tracking-widest text-4xl font-bold">
          IMOGEN IGNACIO
        </h2>
        <h2 className="text-center tracking-wide text-xl">ILLUSTRATOR</h2>
      </div>


      <div className="flex justify-center mt-3 md:hidden transition-all ">
        <button
          className="text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          <Squash/>
        </button>
      </div>


      <div
        className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-1 mt-3 transition-all duration-800 ${
          isOpen ? 'block' : 'hidden'
        } md:grid`}
      >
        {NavData.map((item, index) => (
          <button
            key={`menu${index}`}
            className="w-full flex justify-center text-lg cursor-pointer p-1 transition hover:text-[#dacdc4]"
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

export default Navbar