"use client"

import animationData from '@/public/animations/loading.json'
import { Book, BookAIcon, BookPlus, Search, SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useModal } from "@/hooks/use-modal-store"
import { Card } from "./ui/card"
import Lottie from "lottie-react"

export const EmptyConversation = () => {
    const { onOpen } = useModal()
    return (
        <>
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#7a6ded" offset="0%" />
                    <stop stopColor="#591885" offset="100%" />
                </linearGradient>
            </svg>
                

            <Card className="p-10 mt-10 border-none shadow-none bg-transparent transition duration-300 h-[80%] w-[60%] flex gap-6 flex-col items-center justify-center">
                <div className='w-[20rem] h-[20rem]'>
                    <Lottie animationData={animationData}/>
                </div>
                
                <div className="flex flex-col gap-3">
                    <h1 className="text-center font-bold dark:text-neutral-300 text-2xl">
                        Ask Pages.ai
                    </h1>
                    <p className=" dark:text-neutral-300">
                        Clcik on the search book button to search for a book
                    </p>

                </div>
                
            </Card>
        </>

    )
}