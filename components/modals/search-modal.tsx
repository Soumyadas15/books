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
import { createChat } from "@/actions/chats"
import { useSearchMessage } from "@/contexts/SearchMessage"

enum STEPS{
    NAME = 0,
    AUTHOR = 1,
}


export const SearchModal = () => {

    const router = useRouter();
    const form = useForm({
        defaultValues: {
          name: "",
          author: "",
        },
    });

    const { setSearchMessage, setLoading, setReply } = useSearchMessage();

    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("");
    const { isOpen, onClose, type } = useModal();
    const [step, setStep] = useState(STEPS.NAME);
    const [description, setDescription] = useState('Enter book name');

    

    const [messages, setMessages] = useState([
        {
          role: "assistant",
          content: "Yo, this is ChatterBot! How can I help you today?",
        },
      ]);

    const isModalOpen = isOpen && type === "searchModal"

    const handleClose = useCallback(() => {
        form.reset();
        onClose();
    }, [])

    const onBack = () => {
        setStep((value) => value - 1);
    }
    const onNext = () => {
        setStep((value) => value + 1);
    }

    const actionLabel = useMemo(() => {
        if(step === STEPS.AUTHOR){
            return 'Search'
        }
        return 'Next'
    }, [step]);
    
    
    const secondaryActionLabel = useMemo(() => {
        if(step === STEPS.NAME){
            return 'Cancel';
        }
        return 'Back'
    }, [step]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (step !== STEPS.AUTHOR) {
            onNext();
        } else {
            onClose();
            setReply(null);
            setLoading(false);
            const searchMessage = `Search about the book named ${data.name} written by ${data.author}`;
            setSearchMessage(searchMessage);
            try{
                setLoading(true);
                const axiosConfig = {
                    headers: {
                      'Content-Type': 'application/json'
                    }
                };
                const requestData = {
                    messages: searchMessage
                };
                const response = await axios.post('/api/chat', requestData, axiosConfig);
                setReply(response.data);
                setLoading(false);
            } catch (error : any){
                console.log(error);
            }
        }
        
    }
    

    useEffect(() => {
        if (step === STEPS.AUTHOR){
            setDescription('Enter name of author');
        }
        else{
            setDescription('Enter name of book');
        }
    })
    


    let bodyContent = (
        <div key="name">
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Book name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    )

    if(step === STEPS.AUTHOR){
        bodyContent = (
            <AnimatedDiv key="author">
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Author" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </Form>
            </AnimatedDiv>
        )
    }

    return (
        <div>
            <Modal
                title="Search for a book"
                description={description}
                onClose={handleClose}
                onSubmit={form.handleSubmit(onSubmit)}
                actionLabel={actionLabel}
                currentStep={step}
                totalSteps={Object.keys(STEPS).length / 2}
                secondaryAction={step == STEPS.NAME ? handleClose : onBack}
                secondaryActionLabel={secondaryActionLabel}
                isOpen={isModalOpen}
                body={bodyContent}
            />
        </div>
    )
}