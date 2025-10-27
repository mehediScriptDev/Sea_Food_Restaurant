import React from 'react';
import Header from '../Components/Common/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Common/Footer/Footer';

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