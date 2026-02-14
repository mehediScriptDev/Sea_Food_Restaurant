import React from 'react';
import Hero from './Components/Hero';
import Dessert from './Components/Dessert';

const Menu = () => {
    return (
        <div className='container  min-h-screen'>
            <Hero/>
            <Dessert/>
        </div>
    );
};

export default Menu;