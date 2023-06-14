"use client";
import React from 'react';
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % 4);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    const handleIndicatorClick = (index: number) => {
      setActiveIndex(index);
    };

    const handleNextClick = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % 4);
      };
      
      const handlePrevClick = () => {
        setActiveIndex((prevActiveIndex) => (prevActiveIndex - 1 + 4) % 4);
      };
  
    return (
      <div className="relative">
        {/* Carousel items */}
        <div className="carousel-inner relative w-full">
    <div className="flex justify-center">
      <button onClick={handlePrevClick} className="relative text-4xl z-10 translate-x-[-50%]">❮</button>
      <button onClick={handleNextClick} className="relative text-4xl z-10 translate-x-[-50%]">❯</button>
    </div>
          {/* First item */}
          <div className={`carousel-item absolute ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/carousel/CD_LB-05.jpg" width={800} height={400} className="block w-full" alt="Image 1" />
          </div>
          {/* Second item */}
          <div className={`carousel-item absolute ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/carousel/CD_LB-15.jpg" width={800} height={400} className="block w-full" alt="Image 2" />
          </div>
          {/* Third item */}
          <div className={`carousel-item absolute ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <Image src="/carousel/CD_LB-20.jpg" width={800} height={400} className="block w-full" alt="Image 3" />
          </div>
          <div className={`carousel-item absolute ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/carousel/CD_LB-10.jpg" width={800} height={400} className="block w-full" alt="Image 4" />
          </div>
        </div>
      </div>
    );
  };
  
export default Carousel;
