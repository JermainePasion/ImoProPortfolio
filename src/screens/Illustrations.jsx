import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Promopub from "../assets/work/promopub.png"

const collages = [
  {
    id: 0,
    layout: "three-col",
    images: [Promopub, Promopub, Promopub, Promopub],
  },
  {
    id: 1,
    layout: "two-col",
    images: [Promopub, Promopub],
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
        minWidth: 0,
        minHeight: 0,
        height: "100%", // ✅ ensures image shows properly
      }}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col sm:hidden gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden bg-gray-200 w-full"
            style={{ height: "220px" }}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden sm:flex md:hidden flex-col gap-3">
        <div className="flex gap-3" style={{ height: "280px" }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img
              src={images[0]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img
              src={images[3]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex gap-3" style={{ height: "240px" }}>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img
              src={images[1]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-200 flex-1">
            <img
              src={images[2]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3" style={{ height: "70vh" }}>
        {cell("c1", images[0])}

        <div
          className="flex flex-col gap-3"
          style={{
            flex:
              hovered === "c2t" || hovered === "c2b"
                ? 1.3
                : hovered !== null
                ? 0.85
                : 1,
            transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
            minWidth: 0,
            height: "100%", // ✅ important fix
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
          <div
            key={i}
            className="relative rounded-xl overflow-hidden bg-gray-200 w-full"
            style={{ height: "250px" }}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:flex gap-3" style={{ height: "70vh" }}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
            style={{
              flex: hovered === i ? 1.3 : hovered !== null ? 0.85 : 1,
              transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)",
              minWidth: 0,
              minHeight: 0,
              height: "100%", // ✅ fix
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
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
  const navigate = useNavigate()

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
      <div className="px-4 md:pl-80 md:pr-16 py-6 w-full min-h-full flex flex-col gap-4">

        <div className="w-full" style={{ minHeight: "70vh" }}>
          {/* Collage with nav buttons */}
          <div className="flex items-center gap-2" style={{ height: "70vh" }}>

            <div
              className="flex-1"
              style={{
                height: "100%",
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${dir === "left" ? "-20px" : "20px"})`
                  : "translateX(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {collage.layout === "three-col" && (
                <ThreeColLayout images={collage.images} />
              )}
              {collage.layout === "two-col" && (
                <TwoColLayout images={collage.images} />
              )}
            </div>

            <button
              onClick={() => goTo(Math.min(current + 1, collages.length - 1))}
              disabled={current === collages.length - 1}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-20 transition-all text-lg"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {collages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-[#313131]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <p
          className="font-extrabold text-[#313131] text-right select-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          illustrations.
        </p>
      </div>
    </div>
  )
}

export default Illustrations