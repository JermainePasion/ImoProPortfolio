import React, { useState, useEffect, useRef } from "react";
import adv1 from '../assets/projects/adv1.png';
import adv2 from '../assets/projects/adv2.png';
import adv3 from '../assets/projects/adv3.png';
import adv4 from '../assets/projects/adv4.png';



const images = [adv1, adv2, adv3, adv4];

export default function Carousel3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Clear and restart timer
  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex]);

  // Handlers for arrows
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="max-w-8xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="whitespace-nowrap transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="inline-block w-full  select-all"
              draggable={false}
            />
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[rgba(249,232,219,0.5)] bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[rgba(249,232,219,0.5)] bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 focus:outline-none"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-[rgba(249,232,219,0.5)]" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
