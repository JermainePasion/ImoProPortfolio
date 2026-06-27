import { useState, useEffect } from "react"
import GoodLuckBabe from "../assets/illustrations/goodLuckBabe.webp"
import GreenWoman from "../assets/illustrations/greenWoman.webp"
import Lay from "../assets/illustrations/lay.webp"
import Whisper from "../assets/illustrations/whisper.webp"
import CollageTwoPicOne from "../assets/illustrations/collageTwoPicOne.webp"
import CollageTwoPicTwo from "../assets/illustrations/collageTwoPicTwo.webp"
import Maine from "../assets/illustrations/maine.webp"
import CollageThreePicOne from "../assets/illustrations/collageThreePicOne.webp"
import CollageThreePicTwo from "../assets/illustrations/collageThreePicTwo.webp"
import CollageThreePicThree from "../assets/illustrations/collageThreePicThree.webp"
import CollageThreePicFour from "../assets/illustrations/collageThreePicFour.webp"
import CollageFourPicOne from "../assets/illustrations/collageFourPicOne.webp"
import CollageFourPicTwo from "../assets/illustrations/collageFourPicTwo.webp"
import CollageFourPicThree from "../assets/illustrations/collageFourPicThree.webp"
import CollageFourPicFour from "../assets/illustrations/collageFourPicFour.webp"

const COLLAGE_HEIGHT = '70vh'
const MOBILE_IMG_HEIGHT = '200px'
const TABLET_ROW_HEIGHT = '240px'

// Hover flex values (softened for a gentler expand/shrink)
const EXPAND = 1.15
const SHRINK = 0.9

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

// Reusable mobile single-column stack
const MobileStack = ({ images, onImageClick, contain = false }) => (
  <div className="flex flex-col sm:hidden gap-3">
    {images.map((src, i) => (
      <div
        key={i}
        onClick={() => onImageClick(src)}
        className="relative rounded-xl overflow-hidden bg-gray-200 w-full cursor-pointer"
        style={{ height: MOBILE_IMG_HEIGHT }}
      >
        <img
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full ${contain ? "object-contain" : "object-cover"}`}
        />
      </div>
    ))}
  </div>
)

const ThreeColLayout = ({ images, onImageClick }) => {
  const [hovered, setHovered] = useState(null)

  const cell = (id, src) => (
    <div
      key={id}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        flex: hovered === id ? EXPAND : hovered !== null ? SHRINK : 1,
        transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
        minWidth: 0, minHeight: 0, height: "100%",
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onImageClick(src)}
    >
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )

  return (
    <>
      <MobileStack images={images} onImageClick={onImageClick} />

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          <div onClick={() => onImageClick(images[0])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div onClick={() => onImageClick(images[3])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[3]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          <div onClick={() => onImageClick(images[1])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div onClick={() => onImageClick(images[2])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
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
            flex: hovered === "c2t" || hovered === "c2b" ? EXPAND : hovered !== null ? SHRINK : 1,
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

const TwoColLayout = ({ images, onImageClick }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <MobileStack images={images} onImageClick={onImageClick} contain />

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden gap-3" style={{ height: '420px' }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden cursor-pointer"
            style={{
              flex: hovered === i ? EXPAND : hovered !== null ? SHRINK : 1,
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: 0,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onImageClick(src)}
          >
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3" style={{ height: COLLAGE_HEIGHT }}>
        {images.map((src, i) => {
          const isHovered = hovered === i

          return (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden cursor-pointer"
              style={{
                flex: isHovered ? 1.2 : hovered !== null ? SHRINK : 1,
                transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                minWidth: 0,
                height: "100%",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onImageClick(src)}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

const ThreeColStackedLayout = ({ images, onImageClick }) => {
  const [hovered, setHovered] = useState(null)

  const cell = (id, src) => (
    <div
      key={id}
      className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
      style={{
        flex: hovered === id ? EXPAND : hovered !== null ? SHRINK : 1,
        transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
        minWidth: 0, minHeight: 0, height: "100%",
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onImageClick(src)}
    >
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )

  return (
    <>
      <MobileStack images={images} onImageClick={onImageClick} />

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          <div onClick={() => onImageClick(images[0])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div onClick={() => onImageClick(images[1])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          <div onClick={() => onImageClick(images[3])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
            <img src={images[3]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div onClick={() => onImageClick(images[4])} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
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
            flex: hovered === "sc2t" || hovered === "sc2b" ? EXPAND : hovered !== null ? SHRINK : 1,
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
            flex: hovered === "sc3t" || hovered === "sc3b" ? EXPAND : hovered !== null ? SHRINK : 1,
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

const FourColLayout = ({ images, onImageClick }) => {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Mobile — 2x2 */}
      <div className="flex flex-col sm:hidden gap-3">
        <div className="flex gap-3" style={{ height: MOBILE_IMG_HEIGHT }}>
          {images.slice(0, 2).map((src, i) => (
            <div key={i} onClick={() => onImageClick(src)} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ height: MOBILE_IMG_HEIGHT }}>
          {images.slice(2, 4).map((src, i) => (
            <div key={i} onClick={() => onImageClick(src)} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet — 2x2 */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          {images.slice(0, 2).map((src, i) => (
            <div key={i} onClick={() => onImageClick(src)} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ height: TABLET_ROW_HEIGHT }}>
          {images.slice(2, 4).map((src, i) => (
            <div key={i} onClick={() => onImageClick(src)} className="relative rounded-xl overflow-hidden bg-gray-200 flex-1 cursor-pointer">
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
              flex: hovered === i ? EXPAND : hovered !== null ? SHRINK : 1,
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: 0, height: "100%",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onImageClick(src)}
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
  const [modalImg, setModalImg] = useState(null)

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
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 md:pl-80 md:pr-16 pt-6 md:pt-8 pb-28 md:pb-36 w-full min-h-full flex flex-col gap-1">

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
            {collage.layout === "three-col" && <ThreeColLayout images={collage.images} onImageClick={setModalImg} />}
            {collage.layout === "two-col" && <TwoColLayout images={collage.images} onImageClick={setModalImg} />}
            {collage.layout === "three-col-stacked" && <ThreeColStackedLayout images={collage.images} onImageClick={setModalImg} />}
            {collage.layout === "four-col" && <FourColLayout images={collage.images} onImageClick={setModalImg} />}
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

      </div>

      <p
        className="fixed z-50 pointer-events-none select-none font-extrabold text-[#313131] leading-none"
        style={{
          fontSize: "clamp(1.6rem, 5vw, 5rem)",
          bottom: "clamp(0.6rem, 2.5vw, 2rem)",
          right: "clamp(0.6rem, 2.5vw, 3rem)",
        }}
      >
        illustrations.
      </p>

      {modalImg && <Lightbox src={modalImg} onClose={() => setModalImg(null)} />}
    </div>
  )
}

export default Illustrations