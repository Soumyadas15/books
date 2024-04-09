"use client"

import animationData from '@/public/animations/loader.json'
import Lottie from "lottie-react";

export const Loader = () => {
    return (
        <Lottie animationData={animationData}/>
    )
}