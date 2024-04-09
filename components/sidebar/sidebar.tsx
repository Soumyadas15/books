"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, History, ImageIcon, LayoutDashboard, MessageCircle, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { UserButton } from "@clerk/nextjs";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

export const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <div className="flex transition duration-300 flex-col items-start justify-between w-full h-full px-4 py-4 bg-white shadow-r-lg dark:shadow-none border-r-[1px] dark:border-black dark:bg-black text-white">
        <div className="h-[14%] w-full flex items-start">
            <h1 className="text-[1.5rem] font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">Pages.ai</h1>
        </div>
        <div className="h-[86%] w-full flex flex-col items-center gap-4">
            <SidebarItem 
                icon={<MessageCircle strokeWidth={2}/>} 
                label="Conversation" 
                color="text-violet-500"
                route="/"
                isActive = {pathname === '/'}
            />
            <SidebarItem 
                icon={<History strokeWidth={2}/>} 
                label="History" 
                color="text-green-500"
                route="/history"
                isActive = {pathname === '/history'}
            />
        </div>
        <div className="w-12 h-12">
          <UserButton/>
        </div>
      
    </div>
  );
};