"use client"

import { Book, BookAIcon, BookPlus, Search } from "lucide-react"
import { Button } from "./ui/button"
import { useModal } from "@/hooks/use-modal-store"
import { Card } from "./ui/card"

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
                

            <Card className="p-10 bg-transparent transition duration-300 h-[80%] w-[60%] flex gap-6 flex-col items-center justify-center">
                
                <BookAIcon style={{ stroke: "url(#blue-gradient)" }} size={150} />
                <p className="text-center dark:text-neutral-400 text-sm">
                    Imagine a world where finding your next read is as easy as buttering toast. Enter Pages.ai, the magical tool that's like having a personal book genie at your service.
                </p>

                <Button 
                    onClick={() => onOpen('searchModal')}
                    className="flex items-center gap-2">
                    <Search size={22}/>
                    Search for a book now
                </Button>
            </Card>
        </>

    )
}