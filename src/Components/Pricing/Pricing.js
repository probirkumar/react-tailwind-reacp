import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Everything Free',
                'Awesome Feature',
                'Best Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Non Stop Feature',
                'Valuable Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everythin Medium',
                'Awesome Feature',
                'Best Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Non Stop Feature',
                'Valuable Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 18.99, features: [
                'Everything Premium',
                'Awesome Feature',
                'Best Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Non Stop Feature',
                'Valuable Feature'
            ]
        }
    ];
    return (
        <div>
            <h1 className='text-6xl font-bold bg-indigo-300 text-white p-12 my-5'>Best Deal of The Town</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;