"use client"

import { useEffect, useState } from "react"
import { EmptyConversation } from "./empty-conversations"
import { ChatItem } from "./chat-item"
import { Conversation, User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useSearchMessage } from "@/contexts/SearchMessage"
import { Loader } from "./loader"

interface ConversationsClientProps {
    currentUser:User;
    chats: any
}
export const ConversationsClient = ({
    currentUser,
    chats,
}: ConversationsClientProps) => {

    const [color, setColor] = useState(null);
    const router = useRouter();
    const { searchMessage, loading, reply } = useSearchMessage();

    
    console.log(searchMessage);


    return (
        
        <div className="w-full h-full flex flex-col items-center">
            {searchMessage ? (
                <ChatItem user="You" content={searchMessage!}/>
            ) : (
                <EmptyConversation/>
            )}
            {(loading && !reply) && (
                <div className="bg-neutral-100 transition duration-300 rounded-md p-6 dark:bg-neutral-800 w-full mt-4 flex flex-col items-center">
                    <div className="w-[12rem] h-[12rem]">
                        <Loader />
                    </div>
                    <p className="font-bold transition">Pages.ai is thinking...</p>
                </div>
            )}
            {reply && (
                <ChatItem user="Pages.AI" content={reply!}/>
            )}
        </div>
        
    )
}