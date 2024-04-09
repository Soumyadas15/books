"use server"

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile"

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createChat = async (
    message: string
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

    const userMessage = await db.conversation.create({
        data: {
            body: message,
            userId: currentUser.id,
        }
    })

    try{
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        const reply = response.choices[0].message.content;

        const gptReply = await db.conversation.create({
            data: {
                //@ts-ignore
                body: reply,
                userId: currentUser.id,
                byOpenAi: true,
            }
        })
        return { success: response.choices[0].message.content}

    } catch (error : any) {
        if (error instanceof Error) {
            console.error(error.message);
            return { error: error.message }
        } else {
            return { error: error.message }
        }
    }


}


export const getChats = async () => {
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

    const chats = await db.conversation.findMany({
        where: {
            userId: currentUser.id,
        }
    })

    if (!chats){
        return null;
    }

    return { success: chats }

}