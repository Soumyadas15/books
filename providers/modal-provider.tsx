import { NameModal } from "@/components/modals/name-modal"
import { SearchModal } from "@/components/modals/search-modal"
import { SearchMessageProvider } from "@/contexts/SearchMessage";
import { initialProfile } from "@/lib/initial-profile"

export const ModalProvider = async () => {

    const currentUser = await initialProfile();
    return(
        <>
            <NameModal currentUser={currentUser}/>
        </>
    )
}