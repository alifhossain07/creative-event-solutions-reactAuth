import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Slides from '../../Slides/Slides';
import Services from '../Services/Services';



const Home = () => {

    const sliderData = useLoaderData();

    return (
        <div>
        {/* Slider Section */}
        <Slides sliderData={sliderData}></Slides>
        <Services sliderData={sliderData}></Services>


        </div>
    );
};

export default Home;