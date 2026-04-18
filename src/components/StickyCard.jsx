import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import imoAbout from "../assets/images/imoAbout.svg"
import paperBackground from "../assets/images/paperBackground.png"

const StickyCard = ({ visible }) => {
  return (
    <div
  className={`
    fixed top-10 left-0 w-72
    rounded-r-3xl shadow-xl border-r border-gray-100
    flex flex-col p-6 gap-4
    transition-all duration-700 ease-in-out
    overflow-hidden relative
    ${visible
        ? 'translate-x-0 opacity-100'
        : '-translate-x-full opacity-0 pointer-events-none'}
  `}
  style={{ transitionDelay: visible ? '150ms' : '0ms' }}
>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${paperBackground})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${paperBackground})`, backgroundColor: '#FDFF92', opacity:'50%' }}
      />

    <div className="relative z-10 flex flex-col gap-4 h-full"> 
        <div className="flex flex-col items-center gap-3  text-center">
          <section>
            <h1 className="font-bold text-4xl">hello!</h1>
            <h1 className="font-bold text-1xl mt-2">I am Imo Ignacio.</h1>
            <p className="text-left mt-3 text-xs italic text-[#313131]">I am a 22-year-old, a fresh Bachelor of Science in Entertainment and Multimedia Computing (BS-EMC) graduate of Holy Angel University.</p>
            <p className="text-left mt-3 text-xs italic text-[#313131]">I  am a creative illustrator who desires to keep on learning and improve in other art mediums! Currently, I am interested in the visual development of stories, designing book covers, and emulating posters for song lyrics.</p>
            <p className="text-left mt-3 text-xs italic text-[#313131]">Whether it be fundamentals in art, typography, graphicdesign, I am open to all possibilities and opportunities.</p>
          </section>
        </div>

        <div className="flex items-center justify-center">
            <img src={imoAbout}/>
        </div>

        <div className="flex items-center justify-center gap-6 ">
          <LuFacebook size={18} className=" hover:text-[#313131] cursor-pointer transition-colors" />
          <FaSquareXTwitter size={18} className=" hover:text-[#313131] cursor-pointer transition-colors" />
          <MdOutlineEmail size={18} className=" hover:text-[#313131] cursor-pointer transition-colors" />
          <LuLinkedin size={18} className=" hover:text-[#313131] cursor-pointer transition-colors" />
          <SlSocialInstagram size={18} className=" hover:text-[#313131] cursor-pointer transition-colors" />
        </div>
      </div>
    </div>     
  )
}

export default StickyCard