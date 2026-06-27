// Swap VIDEO_ID_1 / _2 / _3 for your real YouTube (Shorts work too) video IDs,
// and edit the title / roles fields below.
const videos = [
  {
    title: "TEMPLATE ONE | category",
    src: "https://www.youtube.com/embed/G4F56XkaGzk?si=I6uFIztruFwMZDIN",
    roles: "Editor, Motion Graphics, Sound Design",
  },
  {
    title: "TEMPLATE TWO | category",
    src: "https://www.youtube.com/embed/G4F56XkaGzk?si=I6uFIztruFwMZDIN",
    roles: "Editor, Color Grade, Sound Design",
  },
  {
    title: "TEMPLATE THREE | category",
    src: "https://www.youtube.com/embed/G4F56XkaGzk?si=I6uFIztruFwMZDIN",
    roles: "Editor, Motion Graphics, Voice Over",
  },
]

const VideoEdits = () => {
  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="relative flex flex-col lg:flex-row
              md:items-start md:justify-center
              gap-25 px-4 sm:px-8 md:pl-80 md:pr-16
              pt-6 pb-28 md:pb-36
              w-full min-h-full items-center">

        {videos.map((video, i) => (
          <div
            key={i}
            className="flex flex-col w-full max-w-[18rem] md:flex-1 items-center"
          >
            <p className="text-xl md:text-2xl font-bold text-[#313131] pb-2 text-center mb-4">
              {video.title}
            </p>
            <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src={video.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="text-left text-xs text-gray-500 pt-3 italic w-full">
              {video.roles}
            </p>
          </div>
        ))}

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