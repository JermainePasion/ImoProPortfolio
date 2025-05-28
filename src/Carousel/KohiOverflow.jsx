import React from 'react';
import Kohi1 from "../assets/projects/Kohi1.png";
import Kohi2 from "../assets/projects/Kohi2.png";
import Kohi3 from "../assets/projects/Kohi3.png";
import Kohi4 from "../assets/projects/Kohi4.png";
import Kohi6 from "../assets/projects/Kohi6.png";
import Kohi7 from "../assets/projects/Kohi7.png";
import Kohi8 from "../assets/projects/Kohi8.png";
import Kohi9 from "../assets/projects/Kohi9.png";
import Kohi10 from "../assets/projects/Kohi10.png";
import Kohi11 from "../assets/projects/Kohi11.png";

const images = [Kohi1, Kohi2, Kohi3, Kohi4, Kohi6, Kohi7, Kohi8, Kohi9, Kohi10, Kohi11];

const Kohiflow = () => {
  return (
    <div className="relative mt-32">
      <ul className="mt-10 pb-8 px-4 w-full flex gap-8 snap-x overflow-x-auto">
        {images.map((imgSrc, idx) => (
          <li key={idx} className="snap-center">
            <div className="relative flex-shrink-0 max-w-[45vw] max-h-[25vw] overflow-hidden rounded-3xl">
              <img
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                className="absolute inset-0 object-cover object-bottom w-full h-full"
              />
              <div className="absolute inset-0 w-full h-full"></div>
              <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kohiflow;
