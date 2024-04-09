import { Conversation } from "@prisma/client"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bot, BotIcon, User, UserIcon } from "lucide-react";

interface ChatItemsProps {
    user: "Pages.AI" | "You",
    content: string;
}

export const ChatItem = ({
    user,
    content,
}: ChatItemsProps) => {
    return (
        <div className="mb-2 w-full">
            <Card className={`
                shadow-none 
                w-full 
                bg-transparent 
                transitio
                duration-100
                ${user === "You" ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-transparent'}
            `}>
                <CardHeader  className="flex flex-row gap-2">
                    {user === "You" ? (
                        <UserIcon className='text-rose-500' strokeWidth={2}/>
                    ) : (
                        <BotIcon className='text-blue-500' strokeWidth={2}/>
                    )}
                    <CardTitle>{user}</CardTitle>
                </CardHeader>
                <CardContent className="dark:text-neutral-400">
                    {content}
                </CardContent>
            </Card>
            
        </div>
    )
}