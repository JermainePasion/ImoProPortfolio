import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";

const StickyCard = ({ visible }) => {
  return (
    <div
      className={`
        fixed top-6 left-6 w-72 h-[calc(100vh-3rem)]
        bg-white rounded-3xl shadow-xl border border-gray-100
        flex flex-col p-6 gap-4
        transition-all duration-700 ease-in-out
        ${visible
            ? 'translate-x-0 opacity-100'
            : '-translate-x-[110%] opacity-0 pointer-events-none'}
        `}
      style={{ transitionDelay: visible ? '150ms' : '0ms' }}
    >

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg">
          II
        </div>
        <div>
          <p className="font-semibold text-[#313131] text-sm leading-tight">imo ignacio</p>
          <p className="text-xs text-gray-400">creative illustrator</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 flex flex-col gap-3 flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Navigation</p>
        {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
          <button
            key={item}
            className="text-left text-sm text-[#313131] hover:text-gray-500 transition-colors py-1"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <LuFacebook size={18} className="text-gray-400 hover:text-[#313131] cursor-pointer transition-colors" />
        <FaSquareXTwitter size={18} className="text-gray-400 hover:text-[#313131] cursor-pointer transition-colors" />
        <MdOutlineEmail size={18} className="text-gray-400 hover:text-[#313131] cursor-pointer transition-colors" />
        <LuLinkedin size={18} className="text-gray-400 hover:text-[#313131] cursor-pointer transition-colors" />
        <SlSocialInstagram size={18} className="text-gray-400 hover:text-[#313131] cursor-pointer transition-colors" />
      </div>
    </div>
  )
}

export default StickyCard