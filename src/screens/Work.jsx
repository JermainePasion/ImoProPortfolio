import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Promopub from '../assets/work/promoPub.png'
import Compilation from '../assets/work/compilation.png'
import Respondents from '../assets/work/respondents.png'
import Bea from '../assets/work/bea.png'

const Work = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 md:pl-80 md:pr-16 pt-6 md:pt-8 pb-28 md:pb-36 w-full min-h-full flex flex-col gap-4">

        {/* Mobile — single column */}
        <div className="flex flex-col sm:hidden gap-4">
          {[
            { id: 'col1', img: Promopub },
            { id: 'col2-top', img: Compilation },
            { id: 'col2-bot', img: Respondents },
            { id: 'col3', img: Bea },
          ].map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden bg-white w-full"
              style={{ height: '250px' }}
            >
              <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Tablet — 2x2 grid */}
        <div className="hidden sm:flex md:hidden flex-col gap-4">
          <div className="flex gap-3" style={{ height: '280px' }}>
            <div className="relative rounded-xl overflow-hidden bg-white flex-1">
              <img src={Promopub} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-white flex-1">
              <img src={Bea} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex gap-3" style={{ height: '260px' }}>
            <div className="relative rounded-xl overflow-hidden bg-white flex-1">
              <img src={Compilation} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative rounded-xl overflow-hidden bg-white flex-1">
              <img src={Respondents} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Desktop — original 3-column */}
        <div className="hidden md:flex gap-3 flex-1" style={{ minHeight: '60vh', maxHeight: '60vh' }}>
          <div
            className="relative rounded-xl overflow-hidden bg-white"
            style={{
              flex: hovered === 'col1' ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
              minWidth: 0,
            }}
            onMouseEnter={() => setHovered('col1')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={Promopub} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>

          <div
            className="flex flex-col gap-3"
            style={{
              flex: hovered === 'col2-top' || hovered === 'col2-bot' ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
              minWidth: 0,
            }}
          >
            {[
              { id: 'col2-top', img: Compilation },
              { id: 'col2-bot', img: Respondents },
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden bg-white cursor-pointer"
                style={{
                  flex: hovered === item.id ? 1.3 : hovered !== null ? 0.85 : 1,
                  transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
                  minHeight: 0, minWidth: 0,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-contain" />
              </div>
            ))}
          </div>

          <div
            className="relative rounded-xl overflow-hidden bg-white cursor-pointer"
            style={{
              flex: hovered === 'col3' ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: 'flex 0.4s cubic-bezier(0.4,0,0.2,1)',
              minWidth: 0,
            }}
            onMouseEnter={() => setHovered('col3')}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={Bea} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        </div>

      </div>

      <p
        className="fixed z-50 pointer-events-none select-none font-extrabold text-[#313131] leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(1.6rem, 5vw, 5rem)",
          bottom: "clamp(0.6rem, 2.5vw, 2rem)",
          right: "clamp(0.6rem, 2.5vw, 3rem)",
        }}
      >
        school works.
      </p>
    </div>
  )
}

export default Work