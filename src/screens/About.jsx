import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import imoabout from "../assets/images/imoabout.png"
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const About = () => {
  return (
    <DashboardLayout>

        <div className='space-y-4 mt-15 max-w-5xl mx-auto p-5'>
          <h1 className='font-bold text-2xl tracking-wide'>I am Imogen Ignacio.</h1>
          <div className='flex flex-col md:flex-row items-center gap-6 max-w-7xl mx-auto sm:text-left'>
            <div className=''>
              <p className='mb-5' style={{ fontFamily: "'PT Sans', sans-serif" }}>She is an incoming fourth-year student, studying for a Bachelor of Science in Entertainment and Multimedia Computing with an Area of Specialization in Digital Animation, at Holy Angel University in Angeles City.</p>
              <p className='mb-5' style={{ fontFamily: "'PT Sans', sans-serif" }}>She aims to work in the gaming and film industry where she can design characters and backgrounds. Not only that, but she would like to work on marketing digitally as well for a cosmetic company, such as modeling products, and creating art campaigns.</p>
              <p style={{ fontFamily: "'PT Sans', sans-serif" }}>Besides that, Imogen continues to practice and focus on her fundamentals in art, while continuously building up her portfolio for viewers, and future employers to see. Her biggest goal is to create a story whether comic or animated by either leading a team or doing it by herself.</p>
            </div>
            <div className="flex flex-col items-right w-full px-4 sm:px-6 lg:px-8">
              <img src={imoabout} className='rounded-md w-full max-w-5xl ' />
            </div>
          </div>    
          <div className='grid grid-cols-4 place-items-center text-3xl mt-10'>
            <a href='https://www.linkedin.com/in/imogen-dasha-ignacio-8888202a3/' target='_blank'><FaLinkedin/></a>
            <a href='https://x.com/1mo6en' target='_blank'><FaXTwitter/></a>
            <a href='https://www.facebook.com/emowwwwwwww' target='_blank'><FaFacebookSquare/></a>
            <a href='https://www.instagram.com/immi._ily/' target='_blank'><LuInstagram/></a>
            
          </div>
        </div>
        

    </DashboardLayout>
  )
}

export default About