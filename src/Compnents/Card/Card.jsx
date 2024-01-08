import CardImg from '../../assets/Card/Card-1.png';
import React from 'react';
import { GrView } from "react-icons/gr";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="bg-stone-100 rounded-[10px] flex items-center justify-between py-[30px] px-[40px] flex-wrap">
            <div>
                <img src={CardImg} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">Americano Coffee</span></h4>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">Mr. Matin Paul</span></h4>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">890 Taka</span></h4>
            </div>
            <div className='flex flex-col gap-3'>
                <Link ><GrView className='text-white bg-[#D2B48C] rounded-[5px] !w-10 !h-10 p-2' /></Link>
                <FaPen className='text-white bg-[#3C393B] rounded-[5px] !w-10 !h-10 p-2' />
                <MdDelete className='text-white bg-[#EA4744] rounded-[5px] !w-10 !h-10 p-2' />
            </div>
        </div>
    );
};

export default Card;