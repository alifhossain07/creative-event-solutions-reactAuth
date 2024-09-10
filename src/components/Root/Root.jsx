import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
        <Header></Header>
            <div className='max-w-[90vw] mx-auto'>
            <Outlet></Outlet>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;