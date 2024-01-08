import React from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <div className='mb-6'>
            <Link to="/" className="flex items-center gap-2 font-medium text-black text-2xl w-36"><FaArrowAltCircleLeft /> Go Back</Link>
        </div>
    );
};

export default Back;