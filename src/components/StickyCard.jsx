import { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imoAbout from "../assets/images/imoAbout.svg"
import paperBackground from "../assets/images/paperBackground.png"

const StickyCard = ({ visible }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
    {/* notes: more centered, taller length,*/}

      <div
        className={`
          fixed top-45 left-0 w-60 h-120
          rounded-r-3xl shadow-xl border-r border-gray-100
          bg-[#F5F0D8]
          flex flex-col p-4 gap-3
          transition-all duration-700 ease-in-out
          overflow-visible
          z-40
          ${visible
            ? 'md:translate-x-0 ' + (mobileOpen ? 'translate-x-0' : '-translate-x-full')
            : '-translate-x-full opacity-0 pointer-events-none'}
        `}
      >

        <div
          className="absolute inset-0 bg-cover bg-center rounded-r-3xl overflow-hidden"
          style={{ backgroundImage: `url(${paperBackground})`, opacity: '50%' }}
        />
        <div
          className="absolute inset-0 rounded-r-3xl overflow-hidden"
          style={{ backgroundColor: '#FDFF92', opacity: '50%' }}
        />
        {visible && (
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden absolute -right-7 top-1/2 -translate-y-1/2 z-50
                       bg-white border border-gray-200 shadow-md
                       rounded-r-xl px-1 py-3 flex items-center justify-center"
          >
            {mobileOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        )}

        <div className="relative z-10 flex flex-col gap-3 h-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-2xl">hello!</h1>
            <h1 className="font-bold text-sm mt-1">I am Imo Ignacio.</h1>
            <p className="text-left mt-2 text-xs italic text-[#313131]">I am a 22-year-old, a fresh BS-EMC graduate of Holy Angel University.</p>
            <p className="text-left mt-2 text-xs italic text-[#313131]">A creative illustrator interested in visual development, book covers, and song lyric posters.</p>
            <p className="text-left mt-2 text-xs italic text-[#313131]">Open to all possibilities in art, typography, and graphic design.</p>
          </div>

          <div className="flex items-center justify-center">
            <img src={imoAbout} className="w-24 h-auto" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/emowwwwwwww" className="social-icon" target="_blank">
              <LuFacebook size={16} className="hover:text-[#313131] cursor-pointer transition-colors" />
            </a>
            <a href="https://x.com/1mo6en" className="social-icon" target="_blank">
              <FaSquareXTwitter size={16} className="hover:text-[#313131] cursor-pointer transition-colors" />
            </a>
            <a href="mailto:your@email.com" className="social-icon" target="_blank">
              <MdOutlineEmail size={16} className="hover:text-[#313131] cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/imogen-dasha-ignacio/" className="social-icon" target="_blank">
              <LuLinkedin size={16} className="hover:text-[#313131] cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/1mo6en_n/" className="social-icon" target="_blank">
              <SlSocialInstagram size={16} className="hover:text-[#313131] cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyCard