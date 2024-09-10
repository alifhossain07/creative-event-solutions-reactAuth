import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ services }) => {
  const { id, img, title, service_details } = services;

  return (
    <div>
      <div className="card w-64 lg:w-80 h-[450px] mx-auto bg-gradient-to-r from-cyan-50 via-sky-100 to-blue-100 shadow-md flex flex-col">
        <figure className="h-48 w-full overflow-hidden "> {/* Fixed height for image container */}
          <img
            className="object-cover w-full h-full "  
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1   overflow-hidden flex flex-col justify-between"> {/* Fixed height for card body */}
          <div className='text-gray-600'>
            <h2 className="card-title  mb-4 text-xl font-bold">{title}</h2>
            <p className=" text-left text-base line-clamp-3">{service_details}</p> {/* Line clamp to limit text overflow */}
          </div>
          <div className="card-actions mt-4">
            <Link to={`/event/${id}`}>
              <button className="text-base font-bold text-white btn w-full bg-sky-500 hover:bg-sky-300 duration-200">
                Details and Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
