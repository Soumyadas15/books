import { User } from "@prisma/client";
import { ChatItem } from "../chat-item";
import EmptyState from "../empty-state";

interface Chat {
    id: string;
    body: string;
    byOpenAi: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

interface HistoryClientProps {
    user: User;
    chats: Chat[];
}

export const HistoryClient = ({
    user,
    chats,
}: HistoryClientProps) => {

    if(chats.length === 0){
        return (
            <div>
                <EmptyState/>
            </div>
        )
    }
    return (
        <div className="w-full h-full overflow-hidden overflow-y-scroll no-scrollbar">
            <div>
                {chats.map((chat: Chat, index: number) => (
                    <ChatItem key={chat.id} user={chat.byOpenAi === false ? "You" : "Pages.AI"} content={chat.body} />
                ))}
            </div> 
        </div>
    );
};
