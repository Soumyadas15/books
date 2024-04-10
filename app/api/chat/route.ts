import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(req: Request) {
    try{
        const body = await req.json();
        const { messages } = body;

        const currentUser = await initialProfile();

        if (!currentUser){
            return new Response("User not found", { status: 400 });
        }

        const myMessage = await db.conversation.create({
            data: {
                userId: currentUser.id,
                body: messages
            }
        })

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: messages }],
        });
        const replyMessage = response.choices[0].message.content;

        const reply = await db.conversation.create({
            data: {
                userId: currentUser.id,
                body: replyMessage!,
                byOpenAi: true,
            }
        });
        
        return NextResponse.json(replyMessage);

    } catch (error : any) {
        if (error instanceof Error) {
            console.error(error.message);
            return new Response(error.message, { status: 500 });
        } else {
            console.error(error.message);
            return new Response('An unknown error occurred', { status: 500 });
        }
    }
  
}

export async function DELETE(req: Request) {
    try{
        const currentUser = await initialProfile();

        if (!currentUser){
            return new Response("User not found", { status: 400 });
        }

        await db.conversation.deleteMany({
            where: {
                userId: currentUser.id,
            }
        })
        
        return new Response("Chats deleted", { status: 200 });

    } catch (error : any) {
        if (error instanceof Error) {
            console.error(error.message);
            return new Response(error.message, { status: 500 });
        } else {
            console.error(error.message);
            return new Response('An unknown error occurred', { status: 500 });
        }
    }
  
}