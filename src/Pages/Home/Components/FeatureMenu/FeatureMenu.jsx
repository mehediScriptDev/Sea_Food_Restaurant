import React from 'react';
import SectionTitle from '../../../../Components/Common/SectionTitle/SectionTitle';
import featuredImg from '../../../../../assets/home/featured.jpg';

const FeatureMenu = () => {
    return (
        <div className="relative bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${featuredImg})`}}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 text-white bg-opacity-70"></div>
          
            {/* Content */}
            <div className="relative z-10 py-16 container">
                <div className="container">
                    {/* Section Title */}
                    <SectionTitle heading="FEATURED ITEM" subheading="---Check it out---" textColor="text-white" />

                    {/* Featured Content */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
                        {/* Image Section */}
                        <div className="lg:w-1/2">
                            <img 
                                src={featuredImg} 
                                alt="Featured dish"
                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 text-white">
                            <p className="text-sm mb-2 text-gray-300">March 20, 2023</p>
                            <h3 className="text-2xl font-bold mb-4">WHERE CAN I GET SOME?</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error 
                                voluptate facere, deserunt dolores maiores quod nobis quas 
                                quasi. Eaque repellat recusandae ad laudantium tempore 
                                consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            
                            {/* Read More Button */}
                            <button className="border-b-2 border-white text-white px-0 py-2 font-semibold hover:bg-white hover:text-black transition-colors duration-200 uppercase tracking-wide bg-transparent">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureMenu;