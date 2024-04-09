import { getChats } from "@/actions/chats";
import { ConversationsClient } from "@/components/conversations-client";
import { ThemeToggle } from "@/components/toggles/theme-toggle";
import { Topbar } from "@/components/topbar/topbar";
import { currentProfile } from "@/lib/current-profile";
import Image from "next/image";

export default async function Home() {
  const chats = await getChats();
  const user = await currentProfile();
  return (
    <div className="h-full flex flex-col items-center w-full p-5 bg-white dark:bg-neutral-900 ease-in-out transition duration-300">
      <div className="h-[90%] w-full bg-blue-600">
        {/* <ConversationsClient 
          chats={chats} 
          currentUser={user!}
        /> */}
      </div>
      
      <div className="h-[10%] w-full bg-yellow-600">

      </div>
    </div>
  );
}
