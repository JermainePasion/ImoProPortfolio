import { useState } from 'react'
import Sombr from '../assets/graphics/Sombr.png'
import ChappellRoan from '../assets/graphics/ChappellRoan.png'
import Cans from '../assets/graphics/Cans.png'
import CoconutLogo from '../assets/graphics/CoconutLogo.png'
import CoconutLogo2 from '../assets/graphics/CoconutLogo2.png'
import Bea from '../assets/graphics/Bea.png'
import Nectar from '../assets/graphics/Nectar.png'
import Spectacolar from '../assets/graphics/Spectacolar.png'

const Graphics = () => {
  const [hovered, setHovered] = useState(null)

 

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-8 md:pl-80 md:pr-16 py-8 w-full min-h-full flex flex-col">

        <div className="flex gap-3 w-full" style={{ minHeight: '75vh' }}>

          {/* Left column — 1 big image */}
          <div
            className="relative rounded-xl overflow-hidden bg-gray-200 flex-shrink-0"
            style={{
              flex: hovered === "left" ? "1.6" : hovered !== null ? "0.6" : "0.7",
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: "50px",
            }}
            onMouseEnter={() => setHovered("left")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={Sombr}
              alt="poster"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-3 text-xs text-black italic">posters</p>
          </div>

          {/* Right column — 3 rows × 2 images */}
          <div className="flex flex-col gap-3" style={{ flex: hovered === 'left' ? '0.8' : '1', transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
  
            {/* Row 1 — 2 small images */}
            <div className="flex gap-3" style={{ flex: 1 }}>
              {[['r0c0', ChappellRoan, "posters"], ['r0c1', Cans, "mockups"]].map(([id, src, description]) => (
                <div
                  key={id}
                  className="relative rounded-xl overflow-hidden bg-gray-200"
                  style={{
                    flex: hovered === id ? '1.5' : (hovered && hovered !== 'left' && hovered !== id) ? '0.6' : '1',
                    transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)', 
                  }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={src} alt={id} className="absolute inset-0 w-full h-full object-cover" />
                  <p className="absolute bottom-2 left-3 text-xs text-black italic">{description}</p>
                </div>
              ))}
            </div>

          {/* Rows 2–3 — tall left image + 2 stacked right */}
          <div className="flex gap-3" style={{ flex: 2 }}>

            {/* Tall spanning image */}
            <div
              className="relative rounded-xl overflow-hidden bg-gray-200"
              style={{
                flex:
                  hovered === "tall"
                    ? "1.5"
                    : hovered && hovered !== "left" && hovered !== "tall"
                    ? "0.6"
                    : "1",
                transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={() => setHovered("tall")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={Bea}
                alt="poster"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <p className="absolute bottom-2 left-3 text-xs text-black italic">invitations</p>
            </div>
            

          <div className="flex flex-col gap-3" style={{ flex: 1 }}>
            {[
              { id: "r1c1", img: Nectar, description:"product design" },
              { id: "r2c1", img: Spectacolar, description:"merchandise" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden bg-gray-200"
                style={{
                  flex: hovered === item.id ? 2 : 1,
                  transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
                  minHeight: 0,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={item.img}
                  alt="poster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-3 text-xs text-black italic">{item.description}</p>
              </div>
            ))}
          </div>

          {/* second stack */}
          <div className="flex flex-col gap-3" style={{ flex: 1 }}>
            {[
              { id: "r1c2", img: CoconutLogo, label: "image 1" },
              { id: "r2c2", img: CoconutLogo2, label: "image 2" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden bg-gray-200"
                style={{
                  flex: hovered === item.id ? 2 : 1,
                  transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
                  minHeight: 0,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={item.img}
                  alt="poster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-3 text-xs text-black italic">
                  logos
                </p>
              </div>
            ))}
          </div>

          </div>

          </div>

        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-4 select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          graphics.
        </p>
      </div>
    </div>
  )
}

export default Graphics