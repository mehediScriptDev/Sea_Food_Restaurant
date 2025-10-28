import React from 'react';

const Popular = ({ menu }) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className='flex gap-4 items-start p-2'>
            {/* Image */}
            <div className='flex-shrink-0'>
                <img 
                    src={image} 
                    alt={name}
                    className='w-16 h-16 rounded-tr-full rounded-bl-full rounded-br-full object-cover bg-gray-200'
                />
            </div>
            
            {/* Content */}
            <div className='flex-1'>
                <div className='flex justify-between items-start mb-1'>
                    <h3 className='text-lg font-semibold text-gray-800 uppercase tracking-wide'>
                        {name} <span className='text-gray-400 font-normal'>-------------------</span>
                    </h3>
                    <span className='text-lg font-bold text-yellow-600 ml-2'>
                        ${price}
                    </span>
                </div>
                <p className='text-sm text-gray-600 leading-relaxed'>
                    {recipe}
                </p>
            </div>
        </div>
        
    );
};

export default Popular;