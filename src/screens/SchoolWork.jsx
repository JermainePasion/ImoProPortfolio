import DashboardLayout from '../components/DashboardLayout';
import { SchoolData } from '../utils/SchoolWorkData';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import twrite1 from '../assets/projects/twrite1.png'
import Carousel1 from "../Carousel/Carousel1.jsx"


const SchoolWork = () => {
  const school01 = SchoolData.find((item) => item.id === '01');
  const school02 = SchoolData.find((item) => item.id === '02'); // if needed

  return (
    <DashboardLayout>
      <div className="h-[80px] bg-gradient-to-b from-white to-[#f1e1e2] " />
      {school01 && (
        <>
          <div className="bg-[#f1e1e2] p-5 w-full mx-auto ">
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
              <h2 className="text-4xl font-bold tracking-wide mb-2 ">{school01.Title}</h2>
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
      <div className="h-[250px] bg-gradient-to-b from-[#f1e1e2] to-[#0e1111]" />

      {school02 && (
        <div className="bg-[#0e1111] p-5 w-full mx-auto">
          <div className='max-w-7xl mx-auto flex flex-col items-center'>
          <h2 className="text-2xl font-bold tracking-wide mb-2 text-white">{school02.Title}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                  <span className='text-cyan-100'>Tools:</span>
                  <div className="flex gap-2">
                    {school02.Tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index}`} className="w-8 h-8 justify-center items-center" />
                    ))}
                  </div>
                  <p className="italic mb-0 text-white">
                    <span className='text-cyan-100'>Role:</span> {school01.Role}
                  </p>

                  
                </div>
                </div>
                </div>
      )}
      
    </DashboardLayout>
  );
};

export default SchoolWork;
