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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const Cell = ({ id, src }) => (
    <div
      className="relative rounded-xl overflow-hidden bg-white h-28 sm:h-36 md:h-auto"
      style={{
        flex: isMobile ? 1 : hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
        transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
        minWidth: 0,
        minHeight: 0,
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain p-2" />
    </div>
  )

  return (
    <div className="absolute inset-0 md:overflow-hidden overflow-y-auto">
      <div className="px-4 sm:px-6 md:pl-72 md:pr-12 py-2 w-full h-full flex flex-col">

        <button
          onClick={() => navigate('/', { state: { page: 3 } })}
          className="text-sm text-gray-500 italic mb-3 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        <div className="flex flex-col md:flex-row gap-3 w-full flex-1" style={{ maxHeight: '70vh' }}>

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-3 w-full md:flex-1">

            <div
              className="relative rounded-xl overflow-hidden bg-white h-24 sm:h-32 md:h-auto"
              onMouseEnter={() => setHovered('l-top')}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: isMobile ? 1 : hovered === 'l-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <img src={Nectar} className="absolute inset-0 w-full h-full object-contain p-2" />
            </div>

            <div className="flex gap-3 h-28 sm:h-36 md:h-auto md:flex-1">
              <Cell id="l-bot-l" src={Nectar2} />
              <Cell id="l-bot-r" src={Nectar3} />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-3 w-full md:flex-1">

            <div
              className="relative rounded-xl overflow-hidden bg-white h-36 sm:h-44 md:h-auto"
              onMouseEnter={() => setHovered('r-top')}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: isMobile ? 1 : hovered === 'r-top' ? 1.3 : hovered !== null ? 0.85 : 1,
                transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <img src={Nectar4} className="absolute inset-0 w-full h-full object-contain p-2" />
            </div>

            <div className="flex flex-col gap-3 md:flex-1">
              {[
                [Nectar5, Nectar6],
                [Nectar7, Nectar8],
              ].map((row, i) => (
                <div key={i} className="flex gap-3 h-28 sm:h-36 md:h-auto md:flex-1">
                  {row.map((src, j) => {
                    const id = `r-${i}-${j}`
                    return (
                      <div
                        key={id}
                        className="relative rounded-xl overflow-hidden bg-white flex-1"
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          flex: isMobile ? 1 : hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
                          transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
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