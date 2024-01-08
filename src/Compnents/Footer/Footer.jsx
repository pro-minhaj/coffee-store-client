import FooterBg from '../../assets/coffee-bg/Rectangle 18.png';
import React from 'react';
import logo from '../../assets/Logo/logo1 1.png';
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-cover" style={{ backgroundImage: `url('${FooterBg}')` }}>
            <footer className="footer px-6 grid md:grid-cols-2 items-center gap-20 md:px-0 container mx-auto p-10">
                <nav>
                    <div className=''>
                        <img src={logo} alt="" />
                        <h2 className="text-stone-800 my-6 text-[45px] font-normal font-['Rancho']">Espresso Emporium</h2>
                        <p className="text-stone-900 text-xl font-normal font-['Raleway'] leading-9">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='flex gap-4 py-4'>
                        <FaFacebook className='w-10 h-10 text-[#331A15] cursor-pointer' />
                        <AiOutlineTwitter className='w-10 h-10 text-[#331A15] cursor-pointer' />
                        <AiFillInstagram className='w-10 h-10 text-[#331A15] cursor-pointer' />
                        <AiFillLinkedin className='w-10 h-10 text-[#331A15] cursor-pointer' />
                    </div>
                    <div className='pt-4'>
                        <h2 className="text-stone-800 text-[45px] font-normal font-['Rancho']">Get in Touch</h2>
                        <div className='pt-8 flex flex-col gap-3'>
                            <div className="flex gap-5 text-stone-900 text-xl font-normal font-['Raleway'] leading-9 items-center">
                                <AiOutlinePhone />
                                <p className='m-0'>+88 01533 333 333</p>
                            </div>
                            <div className="flex gap-5 text-stone-900 text-xl font-normal font-['Raleway'] leading-9 items-center">
                                <AiOutlineMail />
                                <p className='m-0'>info@gmail.com</p>
                            </div>
                            <div className="flex gap-5 text-stone-900 text-xl font-normal font-['Raleway'] leading-9 items-center">
                                <FaLocationDot />
                                <p className='m-0'>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='w-full'>
                    <h2 className="text-stone-800 text-[45px] font-normal font-['Rancho']">Connect with Us</h2>
                    <form className='flex flex-col pt-8 gap-5 w-full'>
                        <input className='bg-white rounded-[5px] outline-none py-2 px-3 text-black text-lg' type="text" name="name" id="" placeholder='Name' />
                        <input className='bg-white rounded-[5px] outline-none py-2 px-3 text-black text-lg' type="email" name="email" id="" placeholder='Email' />
                        <textarea className='bg-white rounded-[5px] outline-none py-2 px-3 text-black text-lg' name="message" placeholder='Message' rows={5}></textarea>
                        <div>
                            <button type='submit' className="btn btn-outline">Send Message</button>
                        </div>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;