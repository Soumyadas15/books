'use client'

import { User } from "@prisma/client"
import { usePathname, useRouter } from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SidebarItem } from "../sidebar/sidebar-item";
import { History, MessageCircle } from "lucide-react";
import { UserAvatar } from "../avatar/UserAvatar";
import { useModal } from "@/hooks/use-modal-store";

interface NavbarProps {
    user: User;
}

export const Navbar = ({
    user,
} : NavbarProps) => {

    const router = useRouter();
    const pathname = usePathname();

    const { onOpen, isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type === "mobileNav";

    return (
        <Sheet open={isModalOpen} onOpenChange={onClose}>
            <SheetContent side={'left'} className="w-56 flex flex-col pb-10 justify-between">
                <SheetHeader className="text-start mb-5">
                    <SheetTitle className="text-xl font-bold">
                        <h1 className="text-[1.5rem] font-bold bg-gradient-to-r from-pink-500 to-rose-600 text-transparent bg-clip-text">Pages.ai</h1>
                    </SheetTitle>
                    
                </SheetHeader>
                <div className="gap-4 h-full flex flex-col items-start">
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
                <SheetFooter className="">
                    {/* {secondaryActionLabel && (
                        <Button variant={'outline'} onClick={secondaryAction}>
                            {secondaryActionLabel}
                        </Button>
                    )}
                    <Button type="submit" onClick={onSubmit}>{actionLabel}</Button> */}
                    <UserAvatar user={user}/>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}