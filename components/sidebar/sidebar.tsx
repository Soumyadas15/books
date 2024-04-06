"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, History, ImageIcon, LayoutDashboard, MessageCircle, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Conversation',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'History',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex transition duration-300 flex-col items-center justify-between w-full h-full px-4 py-4 bg-neutral-200 dark:bg-black text-white">
        <div className="h-[14%] w-full flex items-start">
            <h1 className="text-[1.5rem] font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">Pages.ai</h1>
        </div>
        <div className="h-[86%] w-full flex flex-col items-center gap-4">
            <SidebarItem 
                icon={<MessageCircle/>} 
                label="Conversation" 
                color="text-violet-500"
                route="/"
            />
            <SidebarItem 
                icon={<History/>} 
                label="History" 
                color="text-green-500"
                route="history"
            />
        </div>
      
    </div>
  );
};