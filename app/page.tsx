import { ConversationsClient } from "@/components/conversations-client";
import { ThemeToggle } from "@/components/toggles/theme-toggle";
import { Topbar } from "@/components/topbar/topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center w-full p-5 bg-white dark:bg-neutral-900 ease-in-out transition duration-300">
      <ConversationsClient/>
    </div>
  );
}
