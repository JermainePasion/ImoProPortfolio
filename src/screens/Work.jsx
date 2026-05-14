import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Promopub from '../assets/work/promopub.png'
import Compilation from '../assets/work/compilation.png'
import Respondents from '../assets/work/respondents.png'
import Bea from '../assets/work/bea.png'

const Work = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  const cells = [
    { id: 'col1', src: Promopub, col: 'left' },
    { id: 'col2-top', src: null, col: 'mid' },
    { id: 'col2-bot', src: null, col: 'mid' },
    { id: 'col3', src: null, col: 'right' },
  ]

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 md:pl-80 md:pr-16 py-6 w-full h-full flex flex-col">

        <div className="flex flex-col md:flex-row gap-3 flex-1 min-h-0" style={{ maxHeight: '75vh' }}>

          <div
            className="relative rounded-xl overflow-hidden bg-white min-h-40 md:min-h-0"
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
            className="flex flex-col gap-3 min-h-0"
            style={{
                flex:
                hovered === "col2-top" || hovered === "col2-bot"
                    ? 1.3
                    : hovered !== null
                    ? 0.85
                    : 1,
                transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
                minWidth: 0,
            }}
            >
            {[
                { id: "col2-top", img: Compilation },
                { id: "col2-bot", img: Respondents },
            ].map((item) => (
                <div
                key={item.id}
                className="relative rounded-xl overflow-hidden bg-white cursor-pointer min-h-32 md:min-h-0"
                style={{
                    flex: hovered === item.id ? 1.3 : hovered !== null ? 0.85 : 1,
                    transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
                    minHeight: 0,
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                >
                <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                />
                </div>
            ))}
            </div>

          <div
            className="relative rounded-xl overflow-hidden bg-white cursor-pointer min-h-40 md:min-h-0"
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

        <p
          className="font-extrabold text-[#313131] text-right mt-4 select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          work.
        </p>

      </div>
    </div>
  )
}

export default Work