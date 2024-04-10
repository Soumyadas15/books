import { User } from "@prisma/client"
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserAvatarProps {
    user: User;
}

export const UserAvatar = ({
    user,
} : UserAvatarProps) => {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={user.imageUrl} alt="user" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-35" align='start'>
                <DropdownMenuLabel>
                    {user.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem 
                        className="text-red-500 font-semibold cursor-pointer focus:bg-red-100 focus:text-red-500"
                        onClick={() => {
                            router.push(`/api/auth/logout`);
                        }}
                    >
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        
    )
}