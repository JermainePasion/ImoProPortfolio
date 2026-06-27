import logo from "../assets/icons/gabLogo.png"

const Films = () => {
  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="relative flex flex-col lg:flex-row 
              md:items-start md:justify-center
              gap-6 px-4 sm:px-8 md:pl-64 md:pr-8
              pt-6 pb-28 md:pb-36
              w-full min-h-full items-center">

        <div className="flex flex-col w-full md:flex-1 items-center">
          <p className="text-xl md:text-2xl font-bold text-[#313131] pb-2 text-center mb-4">
            GANDA | animprod
          </p>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6fmCW29UJfw?si=TPNbbNfJoTyt6tFe"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-left text-xs text-gray-500 pt-3 italic w-full min-h-[3rem]">
            Storyboard Artist, Lead Clean-Up Artist, Head of Communications, 2D Asset Artist
          </p>
          <p className="text-left text-md pt-2 w-full mt-4">
            Ganda or Pretty, is an animation film made in collaboration with Alaya Women's Center, as a means of spreading awareness about Online Sexual Abuse and Exploitation Against Children (OSAEC).
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center flex-shrink-0 self-center lg:-mx-4">
          <img src={logo} alt="logo" className="w-72 object-contain" />
        </div>

        <div className="flex flex-col w-full md:flex-1 items-center">
          <p className="text-xl md:text-2xl font-bold text-[#313131] pb-2 text-center mb-4">
            DRIVE | capstone
          </p>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5IqF3LhLiOM?si=_6FcQWJc6yZu31xZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-left text-xs text-gray-500 pt-3 italic w-full min-h-[3rem]">
            Storyboard Artist, Lead Clean-Up Artist, Assistant Colorist, Voice Actor
          </p>
          <p className="text-left text-md pt-2 w-full mt-4">
            DRIVE, or Demonstration of Responsible and Intelligent Vehicle Etiquette is our capstone film for Animation. It follows three characters with a branching storyline navigating their recklessness they encounter on the road.
          </p>
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
        films.
      </p>
    </div>
  )
}

export default Films