import DashboardLayout from '../components/DashboardLayout';
import { SchoolData } from '../utils/SchoolWorkData';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import twrite1 from '../assets/projects/twrite1.png'

const SchoolWork = () => {
  const school01 = SchoolData.find((item) => item.id === '01');
  const school02 = SchoolData.find((item) => item.id === '02'); // if needed

  return (
    <DashboardLayout>
      {/* Top gradient */}
      <div className="h-[200px] bg-gradient-to-b from-white to-[#d9a4a8]" />

      {/* Section for school01 */}
      {school01 && (
        <>

          {/* School data display */}
          <div className="bg-[#d9a4a8] p-5 w-full mx-auto ">
            <div className='max-w-5xl mx-auto flex flex-col items-center'>
              <h2 className="text-2xl font-bold tracking-wide mb-2 ">{school01.Title}</h2>
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

              <div className=" max-w-8xl  w-full grid grid-cols-1 sm:grid-cols-2 gap-30 justify-between p-1">
                <LiteYouTubeEmbed
                  id="MNIjhfjVq5o"
                  title="TWRITE | Finals Project: ‘The Adventures of A Side Character!’ Animatic"
                  poster="maxresdefault"
                  
                />
                <img
                  src={twrite1}
                  alt="Side illustration"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* If you want to add another section like school02 */}
      {school02 && (
        <div className="bg-[#d9a4a8] p-5 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold tracking-wide mb-2">{school02.Title}</h2>
          <p className="italic mb-2">Role: {school02.Role}</p>
          <div className="flex gap-2 mb-4">
            {school02.Tools.map((tool, index) => (
              <img key={index} src={tool} alt={`Tool ${index}`} className="w-8 h-8" />
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default SchoolWork;
