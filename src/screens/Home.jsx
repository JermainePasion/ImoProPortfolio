
import { useEffect, useState } from "react";
import DashboardLayout from '../components/DashboardLayout'
import 'react-medium-image-zoom/dist/styles.css';
import landingPhoto from "../assets/landingPhoto.png"
import AOS from "aos"
import "aos/dist/aos.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";

const Home = ({ scrolledAway }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  
  return (
    <div
      className={`
        absolute inset-0 transition-all duration-700 ease-in-out
        ${scrolledAway
          ? 'translate-x-full opacity-0 pointer-events-none'
          : 'translate-x-0 opacity-100'}
      `}
    >
      <DashboardLayout>
        <div className="flex flex-col md:grid md:grid-cols-2 items-center w-full p-4 md:p-6 gap-6 md:gap-0 mt-25">
          <section className="flex flex-col items-center justify-center text-center order-2 md:order-1 md:-mr-5">
            <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#313131]">
              <b>imo</b> ignacio
            </h2>
            <p className="font-bold text-[#313131] text-sm sm:text-base md:text-lg -mt-1 sm:-mt-2 md:-mt-3">
              creative illustrator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              and graphic designer
            </p>
          </section>
          <section className="order-1 md:order-2 w-full px-4 md:px-0 flex flex-col items-center">

            <img
              className="rounded-3xl w-full object-cover md:-ml-6"
              src={landingPhoto}
            />
            <div className="flex justify-center gap-5 md:gap-20 w-full mt-3">
              <a href="#" className="social-icon">
                <LuFacebook size={30} />
              </a>
              <a href="#" className="social-icon">
                <FaSquareXTwitter size={30} />
              </a>
              <a href="mailto:your@email.com" className="social-icon">
                <MdOutlineEmail size={30} />
              </a>
              <a href="#" className="social-icon">
                <LuLinkedin size={30} />
              </a>
              <a href="#" className="social-icon">
                <SlSocialInstagram size={30} />
              </a>
            </div>
          </section>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Home