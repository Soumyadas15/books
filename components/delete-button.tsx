"use client"

import { Search, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { useModal } from "@/hooks/use-modal-store"

export const DeletButton = () => {

    const { onOpen } = useModal();

    return (
        <Button
            variant={'destructive'}
            onClick={() => onOpen('deleteModal')}
            className="flex items-center gap-2">
            <Trash2 size={22}/>
            Clear chat history
        </Button>
    )
}