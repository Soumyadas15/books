"use client"

import { Modal } from "./modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useCallback } from "react"
import { useModal } from "@/hooks/use-modal-store"
import { toast } from "sonner"
import axios from "axios"
import { useRouter } from "next/navigation"


interface DeleteModalProps {
    title?: string;
    description?: string;
}


export const DeleteModal = ({
    title,
    description
}: DeleteModalProps) => {

    const { isOpen, onClose, type } = useModal();
    const isModalOpen = isOpen && type === "deleteModal";
    const router = useRouter();

    const handleClose = useCallback(() => {
        onClose();
    }, [])

    const onSubmit = async () => {
        axios.delete('/api/chat')
        .then(() => {
            router.refresh();
            toast.success('Succes');
        }) .catch((error) => {
            toast.error(error.response.data);
        }) .finally(() => {
            handleClose();
    })
    }
    
    return (
        <div>
            <Modal
                title="Clear chat history"
                description="This action is destructive"
                onClose={handleClose}
                onSubmit={onSubmit}
                actionLabel="Delete"
                secondaryAction={handleClose}
                secondaryActionLabel="Cancel"
                isOpen={isModalOpen}
                actionLabelVariant="destructive"
            />
        </div>
    )
}