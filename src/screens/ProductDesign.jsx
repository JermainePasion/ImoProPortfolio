import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nectar from '../assets/productDesign/Poster1.png'
import Nectar2 from '../assets/productDesign/Poster1.png'  
import Nectar3 from '../assets/productDesign/Poster1.png'
import Nectar4 from '../assets/productDesign/Poster1.png'
import Nectar5 from '../assets/productDesign/Poster1.png'
import Nectar6 from '../assets/productDesign/Poster1.png'

const ProductDesign = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  const cell = (id, src, label) => ({
    id, src, label
  })

  const getStyle = (id, direction = 'horizontal') => ({
    flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
    minWidth: 0,
    minHeight: 0,
  })

  const Cell = ({ id, src, label, style }) => (
    <div
      className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
      style={style || getStyle(id)}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      {src && <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />}
      {label && <p className="absolute bottom-2 left-3 text-xs text-white italic">{label}</p>}
    </div>
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="px-8 md:pl-80 md:pr-16 py-8 w-full h-full flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 3 } })}
          className="text-sm text-gray-500 italic mb-4 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        <div className="flex gap-3 w-full flex-1 min-h-0">

          {/* Left side */}
        <div className="flex flex-col gap-3 flex-1 min-h-0">

            {/* Row 1 — big image */}
            <div
                className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                style={{
                flex: hovered === 'l-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                minHeight: 0,
                }}
                onMouseEnter={() => setHovered('l-top')}
                onMouseLeave={() => setHovered(null)}
            >
                <img src={Nectar} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex gap-3" style={{ flex: 1, minHeight: 0 }}>
                {[['l-bot-l', Nectar2], ['l-bot-r', Nectar3]].map(([id, src]) => (
                <div
                    key={id}
                    className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                    style={{
                    flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
                    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                    minHeight: 0, minWidth: 0,
                    }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                ))}
            </div>

            </div>

            {/* Right side */}
            <div className="flex flex-col gap-3 flex-1 min-h-0">

            <div
                className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                style={{
                flex: hovered === 'r-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                minHeight: 0,
                }}
                onMouseEnter={() => setHovered('r-top')}
                onMouseLeave={() => setHovered(null)}
            >
                <img src={Nectar4} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-3" style={{ flex: 1, minHeight: 0 }}>
                {[['r-bot-tl', Nectar5], ['r-bot-tr', Nectar6]].map(([id, src]) => (
                <div key={id} className="flex gap-3 flex-1" style={{ minHeight: 0 }}>
                    {[id, `${id}-b`].map((cellId, i) => (
                    <div
                        key={cellId}
                        className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
                        style={{
                        flex: hovered === cellId ? 1.3 : hovered !== null ? 0.85 : 1,
                        transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                        minHeight: 0, minWidth: 0,
                        }}
                        onMouseEnter={() => setHovered(cellId)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img src={i === 0 ? src : Nectar6} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    ))}
                </div>

            ))}
            </div>

          </div>

        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-4 select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          product design.
        </p>

      </div>
    </div>
  )
}

export default ProductDesign