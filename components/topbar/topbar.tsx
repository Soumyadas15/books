"use client"

import { ThemeToggle } from "@/components/toggles/theme-toggle"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface TopbarProps{
    heading: string
}

export const Topbar = () => {

    const [heading, setHeading] = useState<string>('Conversations');
    const pathname = usePathname();

    useEffect(() => {
        if(pathname === '/conversations'){
            setHeading('Conversation');
        }
        else if(pathname === '/history'){
            setHeading('History');
        }
    });


    return (
        <div className="w-full h-16 bg-white dark:bg-neutral-900 ease-in-out transition duration-300 flex px-6 justify-between items-center ">
           <div className="font-bold text-lg">{heading}</div>
           <ThemeToggle/>
        </div>
    )
}