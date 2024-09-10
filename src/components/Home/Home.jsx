import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Slides from '../../Slides/Slides';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonials';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';



const Home = () => {

    const sliderData = useLoaderData();

    return (
        <div>
        {/* Slider Section */}
        <Slides sliderData={sliderData}></Slides>
        <Services sliderData={sliderData}></Services>
        <UpcomingEvents></UpcomingEvents>
        <Testimonial></Testimonial>
        
        

        </div>
    );
};

export default Home;