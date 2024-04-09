import { NameModal } from "@/components/modals/name-modal"
import { SearchModal } from "@/components/modals/search-modal"
import { SearchMessageProvider } from "@/contexts/SearchMessage";
import { currentProfile } from "@/lib/current-profile";
import { initialProfile } from "@/lib/initial-profile"

export const ModalProvider = async () => {

    const currentUser = await currentProfile();
    return(
        <>
            
            <NameModal currentUser={currentUser}/>
        </>
    )
}