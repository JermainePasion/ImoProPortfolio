import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Guac from "../assets/merchandise/guac.png"
import Taco from "../assets/merchandise/taco.png"
import Birria from "../assets/merchandise/birria.png"
import Burrito from "../assets/merchandise/burrito.png"
import Mais from "../assets/merchandise/mais.png"
import Csm1 from "../assets/merchandise/chainsawman1.png"
import Csm2 from "../assets/merchandise/chainsawman2.png"
import Csm3 from "../assets/merchandise/chainsawman3.png"
import Csm4 from "../assets/merchandise/chainsawman4.png"
import Csm5 from "../assets/merchandise/chainsawman5.png"
import Csm6 from "../assets/merchandise/chainsawman6.png"
import Csm7 from "../assets/merchandise/chainsawman7.png"
import Csm8 from "../assets/merchandise/chainsawman8.png"
import Csm9 from "../assets/merchandise/chainsawman9.png"

const Merchandise = () => {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  const allImages = [
    Guac,
    Taco,
    Birria,
    Burrito,
    Mais,
    Csm1,
    Csm2,
    Csm3,
    Csm4,
    Csm5,
    Csm6,
    Csm7,
    Csm8,
    Csm9,
  ]

  const Cell = ({ id, src }) => (
    <div
      className="relative rounded-xl overflow-hidden bg-white cursor-pointer flex-1 min-w-0 min-h-0 transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        transform:
          hovered === id
            ? "scale(1.05)"
            : hovered !== null
            ? "scale(0.97)"
            : "scale(1)",
      }}
    >
      <img
        src={src}
        alt={id}
        className="absolute inset-0 w-full h-full object-contain p-2"
      />
    </div>
  )

  const images = {
    ll1: Guac,
    ll2: Taco,
    ll3: Birria,
    lm1: Burrito,
    lm2: Mais,
    lr1: Csm1,
    lr2: Csm2,
    lr3: Csm3,
    rl1: Csm4,
    rl2: Csm5,
    rl3: Csm6,
    rr1: Csm7,
    rr2: Csm8,
    rr3: Csm9,
  }

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 sm:px-6 md:pl-72 md:pr-12 py-4 w-full min-h-full flex flex-col">

        {/* Back Button */}
        <button
          onClick={() => navigate("/", { state: { page: 3 } })}
          className="text-sm text-gray-500 italic mb-3 text-left hover:text-gray-800 transition-colors"
        >
          ← back
        </button>

        {/* Mobile + Tablet — stacked */}
        <div className="flex flex-col lg:hidden gap-3">
          {allImages.map((src, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden bg-white w-full"
              style={{ height: "220px" }}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>

        {/* Desktop — original layout */}
        <div className="hidden lg:flex flex-col md:flex-row gap-4 w-full flex-1 min-h-0">
          {/* Left side */}
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            {[
              ["ll1", "ll2", "ll3"],
              ["lm1", "lm2"],
              ["lr1", "lr2", "lr3"],
            ].map((row, i) => (
              <div
                key={i}
                className="flex gap-3"
                style={{ flex: 1, minHeight: 0 }}
              >
                {row.map((id) => (
                  <Cell key={id} id={id} src={images[id]} />
                ))}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            {[
              ["rl1", "rl2", "rl3"],
              ["rr1", "rr2", "rr3"],
            ].map((row, i) => (
              <div
                key={i}
                className="flex gap-3"
                style={{ flex: 1, minHeight: 0 }}
              >
                {row.map((id) => (
                  <Cell key={id} id={id} src={images[id]} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Title */}
        <p
          className="font-extrabold text-[#313131] text-right mt-3 select-none leading-none"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 3rem)" }}
        >
          merchandise.
        </p>

      </div>
    </div>
  )
}

export default Merchandise