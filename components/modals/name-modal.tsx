"use client"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Modal } from "./modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useModal } from "@/hooks/use-modal-store"
import { AnimatedDiv } from "../ui/animated-div"
import { useRouter } from "next/navigation"
import axios from "axios"

interface NameModalProps {
    currentUser: any;
}
export const NameModal = ({
    currentUser,
} : NameModalProps) => {

    const router = useRouter();
    const form = useForm({
        defaultValues: {
          name: "",
        },
    });
    


    const { onOpen, isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type === "nameModal";

    const handleClose = useCallback(() => {
        form.reset();
        onClose();
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            
            console.log("Getting response from OpenAI...");
            
        } catch (error) {
            console.log(error);
        } finally {
            router.refresh();
        }
    }

    


    let bodyContent = (
        <div key="name">
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    )

    return (
        <div>
            <Modal
                title="Enter your name"
                description="You can't continue without your name"
                onClose={handleClose}
                onSubmit={form.handleSubmit(onSubmit)}
                actionLabel="Save"
                secondaryActionLabel=""
                isOpen={isModalOpen}
                body={bodyContent}
            />
        </div>
    )
}