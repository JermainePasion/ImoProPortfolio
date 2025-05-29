import React, { useState, useEffect } from 'react';
import gif1 from '../assets/gifs/gif1.gif'; 
import gif2 from '../assets/gifs/gif2.gif'; 
import gif3 from '../assets/gifs/gif3.gif'; 
import gif4 from '../assets/gifs/gif5.gif'; 
import gif5 from '../assets/gifs/gif4.gif'; 

const GifOverlay = () => {
  const gifs = [gif1, gif2, gif3, gif4, gif5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleClick = () => {
    if (overlayVisible) {
      setOverlayVisible(false); 
    } else {
      setCurrentIndex((prev) => (prev + 1) % gifs.length); 
    }
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto cursor-pointer rounded-xl overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={gifs[currentIndex]}
        alt={`GIF ${currentIndex + 1}`}
        className="w-full h-70 sm:h-180 object-cover"
      />

      {overlayVisible && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(78,80,75,0.5)] bg-opacity-50 hover:bg-opacity-75 text-white text-center transition-opacity">
          <h2 className="text-4xl font-bold tracking-widest">ANIMATIONS</h2>
          <p className="text-lg mt-2">| Click for More</p>
        </div>
      )}
    </div>
  );
};

export default GifOverlay;