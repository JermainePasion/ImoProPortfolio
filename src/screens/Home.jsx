
import { useEffect, useState } from "react";
import DashboardLayout from '../components/DashboardLayout'
import 'react-medium-image-zoom/dist/styles.css';
import landingPhoto from "../assets/landingPhoto.png"
import AOS from "aos"
import "aos/dist/aos.css";

const Home = () => {

useEffect(() => {
  AOS.init({ duration: 1200 });
  AOS.refresh();
}, []);
  
  return (
  <DashboardLayout>
    <div className="flex flex-col md:grid md:grid-cols-2 items-center w-full p-4 md:p-6 gap-6 md:gap-0">
      <section className="flex flex-col items-center justify-center text-center order-2 md:order-1">
        <h2 className="text-4xl sm:text-5xl md:text-7xl text-[#313131]">
          <b>imo</b> ignacio
        </h2>
        <p className="font-bold text-[#313131] text-sm sm:text-base md:text-lg -mt-1 sm:-mt-2 md:-mt-3">
          creative illustrator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          and graphic designer
        </p>
      </section>
      <section className="order-1 md:order-2 w-full px-4 md:px-0">
        <img className="rounded-3xl w-full object-cover" src={landingPhoto} />
      </section>
    </div>
  </DashboardLayout>
  )
}

export default Home