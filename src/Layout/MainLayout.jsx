import React from 'react';
import Header from '../Components/Common/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Common/Header/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;