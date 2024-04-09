import { getChats } from "@/actions/chats";
import { DeletButton } from "@/components/delete-button";
import { HistoryClient } from "@/components/history/history-client";
import { DeleteModal } from "@/components/modals/delete-modal";
import { ThemeToggle } from "@/components/toggles/theme-toggle";
import { Topbar } from "@/components/topbar/topbar";
import { Button } from "@/components/ui/button";
import { currentProfile } from "@/lib/current-profile";
import Image from "next/image";

export default async function Home() {

  const replies = await getChats();
  const chats = replies?.success;
  const user = await currentProfile();
  return (
    <>
      <DeleteModal/>
      <div className=" h-full w-full flex flex-col items-center p-5 bg-white dark:bg-neutral-900 ease-in-out transition duration-300">
        <div className="w-full h-[90%]">
          <HistoryClient 
            user={user!} 
            //@ts-ignore
            chats={chats!}
          />
        </div>
        <div className="w-full h-[10%] flex items-center justify-between">
          {(chats?.length! > 0) && (
            <DeletButton/>
          )}
        </div>
      </div>
    </>
  );
}
