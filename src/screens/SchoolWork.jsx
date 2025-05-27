import DashboardLayout from '../components/DashboardLayout';
import { SchoolData } from '../utils/SchoolWorkData';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import twrite1 from '../assets/projects/twrite1.png'
import Carousel1 from "../Carousel/Carousel1.jsx"
import Carousel2 from '../Carousel/Carousel2.jsx';
import Carousel3 from '../Carousel/Carousel3.jsx';
import Carousel4 from '../Carousel/Carousel4.jsx';
import Carousel5 from '../Carousel/Carousel5.jsx';


const SchoolWork = () => {
  const school01 = SchoolData.find((item) => item.id === '01');
  const school02 = SchoolData.find((item) => item.id === '02'); 
  const school03 = SchoolData.find((item) => item.id === '03'); 
  const school04 = SchoolData.find((item) => item.id === '04'); 
  const school05 = SchoolData.find((item) => item.id === '05'); 
  const school06 = SchoolData.find((item) => item.id === '06'); 

  return (
    <DashboardLayout>
      <div className="h-[80px] bg-gradient-to-b from-white to-[#f1e1e2] " />
      {school01 && (
        <>
          <div className="bg-[#f1e1e2] p-5 w-full mx-auto ">
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4'>
              <h2 className="text-4xl font-bold tracking-wide mb-2 ">{school01.Title}</h2>
              </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                  
                  <span className='text-cyan-100'>Tools:</span>
                  <div className="flex gap-2">
                    {school01.Tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index}`} className="w-8 h-8 justify-center items-center" />
                    ))}
                  </div>
                  <p className="italic mb-0">
                    <span className='text-cyan-100'>Role:</span> {school01.Role}
                  </p>

                  
                </div>
                
              <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-8 p-4 items-center">
                <div className="aspect-video w-full ">
                  <LiteYouTubeEmbed
                    id="MNIjhfjVq5o"
                    title="TWRITE | Finals Project: ‘The Adventures of A Side Character!’ Animatic"
                    poster="maxresdefault"
                  />
                </div>
                <div className="w-full">
                  <Carousel1/>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="h-[250px] bg-gradient-to-b from-[#f1e1e2] to-[#414a4c]" />
      {school02 && (
        <div className="bg-[#414a4c] p-5 w-full mx-auto ">
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4'>
              <h2 className="text-4xl font-bold tracking-wide mb-2 text-white ">{school02.Title}</h2>
              </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                  <span className='text-[#d1d1d1]'>Tools:</span>
                  <div className="flex gap-2">
                    {school02.Tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index}`} className="w-11 h-8 justify-center items-center" />
                    ))}
                  </div>
                  <p className="italic mb-0 text-white">
                    <span className='text-[#d1d1d1]'>Role:</span> {school01.Role}
                  </p>

                  
                </div>
                <div className="w-full">
                  <Carousel2/>
                </div>
                </div>
                </div>
      )}

      <div className="h-[250px] bg-gradient-to-b from-[#414a4c] to-[#f9e8db] " />
      {school03 && (
        <div className="bg-[#f9e8db] p-5 w-full mx-auto ">
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4'>
              <h2 className="text-4xl font-bold tracking-wide mb-2 text-black ">{school03.Title}</h2>
              </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                  <span className='text-[#d1d1d1]'>Tools:</span>
                  <div className="flex gap-2">
                    {school03.Tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index}`} className="w-8 h-8 justify-center items-center" />
                    ))}
                  </div>
                  <p className="italic mb-0 text-white">
                    <span className='text-[#d1d1d1]'>Role:</span> {school03.Role}
                  </p>

                  
                </div>
                <div className="w-full">
                  <Carousel3/>
                </div>
                </div>
                </div>
      )}

      <div className="h-[250px] bg-gradient-to-b from-[#f9e8db] to-[#ffffff] " />
      {school04 && (
        <div className="bg-white p-5 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <h2 className="text-4xl font-bold tracking-wide text-black mb-2">
                {school04.Title}
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <span className="text-[#d1d1d1]">Tools:</span>
                <div className="flex gap-2">
                  {school04.Tools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool}
                      alt={`Tool ${index}`}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
                <p className="italic text-black">
                  <span className="text-[#d1d1d1]">Role:</span> {school03.Role}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Carousel4/>
            </div>

            </div>
          </div>
        )}
        {school05 && (
        <div className="bg-white p-5 w-full">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">

            <div className=" order-1 lg:order-2 flex flex-col items-center justify-center text-center gap-4">
              <h2 className="text-4xl font-bold tracking-wide text-black mb-2">
                {school05.Title}
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <span className="text-[#d1d1d1]">Tools:</span>
                <div className="flex gap-2">
                  {school05.Tools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool}
                      alt={`Tool ${index}`}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
                <p className="italic text-black">
                  <span className="text-[#d1d1d1]">Role:</span> {school03.Role}
                </p>
              </div>
            </div>

            <div className="order-2 lg:order-1 w-full">
              <Carousel5 />
            </div>

            </div>
          </div>
        )}
      <div className="h-[250px] bg-gradient-to-b from-[#ffffff] to-[#e9c1c4] " />
        {school06 && (
        <div className="bg-[#e9c1c4] p-5 w-full mx-auto ">
          
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4'>
              <h2 className="text-4xl font-bold tracking-wide mb-2 text-black ">{school03.Title}</h2>
              </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                  <span className='text-[#d1d1d1]'>Tools:</span>
                  <div className="flex gap-2">
                    {school06.Tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index}`} className="w-8 h-8 justify-center items-center" />
                    ))}
                  </div>
                  <p className="italic mb-0 text-white">
                    <span className='text-[#d1d1d1]'>Role:</span> {school06.Role}
                  </p>

                  
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-8 p-4 items-center">
                <div className="aspect-video w-full ">
                  <LiteYouTubeEmbed
                    id="APKZe6qrbcY"
                    title="3DANIM | Finals Project: ‘Kohi’ Commercial"
                    poster="maxresdefault"
                  />
                </div>
                </div>
                <div className="w-full">
                  <Carousel3/>
                </div>
                </div>
                </div>
      )}
    </DashboardLayout>
  );
};

export default SchoolWork;
