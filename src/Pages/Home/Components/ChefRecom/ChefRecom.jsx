import React from 'react';
import SectionTitle from '../../../../Components/Common/SectionTitle/SectionTitle';

const ChefRecom = () => {
    const recommendations = [
        {
            id: 1,
            name: "Caeser Salad",
            description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
        },
        {
            id: 2,
            name: "Caeser Salad", 
            description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
        },
        {
            id: 3,
            name: "Caeser Salad",
            description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
            image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"
        }
    ];

    return (
        <div className='container py-10'>
            
            <SectionTitle heading="CHEF RECOMMENDS" subheading="---Should Try---" />

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {recommendations.map(item => (
                    <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        {/* Image */}
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {item.description}
                            </p>
                            
                            {/* Button */}
                            <button className="bg-transparent border-b-2 border-yellow-600 text-yellow-600 px-6 py-2 font-semibold hover:bg-yellow-600 hover:text-white transition-colors duration-200 uppercase tracking-wide">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ChefRecom;