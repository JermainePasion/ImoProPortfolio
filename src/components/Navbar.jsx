import { useState } from 'react'
import { NavData } from '../utils/NavbarData'
import { Squash } from 'hamburger-react'
import imoLogo from '../assets/imoLogo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = (item) => {
    // if we're on a subpage, go back to / with the right page state
    navigate('/', { state: { page: item.pageIndex } })
    // if we're already on /, use the callback
    if (onNavigate) onNavigate(item.pageIndex)
    setIsOpen(false)
  }

  const goHome = () => {
    navigate('/', { state: { page: 0 } })
    if (onNavigate) onNavigate(0)
  }

  return (
    <div className="w-full sticky top-0 bg-white z-10">
      <div className="relative flex items-center w-full px-4">
        <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
          <Squash toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>

        <img
          src={imoLogo}
          alt="Logo"
          className="h-20 md:h-28 w-auto cursor-pointer mx-auto md:mx-0 md:translate-x-10"
          onClick={goHome}
        />

        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-50 w-full">
          {NavData.map((item, index) => (
            <button
              key={item.id}
              className={`text-base lg:text-lg cursor-pointer transition hover:text-[#dacdc4] ${
                index % 2 === 0 ? 'font-bold' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        } flex flex-col items-center`}
      >
        {NavData.map((item) => (
          <button
            key={item.id}
            className="w-full text-lg p-3 hover:bg-gray-50 transition"
            onClick={() => handleClick(item)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar