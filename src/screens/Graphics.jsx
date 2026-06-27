import { useState } from 'react'
import Sombr from '../assets/graphics/Sombr.webp'
import ChappellRoan from '../assets/graphics/ChappellRoan.webp'
import Cans from '../assets/graphics/Cans.webp'
import CoconutLogo from '../assets/graphics/CoconutLogo.webp'
import CoconutLogo2 from '../assets/graphics/CoconutLogo2.webp'
import Bea from '../assets/graphics/Bea.webp'
import Nectar from '../assets/graphics/Nectar.webp'
import Spectacolar from '../assets/graphics/Spectacolar.webp'
import { useNavigate } from 'react-router-dom'

const Graphics = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 md:pl-80 md:pr-16 pt-6 md:pt-8 pb-28 md:pb-36 w-full min-h-full flex flex-col">

        <div className="flex flex-col md:flex-row gap-3 w-full flex-1" style={{ minHeight: '64vh' }}>

          <div
            className="relative rounded-xl overflow-hidden bg-white cursor-pointer"
            style={{
              flex: hovered === "left" ? "1" : hovered !== null ? "0.85" : "0.75",
              transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
              minWidth: "50px",
              minHeight: '200px',
            }}
            onMouseEnter={() => setHovered("left")}
            onClick={() => navigate('/posters')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={Sombr} alt="poster" className="absolute inset-0 w-full h-full object-cover" />
            <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">posters</p>
          </div>

          <div className="flex flex-col gap-3" style={{ flex: hovered === 'left' ? '0.9' : '1', transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)' }}>

            {/* Row 1 — 2 small images */}
            <div className="flex gap-3" style={{ flex: 1, minHeight: '120px' }}>
              {[['r0c0', ChappellRoan, "posters"], ['r0c1', Cans, "mockups"]].map(([id, src, description]) => (
                <div
                  key={id}
                  className="relative rounded-xl overflow-hidden bg-gray-200"
                  style={{
                    flex: hovered === id ? '1.3' : (hovered && hovered !== 'left' && hovered !== id) ? '0.8' : '1',
                    transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={src} alt={id} className="absolute inset-0 w-full h-full object-cover" />
                  <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">{description}</p>
                </div>
              ))}
            </div>

            {/* Rows 2–3 — tall left image + 2 stacked columns */}
            <div className="flex gap-3" style={{ flex: 2, minHeight: '200px' }}>

              <div
                className="relative rounded-xl overflow-hidden bg-gray-200"
                style={{
                  flex: hovered === "tall" ? "1.3" : hovered && hovered !== "left" && hovered !== "tall" ? "0.8" : "1",
                  transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHovered("tall")}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={Bea} alt="poster" className="absolute inset-0 w-full h-full object-cover" />
                <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">invitations</p>
              </div>

              {/* Middle stack */}
              <div className="flex flex-col gap-3" style={{ flex: 1 }}>
                {[
                  { id: "r1c1", img: Nectar, description: "product design", link: "/product-design" },
                  { id: "r2c1", img: Spectacolar, description: "merchandise", link: "/merchandise" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-xl overflow-hidden bg-white cursor-pointer"
                    style={{
                      flex: hovered === item.id ? 1.5 : 1,
                      transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                      minHeight: 0,
                    }}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => navigate(item.link)}
                  >
                    <img src={item.img} alt="poster" className="absolute inset-0 w-full h-full object-cover" />
                    <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3" style={{ flex: 1 }}>
                {[
                  { id: "r1c2", img: CoconutLogo },
                  { id: "r2c2", img: CoconutLogo2 },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-xl overflow-hidden bg-gray-200"
                    style={{
                      flex: hovered === item.id ? 1.5 : 1,
                      transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                      minHeight: 0,
                    }}
                    onMouseEnter={() => setHovered(item.id)}
                    onClick={() => navigate('/logos')}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={item.img} alt="logo" className="absolute inset-0 w-full h-full object-cover" />
                    <p className="absolute bottom-2 left-3 text-xs text-white italic px-2 py-0.5 rounded bg-black/40">logos</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

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
        graphics.
      </p>
    </div>
  )
}

export default Graphics