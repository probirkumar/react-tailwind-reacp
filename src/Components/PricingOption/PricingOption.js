import React from 'react';
import Features from '../Features/Features';

const PricingOption = ({ option }) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 p-5 rounded-md'>
            <div className='py-5'>
                <h3>
                    <span className='text-7xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl'>/mon</span>
                </h3>
                <p className='text-3xl pt-3 text-indigo-600'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Features
                    key={idx}
                    feature={feature}
                ></Features>)
            }
            <button className='bg-green-600 w-full font-bold text-white rounded-md p-3 mt-3'>Buy Now</button>
        </div>
    );
};

export default PricingOption;