import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nectar from '../assets/productDesign/bathSoap.png'
import Nectar2 from '../assets/productDesign/kohi.png'  
import Nectar3 from '../assets/productDesign/nectar.png'
import Nectar4 from '../assets/productDesign/can.png'
import Nectar5 from '../assets/productDesign/matcha.png'
import Nectar6 from '../assets/productDesign/buko.png'
import Nectar7 from '../assets/productDesign/strawbeeri.png'
import Nectar8 from '../assets/productDesign/sweetStrawbeeri.png'

const ProductDesign = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  const allImages = [Nectar, Nectar2, Nectar3, Nectar4, Nectar5, Nectar6, Nectar7, Nectar8]

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 sm:px-6 md:pl-72 md:pr-12 py-4 w-full min-h-full flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 4 } })}
          className="text-sm text-gray-500 italic mb-3 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        {/* Mobile + Tablet — stacked single column */}
        <div className="flex flex-col lg:hidden gap-3">
          {allImages.map((src, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden bg-white w-full"
              style={{ height: '220px' }}
            >
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain p-2" />
            </div>
          ))}
        </div>

        {/* Desktop — original layout */}
        <div className="hidden lg:flex gap-3 flex-1" style={{ maxHeight: '70vh' }}>

          {/* LEFT */}
          <div className="flex flex-col gap-3 flex-1">
            <div
              className="relative rounded-xl overflow-hidden bg-white"
              onMouseEnter={() => setHovered('l-top')}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: hovered === 'l-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                minHeight: 0,
              }}
            >
              <img src={Nectar} className="absolute inset-0 w-full h-full object-contain p-2" />
            </div>

            <div className="flex gap-3 flex-1">
              {[['l-bot-l', Nectar2], ['l-bot-r', Nectar3]].map(([id, src]) => (
                <div
                  key={id}
                  className="relative rounded-xl overflow-hidden bg-white"
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
                    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                    minHeight: 0,
                    minWidth: 0,
                  }}
                >
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3 flex-1">
            <div
              className="relative rounded-xl overflow-hidden bg-white"
              onMouseEnter={() => setHovered('r-top')}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: hovered === 'r-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                minHeight: 0,
              }}
            >
              <img src={Nectar4} className="absolute inset-0 w-full h-full object-contain p-2" />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              {[[Nectar5, Nectar6], [Nectar7, Nectar8]].map((row, i) => (
                <div key={i} className="flex gap-3 flex-1">
                  {row.map((src, j) => {
                    const id = `r-${i}-${j}`
                    return (
                      <div
                        key={id}
                        className="relative rounded-xl overflow-hidden bg-white"
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
                          transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                          minHeight: 0,
                          minWidth: 0,
                        }}
                      >
                        <img src={src} className="absolute inset-0 w-full h-full object-contain p-2" />
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-3 select-none"
          style={{ fontSize: 'clamp(1.2rem, 3.5vw, 3rem)' }}
        >
          product design.
        </p>

      </div>
    </div>
  )
}

export default ProductDesign