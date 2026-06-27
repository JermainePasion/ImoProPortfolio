import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sombr from '../assets/graphics/Sombr.webp'
import Poster1 from '../assets/posters/Poster1.png'
import Poster2 from '../assets/posters/Poster2.png'

// Hover flex values (softened for a gentler expand/shrink)
const EXPAND = 1.15
const SHRINK = 0.9

const posters = [
  { id: 'p1', src: Sombr, label: 'Sombr' },
  { id: 'p2', src: Poster1, label: 'Radiohead - Let Down' },
  { id: 'p3', src: Poster2, label: 'Ignacio Finals' }
]

// Lightbox modal — focuses a single image with an X in the corner
const Lightbox = ({ src, onClose }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
      style={{ opacity: show ? 1 : 0 }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#313131] text-2xl leading-none shadow-md transition"
      >
        ×
      </button>
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
        style={{
          transform: show ? "scale(1)" : "scale(0.96)",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  )
}

const Posters = () => {
  const [hovered, setHovered] = useState(null)
  const [modalImg, setModalImg] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-8 md:pl-80 md:pr-16 pt-6 md:pt-8 pb-28 md:pb-36 w-full min-h-full flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 4 } })}
          className="text-sm text-gray-500 italic mb-4 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        <div className="flex flex-col md:flex-row gap-3 w-full flex-1">
            {posters.map(({ id, src, label }) => (
                <div
                key={id}
                onClick={() => setModalImg(src)}
                className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                style={{
                    flex: hovered === id ? EXPAND : hovered !== null ? SHRINK : 1,
                    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                    minWidth: 0,
                    minHeight: 0,
                }}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                >
                {src && <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />}
                <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">{label}</p>
                </div>
            ))}
        </div>

      </div>

      <p
        className="fixed z-50 pointer-events-none select-none font-extrabold text-[#313131] leading-none"
        style={{
          fontSize: "clamp(1.6rem, 5vw, 5rem)",
          bottom: "clamp(0.6rem, 2.5vw, 2rem)",
          right: "clamp(0.6rem, 2.5vw, 3rem)",
        }}
      >
        posters.
      </p>

      {modalImg && <Lightbox src={modalImg} onClose={() => setModalImg(null)} />}
    </div>
  )
}

export default Posters