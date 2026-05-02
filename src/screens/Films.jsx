import logo from "../assets/icons/gabLogo.png"

const Films = ({page }) => {
  {/* change sbi ni imogen: bigger photo, bigger padding, bigger favicon, bigger middle logo, title higher margin*/}
  return (
    
    <div
      className={`
        absolute inset-0 overflow-y-auto relative
        transition-all duration-700 ease-in-out
        ${page === 0 ? 'translate-x-full opacity-0 pointer-events-none' : ''}
        ${page === 1 ? 'translate-x-0 opacity-100' : ''}
        ${page === 2 ? '-translate-x-full opacity-0 pointer-events-none' : ''}
      `}
    >
        <div className="relative flex flex-col lg:flex-row 
                        md:items-center md:justify-center
                        gap-8 px-8 md:pl-80 md:pr-16
                        py-6 w-full min-h-full items-center">

          <div className="flex flex-col w-full md:flex-1 items-center">
            <p className="text-xl md:text-2xl font-bold text-[#313131] pb-2 text-center mb-4">
              GANDA | animprod
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6fmCW29UJfw?si=TPNbbNfJoTyt6tFe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="text-left text-xs text-gray-500 pt-3 italic w-full">
              Storyboard Artist, Lead Clean-Up Artist, Head of Communications, 2D Asset Artist
            </p>
            <p className="text-left text-md pt-2 w-full mt-8">
              Ganda or Pretty, is an animation film made in collaboration with Alaya Women's Center, as a means of spreading awareness about Online Sexual Abuse and Exploitation Against Children (OSAEC).
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center flex-shrink-0">
            <img src={logo} alt="logo" className="w-56 object-contain" />
          </div>

          <div className="flex flex-col w-full md:flex-1 items-center">
            <p className="text-xl md:text-2xl font-bold text-[#313131] pb-2 text-center mb-4">
              DRIVE | capstone
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5IqF3LhLiOM?si=_6FcQWJc6yZu31xZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="text-left text-xs text-gray-500 pt-3 italic w-full">
              Storyboard Artist, Lead Clean-Up Artist, Assistant Colorist, Voice Actor
            </p>
            <p className="text-left text-md pt-2 w-full mt-6">
              DRIVE, or Demonstration of Responsible and Intelligent Vehicle Etiquette is our capstone film for Animation. It follows three characters with a branching storyline navigating their recklessness they encounter on the road.
            </p>
          </div>

        </div>
          <p
            className="fixed z-50 pointer-events-none select-none font-extrabold text-[#313131]"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              bottom: "clamp(1rem, 4vw, 4rem)",
              right: "clamp(1rem, 4vw, 5rem)",
            }}
          >
            Films.
          </p>
      </div>
  )
}

export default Films