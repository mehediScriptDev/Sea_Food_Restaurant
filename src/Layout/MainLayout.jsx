import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;