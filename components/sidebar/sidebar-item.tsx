import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    label: string;
    icon?: React.ReactNode;
    route?: string;
    color?: string;
}

export const SidebarItem = ({
    label,
    icon,
    route,
    color,
} : SidebarItemProps) => {

    const pathname = usePathname();
    const currentPath = label?.toLowerCase();
    const router = useRouter();

    return (
        <div 
            onClick={() => {router.push(`${route}`)}}
            className="bg-neutral-300 dark:bg-neutral-900 transition duration-300 h-10 w-full rounded-md flex items-center p-6 px-4 hover:cursor-pointer">
            <div className="flex items-center gap-3">
                <div className={`${color}`}>{icon}</div>
                <p className="text-md text-neutral-700 dark:text-neutral-400">{label}</p>
            </div>

        </div>
    )
}