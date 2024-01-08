import CardImg from '../../assets/Card/Card-1.png';
import React from 'react';
import { GrView } from "react-icons/gr";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {_id, name, photo, price, chef} = card;

    return (
        <div className="bg-stone-100 rounded-[10px] grid grid-cols-1 md:grid-cols-6 items-center justify-between gap-5 py-[30px] px-[40px] md:space-x-10">
            <div className='md:col-span-2'>
                <img className='w-full h-64 md:h-44 rounded-lg' src={photo ? photo : CardImg} alt="" />
            </div>
            <div className='flex flex-col gap-3 items-center md:items-start md:col-span-3'>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{name}</span></h4>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{chef}</span></h4>
                <h4 className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 text-xl font-normal font-['Raleway']">{price} Taka</span></h4>
            </div>
            <div className='flex justify-center md:flex-col md:items-end gap-3 md:col-span-1'>
                <Link to={`/coffee/${_id}`}><GrView className='text-white bg-[#D2B48C] rounded-[5px] w-10 h-10 p-2' /></Link>
                <FaPen className='text-white bg-[#3C393B] rounded-[5px] !w-10 !h-10 p-2' />
                <MdDelete className='text-white bg-[#EA4744] rounded-[5px] !w-10 !h-10 p-2' />
            </div>
        </div>
    );
};

export default Card;