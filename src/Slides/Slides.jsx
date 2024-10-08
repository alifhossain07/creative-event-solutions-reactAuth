import React from 'react';
import Slide from '../components/Slide/Slide';

const Slides = ({ sliderData }) => {
  return (
    <div className=''>
      
      <div className="carousel w-full">
        {sliderData.map((slider, index) => (
          <Slide key={index} slider={slider} index={index + 1} />
        ))}
      </div>

      {/* Carousel navigation buttons */}
      <div className="flex w-full justify-center gap-4 py-2 ">
        {sliderData.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn text-white hover:bg-white hover:text-black duration-200 border-none bg-cyan-500 btn-sm lg:btn-md">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slides;
