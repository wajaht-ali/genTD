/* eslint-disable no-unused-vars */
import { Excalidraw } from '@excalidraw/excalidraw'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from '../context/features/loading/loadingSlice';
import Loader from '../components/Loader';

const Home = () => {
    const [excalidrawAPI, setExcalidrawAPI] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.isLoading);

    useEffect(() => {
        dispatch(startLoading());
        const timer = setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);

        return () => clearTimeout(timer);
    }, [dispatch])

    if (isLoading) {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <Loader />
                <span className='mt-2'>Loading...</span>
            </div>
        )
    }

    return (
        <div className='text-center mt-2'>
            <p>Excalidraw</p>
            <div className="w-[80%] h-[500px] rounded-xl mx-auto">
                <Excalidraw ref={(api) => setExcalidrawAPI(api)} />
            </div>
        </div>
    )
}

export default Home