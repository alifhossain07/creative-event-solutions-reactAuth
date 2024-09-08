import React from 'react';

const Slide = ({ slider, index }) => {
  const { img, title, short_details } = slider;

  return (
    <div id={`item${index}`} className="carousel-item w-full h-[550px] mt-5 rounded-2xl relative flex justify-center items-center">
      {/* Image for the slide */}
      <img src={img} className="w-full rounded-2xl h-full object-cover" alt={title} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 rounded-2xl"></div>

      {/* Overlay content for the slide */}
      <div className="absolute text-center space-y-5   p-4 text-white rounded-b-2xl">

        <h3 className="lg:text-5xl text-3xl font-bold">{title}</h3>
        <p className='lg:text-3xl text-xl font-semibold'>{short_details}</p>
        <button className=' lg:px-8 px-4 bg-sky-500 lg:py-3 py-2 rounded-xl hover:bg-sky-400 duration-500 font-semibold text-xl'>See Details</button>
      </div>
    </div>
  );
};

export default Slide;
