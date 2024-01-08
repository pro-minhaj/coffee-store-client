import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Back from '../Back/Back';

const Coffee_Details = () => {
    const data = useLoaderData();
    const { photo, name, chef, supplier, taste, category, details, price } = data;

    return (
        <div className='container mx-auto py-10 md:px-0 px-8'>
            <Back></Back>
            <div className='bg-stone-100 rounded-[5px] flex flex-col md:flex-row items-center gap-y-8 md:gap-16 p-10 md:p-20'>
                <div>
                    <img className="w-full max-h[20rem] md:h-[32rem] rounded-2xl" src={photo} alt="" />
                </div>
                <div className='text-center md:text-start'>
                    <h1 className="text-stone-800 mb-6 text-4xl font-normal font-['Rancho']">Niceties</h1>
                    <div className='space-y-3'>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{name}</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{chef}</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Supplier: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{supplier} Taka</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Supplier: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{supplier} Taka</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Taste: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{taste} Taka</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Category: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{category} Taka</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{price} Taka</span></h4>
                        <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Details: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{details} Taka</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee_Details;