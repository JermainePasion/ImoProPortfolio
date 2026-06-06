import { useState } from "react"
import GoodLuckBabe from "../assets/illustrations/goodLuckBabe.png"
import GreenWoman from "../assets/illustrations/greenWoman.jpg"
import Lay from "../assets/illustrations/lay.png"
import Whisper from "../assets/illustrations/whisper.png"
import CollageTwoPicOne from "../assets/illustrations/collageTwoPicOne.png"
import CollageTwoPicTwo from "../assets/illustrations/collageTwoPicTwo.jpg"
import Maine from "../assets/illustrations/maine.png"
import CollageThreePicOne from "../assets/illustrations/collageThreePicOne.png"
import CollageThreePicTwo from "../assets/illustrations/collageThreePicTwo.png"
import CollageThreePicThree from "../assets/illustrations/collageThreePicThree.png"
import CollageThreePicFour from "../assets/illustrations/collageThreePicFour.png"
import CollageFourPicOne from "../assets/illustrations/collageFourPicOne.png"
import CollageFourPicTwo from "../assets/illustrations/collageFourPicTwo.png"
import CollageFourPicThree from "../assets/illustrations/collageFourPicThree.png"
import CollageFourPicFour from "../assets/illustrations/collageFourPicFour.png"


const COLLAGE_HEIGHT = '60vh'

const collages = [
  { id: 0, layout: "three-col", images: [GoodLuckBabe, Whisper, Lay, GreenWoman] },
  { id: 1, layout: "two-col", images: [CollageTwoPicOne, CollageTwoPicTwo] },
  {
    id: 2,
    layout: "three-col-stacked",
    images: [Maine, CollageThreePicOne, CollageThreePicThree, CollageThreePicTwo, CollageThreePicFour],
  },
  {
    id: 3,
    layout: "four-col",
    images: [CollageFourPicOne, CollageFourPicTwo, CollageFourPicThree, CollageFourPicFour],
  },
]

const ThreeColLayout = ({ images }) => {
  const [hovered, setHovered] = useState(null)

  const cell = (id, src) => (
    <div
      key={id}
      className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
      style={{
        flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
        transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
        minWidth: 0, minHeight: 0, height: "100%",
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col sm:hidden gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 w-full" style={{ height: '180px' }}>
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: '220px' }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[3]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-3" style={{ height: '200px' }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[2]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3" style={{ height: COLLAGE_HEIGHT }}>
        {cell("c1", images[0])}
        <div
          className="flex flex-col gap-3"
          style={{
            flex: hovered === "c2t" || hovered === "c2b" ? 1.3 : hovered !== null ? 0.85 : 1,
            transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
            minWidth: 0, height: "100%",
          }}
        >
          {cell("c2t", images[1])}
          {cell("c2b", images[2])}
        </div>
        {cell("c3", images[3])}
      </div>
    </>
  )
}

const TwoColLayout = ({ images }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col sm:hidden gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 w-full" style={{ height: '180px' }}>
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden gap-3" style={{ height: '420px' }}>
        {images.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3" style={{ height: COLLAGE_HEIGHT }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden cursor-pointer"
            style={{
              flex: hovered === i ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: 0, height: "100%",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </>
  )
}

const ThreeColStackedLayout = ({ images }) => {
  const [hovered, setHovered] = useState(null)

  const cell = (id, src) => (
    <div
      key={id}
      className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
      style={{
        flex: hovered === id ? 1.3 : hovered !== null ? 0.85 : 1,
        transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
        minWidth: 0, minHeight: 0, height: "100%",
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col sm:hidden gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 w-full" style={{ height: '180px' }}>
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: '220px' }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-3" style={{ height: '200px' }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[3]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img src={images[4]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3" style={{ height: COLLAGE_HEIGHT }}>
        {cell("sc1", images[0])}
        <div
          className="flex flex-col gap-3"
          style={{
            flex: hovered === "sc2t" || hovered === "sc2b" ? 1.3 : hovered !== null ? 0.85 : 1,
            transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
            minWidth: 0, height: "100%",
          }}
        >
          {cell("sc2t", images[1])}
          {cell("sc2b", images[2])}
        </div>
        <div
          className="flex flex-col gap-3"
          style={{
            flex: hovered === "sc3t" || hovered === "sc3b" ? 1.3 : hovered !== null ? 0.85 : 1,
            transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
            minWidth: 0, height: "100%",
          }}
        >
          {cell("sc3t", images[3])}
          {cell("sc3b", images[4])}
        </div>
      </div>
    </>
  )
}

const FourColLayout = ({ images }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Mobile — 2x2 */}
      <div className="flex flex-col sm:hidden gap-3">
        <div className="flex gap-3" style={{ height: '220px' }}>
          {images.slice(0, 2).map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ height: '220px' }}>
          {images.slice(2, 4).map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet — 2x2 */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: '240px' }}>
          {images.slice(0, 2).map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ height: '240px' }}>
          {images.slice(2, 4).map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 4 columns */}
      <div className="hidden md:flex gap-3" style={{ height: COLLAGE_HEIGHT }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
            style={{
              flex: hovered === i ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: 0, height: "100%",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  )
}

const Illustrations = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [dir, setDir] = useState(null)

  const goTo = (next) => {
    if (animating) return
    setDir(next > current ? "left" : "right")
    setAnimating(true)
    setTimeout(() => {
      setCurrent(next)
      setAnimating(false)
      setDir(null)
    }, 300)
  }

  const collage = collages[current]

  return (
    <div className="absolute inset-0 overflow-y-hidden">
      <div className="px-4 md:pl-80 md:pr-16 py-6 w-full min-h-full flex flex-col gap-1">

        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(Math.max(current - 1, 0))}
            disabled={current === 0}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-20 transition-all text-lg"
          >
            ‹
          </button>

          <div
            className="flex-1"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? `translateX(${dir === "left" ? "-20px" : "20px"})` : "translateX(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {collage.layout === "three-col" && <ThreeColLayout images={collage.images} />}
            {collage.layout === "two-col" && <TwoColLayout images={collage.images} />}
            {collage.layout === "three-col-stacked" && <ThreeColStackedLayout images={collage.images} />}
            {collage.layout === "four-col" && <FourColLayout images={collage.images} />}
          </div>

          <button
            onClick={() => goTo(Math.min(current + 1, collages.length - 1))}
            disabled={current === collages.length - 1}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-20 transition-all text-lg"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-1">
          {collages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#313131]" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <p
          className="font-extrabold text-[#313131] text-right mt-1 select-none"
          style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
        >
          illustrations.
        </p>

      </div>
    </div>
  )
}

export default Illustrations