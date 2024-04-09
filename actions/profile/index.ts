"use server"

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile"

export const updateName = async (
    name: string
) => {
    const currentUser = await initialProfile();

    if (!currentUser){
        return { error: "User not found" };
    }

    const profile = await db.user.findUnique({
        where: {
            id: currentUser.id
        }
    })

    if (!profile) {
        return { error: "User not found" };
    }

    const updatedProfile = await db.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            name: name
        }
    })

    return { success: "Name updated" }
}