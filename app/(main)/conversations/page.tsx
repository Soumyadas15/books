import { getChats } from "@/actions/chats";
import { ConversationsClient } from "@/components/conversations-client";
import { ConvoButton } from "@/components/convo-button";
import { SearchModal } from "@/components/modals/search-modal";
import { ThemeToggle } from "@/components/toggles/theme-toggle";
import { Topbar } from "@/components/topbar/topbar";
import { SearchMessageProvider } from "@/contexts/SearchMessage";
import { currentProfile } from "@/lib/current-profile";
import Image from "next/image";

export default async function Home() {

    const chats = await getChats();
    const user = await currentProfile();
  return (
    <SearchMessageProvider>
        <SearchModal/>
        <div className="h-full flex flex-col items-center w-full p-5 bg-white dark:bg-neutral-900 ease-in-out transition duration-300">
            <div className="h-[90%] w-full">
                <ConversationsClient 
                    chats={chats} 
                    currentUser={user!}
                />
            </div>
            <div className="h-[10%] w-full flex items-center justify-between">
                <ConvoButton/>
            </div>
        </div>
    </SearchMessageProvider>

  );
}