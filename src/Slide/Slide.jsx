
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const Slide = ({slide}) => {

    const {img, title, short_details} = slide;
    return (
        <div
            className="rounded-2xl keen-slider__slide"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",     
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat", 
                height: 600,                 
            }}
        >
  {/* Overlay content */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            
            {/* Overlay content */}
            <div className="relative flex flex-col items-center mt-56 p-4 text-white">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p>{short_details}</p>
            </div>
        </div>


    );
};

export default Slide;