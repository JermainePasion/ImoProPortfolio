import { useState } from "react"

// Slide 1 — the three vertical videos.
const videos = [
  {
    title: "Baby, This is Keke Palmer | PODCAST",
    src: "https://www.youtube.com/embed/kWHu7mhnYpc?rel=0&modestbranding=1&playsinline=1",
    roles: "Edited for Portfolio Purposes only",
  },
  {
    title: "WE'RE EMC | SCHOOL REEL",
    src: "https://www.youtube.com/embed/wnEjHB8iR6U?rel=0&modestbranding=1&playsinline=1",
    roles: "",
  },
  {
    title: "The Basement Yard | PODCAST",
    src: "https://www.youtube.com/embed/T8hJE5Eg07k",
    roles: "Edited for Portfolio Purposes only",
  },
]

// Slide 2 — the single featured video. Swap this src for any video.
const featured = {
  title: "BAD IDEA | FAN MV",
  src: "https://www.youtube.com/embed/4zV5DQ8k8uU?rel=0&modestbranding=1&playsinline=1",
  roles: "",
}

const SLIDE_COUNT = 2

const VideoCard = ({ video, aspect = "aspect-[9/16]", wrapClass = "" }) => (
  <div className={`flex flex-col items-center ${wrapClass}`}>
    <p className="text-xl md:text-2xl font-bold text-[#313131] mb-4 text-center min-h-[3.5rem] md:min-h-[4rem] flex items-end justify-center">
      {video.title}
    </p>
    <div className={`relative w-full ${aspect} rounded-xl overflow-hidden shadow-md bg-black`}>
      <iframe
        className="absolute inset-0 w-full h-full border-0"
        src={video.src}
        title="video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
    <p className="text-left text-xs text-gray-500 pt-3 italic w-full">
      {video.roles}
    </p>
  </div>
)

const VideoEdits = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [dir, setDir] = useState(null)

  const goTo = (next) => {
    if (animating || next === current) return
    setDir(next > current ? "left" : "right")
    setAnimating(true)
    setTimeout(() => {
      setCurrent(next)
      setAnimating(false)
      setDir(null)
    }, 300)
  }

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="px-4 md:pl-80 md:pr-16 pt-6 md:pt-8 pb-28 md:pb-36 w-full min-h-full flex flex-col gap-1">

        <div className="flex items-center gap-2 flex-1">
          <button
            onClick={() => goTo(Math.max(current - 1, 0))}
            disabled={current === 0}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-20 transition-all text-lg"
          >
            ‹
          </button>

          <div
            className="flex-1 flex items-center justify-center"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? `translateX(${dir === "left" ? "-20px" : "20px"})` : "translateX(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {current === 0 ? (
              <div className="flex flex-col lg:flex-row md:items-start md:justify-center gap-10 w-full items-center">
                <VideoCard video={videos[0]} wrapClass="w-full max-w-[18rem] md:flex-1" />
                <VideoCard video={videos[1]} wrapClass="w-full max-w-[18rem] md:flex-1" />
                <VideoCard video={videos[2]} wrapClass="w-full max-w-[18rem] md:flex-1" />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <VideoCard video={featured} aspect="aspect-video" wrapClass="w-full max-w-2xl" />
              </div>
            )}
          </div>

          <button
            onClick={() => goTo(Math.min(current + 1, SLIDE_COUNT - 1))}
            disabled={current === SLIDE_COUNT - 1}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-20 transition-all text-lg"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
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
        video edits.
      </p>
    </div>
  )
}

export default VideoEdits