import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import Card from "../Card/Card";

const Popular_Products = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setCardData(data))
    }, [])
    
    return (
        <div className='container mx-auto py-20'>
            <div className="text-center pb-10">
                <p className="text-center text-stone-900 text-xl font-normal font-['Raleway'] leading-relaxed">--- Sip & Savor ---</p>
                <h2 className="text-stone-800 text-[55px] font-normal font-['Rancho']">Our Popular Products</h2>
                <Link to="coffee" className="bg-orange-300 mt-2 rounded-[5px] border-2 border-stone-800 flex items-center gap-3 text-white text-2xl font-normal font-['Rancho'] w-[150px] px-3 h-12 mx-auto">Add Coffee <FaCoffee className="text-[#331A15]" /></Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    cardData.map(data => <Card key={data._id} card={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Popular_Products;