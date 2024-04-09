"use client"

import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { useModal } from "@/hooks/use-modal-store"

export const ConvoButton = () => {

    const { onOpen } = useModal();

    return (
        <Button
            onClick={() => onOpen('searchModal')}
            className="flex items-center gap-2">
            <Search size={22}/>
            Search book
        </Button>
    )
}