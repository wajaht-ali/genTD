/* eslint-disable no-unused-vars */
import { Excalidraw } from '@excalidraw/excalidraw'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { colorPallate } from "../assets/color_brush_img.png";
import { startLoading, stopLoading } from '../context/features/loading/loadingSlice';
import Loader from '../components/Loader';
import colorPallate from "../assets/color_brush_img.png";
import homeBanner from "../assets/Home_banner_img.png";

const Home = () => {
    const [excalidrawAPI, setExcalidrawAPI] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.isLoading);

    // useEffect(() => {
    //     dispatch(startLoading());
    //     const timer = setTimeout(() => {
    //         dispatch(stopLoading());
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, [dispatch])

    if (isLoading) {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <Loader />
                <span className='mt-2 text-white'>Loading...</span>
            </div>
        )
    }

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-start  text-white'>
            <div className='bg-[url("../assets/gradient-img.png")] bg-no-repeat bg-center bg-contain w-full h-[600px] mt-4'>
                <h1 className='font-montserrat font-bold text-mainHeading text-center'>Bring your designs to Life <br /> with a single click</h1>
                <div className='w-[350px] h-[300px] relative mx-auto mt-6'>
                    <img src={homeBanner} alt="home_banner" className="w-full h-full absolute left-10 top-5" />
                </div>
            </div>
            <div>
                <p className="font-montserrat text-[20px] font-normal opacity-85 text-center">Transform scribbles to sketches into 3D models, animate effortlessly, and visualize in AR—all in one intuitive platform.</p>
                <div className='mt-6 flex flex-row items-center justify-center gap-x-8'>
                    <button
                        className="bg-btn-gradient text-items font-medium text-white rounded-full py-2 px-4 w-32 border border-[#faa39e]"
                    >
                        Get Started
                    </button>
                    <button
                        className="font-medium text-items text-white rounded-full py-2 px-4 w-32 border border-[#947E7E]"
                    >
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="">
                <img src={colorPallate} alt="colorPallet_img" width={80} height={80} className='absolute right-0 top-1/4' />
            </div>
        </div>
    )
}

export default Home