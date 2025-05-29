import React,{useEffect} from 'react'
import portrait1 from "../assets/images/portrait1.jpg"
import portrait2 from "../assets/images/portrait2.jpg"
import portrait3 from "../assets/images/portrait3.jpg"
import portrait4 from "../assets/images/portrait4.jpg"

import AOS from "aos"
import "aos/dist/aos.css";
import DashboardLayout from '../components/DashboardLayout';
import GifOverlay from '../components/GifOverlay';
import { CommissionData } from '../utils/CommissionData'
const GeneralWork = () => {
    useEffect(()=>{
      AOS.init({duration:1200})
    })
  return (
    <DashboardLayout>
      <div className='p-5'>
        <div data-aos="zoom-in">
        <GifOverlay/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4 mt-25'>
              <h2 className="text-5xl tracking-wider mb-2 text-black " data-aos="fade-down">Hand-Drawn Portraits</h2>
        </div>
        <hr className="my-2 border-t border-gray-300" />

        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center mx-auto gap-8 p-4 max-w-7xl'>
          <img data-aos="fade-right"
          src={portrait1}
          className='mx-auto w-full'
          />
          <img data-aos="fade-left"
          src={portrait2}
          className='mx-auto w-full'
          />
          <img data-aos="fade-right"
            src={portrait3}
            className="w-full p-5 mb-0 sm:mb-30"
          />
          <img data-aos="fade-left"
          src={portrait4}
          className='w-full p-5'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4 mt-25'>
              <h2 className="text-4xl  tracking-wider mb-2 text-black " >Commissioned Works</h2>
        </div>
        <hr className="my-2 border-t border-gray-300" />
      
      {CommissionData.map((commission)=> (
        <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4'>
              {commission.id === "01" && (
                <>

                <div className='mt-10 p-5 '>
                  <div className='flex justify-center items-center mx-auto p-5'>
                    <img data-aos="fade-down"
                      className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-5xl h-auto rounded-md'
                      src={commission.ArtWork}
                      alt='Commission Artwork'
                    />
                  </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-4 justify-between w-full px-2" data-aos="fade-up">
                      <span>
                        Commissioned by: <b className="italic">{commission.Handle}</b>
                      </span>
                      <span>
                        Date Accomplished: <b className="italic">{commission.Date}</b>
                      </span>
                    </div>

                    <div className="mt-7 lg:max-w-7xl px-2 " data-aos="fade-up">
                      <p className="text-[#a6a6a6]">{commission.Description}</p>
                    </div>
                </div>

                
                </>
              )}
              {commission.id === "02" && (
                <>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
                
                            <div className=" order-1 lg:order-2 flex flex-col items-center justify-center  gap-4 ">

                
                              <div className="w-full text-center lg:text-right px-4 order-2 lg:order-2" data-aos="fade-left">
                                <p>
                                  Commissioned by: <b className="italic">{commission.Handle}</b>
                                </p>
                                <p>
                                  Date Accomplished: <b className="italic">{commission.Date}</b>
                                </p>
                                <p className="italic text-[#a6a6a6] mt-2">
                                  {commission.Description}
                                </p>
                              </div>

                            </div>
                
                            <div className="flex flex-col items-center order-1 lg:order-1 w-full px-4 sm:px-6 lg:px-8" data-aos="fade-right">
                              <img
                                src={commission.ArtWork}
                                className="w-full max-w-3xl rounded-md"
                                alt="Commission Artwork"
                              />
                            </div>
                
                            </div>

                
                </>
              )}
              {commission.id === "03" && (
                      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 mt-5 pb-15">

                        <div className="order-2 lg:order-1 flex flex-col items-center justify-center text-center gap-4 w-full">
                          <div className="w-full text-center sm:text-left px-4 order-2 lg:order-2" data-aos="fade-right">
                                <p>
                                  Commissioned by: <b className="italic">{commission.Handle}</b>
                                </p>
                                <p>
                                  Date Accomplished: <b className="italic">{commission.Date}</b>
                                </p>
                                <div className="flex gap-2 justify-center sm:justify-start mt-2" data-aos="zoom-in">
                                </div>
                                <p className="italic text-[#a6a6a6] mt-2">
                                  {commission.Description}
                                </p>
                              </div>
                        </div>


                        <div className="flex flex-col items-center order-1 lg:order-2 w-full px-4 sm:px-6 lg:px-8" data-aos="fade-left">
                          <img src={commission.ArtWork} className='rounded-md w-full max-w-3xl ' />
                        </div>
                      </div>
                      
                      )}
                      
              
        </div>
        
        
        
        

      ))}

    </DashboardLayout>
  )
}

export default GeneralWork