import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sombr from '../assets/graphics/Sombr.png'
import Poster1 from '../assets/posters/Poster1.png'
import Poster2 from '../assets/posters/Poster2.png'

const posters = [
  { id: 'p1', src: Sombr, label: 'Sombr' },
  { id: 'p2', src: Poster1, label: 'Radiohead - Let Down' },
  { id: 'p3', src: Poster2, label: 'Ignacio Finals' }
]

const Posters = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="px-8 md:pl-80 md:pr-16 py-8 w-full h-full flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 2 } })}
          className="text-sm text-gray-500 italic mb-4 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        <div className="flex flex-col md:flex-row gap-3 w-full flex-1">
            {posters.map(({ id, src, label }) => (
                <div
                key={id}
                className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                style={{
                    flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
                    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                    minWidth: 0,
                    minHeight: 0,
                }}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                >
                {src && <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />}
                <p className="absolute bottom-2 left-3 text-xs text-white italic">{label}</p>
                </div>
            ))}
        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-4 select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          posters.
        </p>
      </div>
    </div>
  )
}

export default Posters