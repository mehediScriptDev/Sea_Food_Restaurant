import React from 'react';
import Banner from './Components/Banner/Banner';
import Category from './Components/Categories/Category';
import Menu from './Components/Menu/Menu';
import ChefRecom from './Components/ChefRecom/ChefRecom';
import FeatureMenu from './Components/FeatureMenu/FeatureMenu';
import Testimonial from './Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Category/>
            <Menu/>
            <ChefRecom/>
            <FeatureMenu/>
            <Testimonial/>
        </div>
    );
};

export default Home;