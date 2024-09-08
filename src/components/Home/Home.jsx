import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Slides from '../../Slides/Slides';



const Home = () => {

    const sliderData = useLoaderData();

    return (
        <div>
        {/* Slider Section */}
        <Slides sliderData={sliderData}></Slides>


        </div>
    );
};

export default Home;