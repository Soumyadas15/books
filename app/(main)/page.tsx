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
    <div className="h-full flex items-center justify-center w-full p-5 bg-white dark:bg-neutral-900 ease-in-out transition duration-300">
      <ConversationsClient chats={chats} currentUser={user!}/>
    </div>
  );
}