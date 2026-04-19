import logo from "../assets/icons/gabLogo.png"

const Films = ({ scrolledAway }) => {
  return (
    <div
      className={`
        absolute inset-0 flex flex-col items-center justify-center overflow-y-auto
        transition-all duration-700 ease-in-out
        ${scrolledAway
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 md:pl-80 md:pr-12 w-full justify-center py-8">

        <div className="flex flex-col w-full md:w-auto md:flex-1 items-center">
          <p className="text-2xl font-bold text-[#313131] p-4 pb-2 text-center">GANDA | animprod</p>
          <iframe
            className="w-full h-48 md:h-60 shadow-lg rounded-3xl"
            src="https://www.youtube.com/embed/CAsKkFjBIEo?si=MP78O2C5pNUqMiO8"
            title="GANDA | animprod"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="text-left text-xs text-gray-500 p-4 italic">Storyboard Artist, Lead Clean-Up Artist, Head of Communications, 2D Asset Artist</p>
          <p className="text-left text-xs p-4">Ganda or Pretty, is an animation film made in collaboration with Alaya Women's Center, as a means of spreading awareness about Online Sexual Abuse and Exploitation Against Children (OSAEC).</p>
        </div>

        <div className="flex items-center justify-center flex-shrink-0 md:self-center">
          <img src={logo} alt="logo" className="w-24 md:w-40 object-contain" />
        </div>

        <div className="flex flex-col w-full md:w-auto md:flex-1 items-center">
          <p className="text-2xl font-bold text-[#313131] p-4 pb-2 text-center">DRIVE | capstone</p>
          <iframe
            className="w-full h-48 md:h-60 shadow-lg rounded-3xl"
            src="https://www.youtube.com/embed/9gr45EIsHLU?si=t9MFoOU_ZMrAHOko"
            title="DRIVE | capstone"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="text-left text-xs text-gray-500 p-4 italic">Storyboard Artist, Lead Clean-Up Artist, Assistant Colorist, Voice Actor</p>
          <p className="text-right text-xs p-4">DRIVE, or Demonstration of Responsible and Intelligent Vehicle Etiquette is our capstone film for Animation. It follows three characters with a branching storyline navigating their recklessness they encounter on the road.</p>
        </div>

      </div>
    </div>
  )
}

export default Films