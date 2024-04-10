"use client"

import { ThemeToggle } from "@/components/toggles/theme-toggle"
import { MenuIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { useModal } from "@/hooks/use-modal-store"

interface TopbarProps{
    heading: string
}

export const Topbar = () => {

    const [heading, setHeading] = useState<string>('Conversations');
    const pathname = usePathname();
    const { onOpen } = useModal();

    useEffect(() => {
        if(pathname === '/'){
            setHeading('Conversation');
        }
        else if(pathname === '/history'){
            setHeading('History');
        }
    });


    return (
        <div className="w-full h-16 bg-white dark:bg-neutral-900 ease-in-out transition duration-300 flex px-6 justify-between items-center ">
            <div className="flex items-center gap-2">
                <Button
                    className="md:hidden border-none shadow-none p-1"
                    onClick={() => onOpen('mobileNav')}
                    variant={'outline'}
                >
                    <MenuIcon/>
                </Button>
                <div className="font-bold text-lg">{heading}</div>
            </div>
           <ThemeToggle/>
        </div>
    )
}