/* eslint-disable no-unused-vars */
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full md:w-[80%] m-auto h-20 bg-base flex flex-col-reverse md:flex-row justify-between items-center p-2'>
            <div>
                <p className="font-open-sans opacity-50 font-semibold text-sm">© 2024 mimAR Studios, Inc.</p>
            </div>
            <div className='flex flex-row items-center'>
                <AiFillInstagram size={24} className={'mx-2 hover:text-orange-500 hover:cursor-pointer duration-200'} />
                <AiOutlineTwitter size={24} className={'mx-2 hover:text-primary hover:cursor-pointer duration-200'} />
                <FaLinkedin size={24} className={'mx-2 hover:text-primary hover:cursor-pointer duration-200'} />
                <FaYoutube size={24} className={'mx-2 hover:text-danger hover:cursor-pointer duration-200'} />
            </div>
        </div>
    )
}

export default Footer