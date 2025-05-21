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

      <div className="flex items-center justify-center relative ">

        <div className="absolute left-0 md:hidden">
          <button
            className="text-2xl "
            onClick={() => setIsOpen(!isOpen)}
          >
            <Squash/>
          </button>
        </div>

        
        <div className="text-center  ">
      <h2 className="tracking-widest text-xl sm:text-5xl font-bold md:text-5xl">
        IMOGEN IGNACIO
      </h2>
      <h2 className="tracking-wide text-md mt-1 sm:text-xl ">ILLUSTRATOR</h2>
    </div>

  </div>

    
      


      <div
  className={`overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
  } md:max-h-full md:opacity-100 md:translate-y-0 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-1 mt-3 `}
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