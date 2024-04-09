"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarItemProps {
    label: string;
    icon?: React.ReactNode;
    route?: string;
    color?: string;
    isActive?: boolean;
}

export const SidebarItem = ({
    label,
    icon,
    route,
    color,
    isActive,
} : SidebarItemProps) => {

    const pathname = usePathname();
    const currentPath = label?.toLowerCase();
    const router = useRouter();


    return (
        <div 
            onClick={() => {router.push(`${route}`)}}
            className={`
                 transition 
                 duration-300 
                 h-10 
                 w-full 
                 rounded-md 
                 flex 
                 items-center 
                 p-4
                 px-4 
                 hover:cursor-pointer
                 hover:bg-neutral-200
                 dark:hover:bg-neutral-900
                 ${isActive ? 'bg-neutral-200 dark:bg-neutral-900 ' : 'bg-transparent'}
            `}>
            <div className="flex items-center gap-3">
                <div className={`
                    ${isActive ? 'text-rose-500' : 'text-black dark:text-neutral-500'}
                `}>{icon}</div>
                <p className={`
                        text-md 
                        text-black 
                        dark:text-neutral-400
                    `
                }>{label}</p>
            </div>

        </div>
    )
}