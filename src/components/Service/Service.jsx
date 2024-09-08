import React from 'react';

const Service = ({services}) => {
    const { img, title, service_details } = services;

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
      <button className="text-base font-bold text-white btn w-full bg-sky-500 hover:bg-sky-300 duration-200 ">Details and Pricing</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;