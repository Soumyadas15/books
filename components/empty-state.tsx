'use client';

import { useRouter } from "next/navigation";
import Lottie from "lottie-react";


import animationData from '@/public/animations/empty.json'

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showButton?: boolean;
  buttonLabel?: string;
  fontSize?: string;
  onClick?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    subtitle,
    showButton,
    buttonLabel,
    fontSize,
    onClick
}) => {
    const router = useRouter();

    return ( 
        <div 
            className="
                mt-10
                h-[60vh]
                flex 
                flex-col 
                gap-2 
                justify-center 
                items-center 
            "
            >
            <Lottie animationData={animationData} className="w-48"/>
            <div className="text-xl font-bold">You don&apos;t have any chats</div>
        </div>
    );
}
 
export default EmptyState;