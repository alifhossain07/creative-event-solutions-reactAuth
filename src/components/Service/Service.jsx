import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({services}) => {
    const { id,img, title, service_details } = services;

    return (
        <div>
            <div className="card w-80 lg:w-96 h-[550px] lg:h-[550px] mx-auto bg-blue-100 shadow-xl">
  <figure>
    <img className='object-cover w-full h-52'
      src={img}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title lg:h-14 text-xl font-bold">{title}</h2>
    <p className='lg:h-28 text-base '>{service_details}</p>
    
    <div className="card-actions ">
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