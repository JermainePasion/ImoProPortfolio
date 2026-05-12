import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CoconutLogo from '../assets/graphics/CoconutLogo.png'

const Logos = () => {
  const navigate = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-3 sm:px-4 md:pl-72 md:pr-12 py-3 md:py-4 w-full min-h-[70vh] flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 3 } })}
          className="text-sm text-gray-500 italic mb-4 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={CoconutLogo}
            alt="logo"
            className="max-w-full max-h-[60vh] object-contain"
          />
        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-4 select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          logos.
        </p>

      </div>
    </div>
  )
}

export default Logos