import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try{
        const body = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: body.messages,
        });
        console.log(completion.choices[0].message);
        const theResponse = completion.choices[0].message;

        return new Response(JSON.stringify(theResponse), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        if (error instanceof Error) {
            return new Response(error.message, { status: 500 });
        } else {
            return new Response('An unknown error occurred', { status: 500 });
        }
    }
  
}