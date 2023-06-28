import { openai } from "@/services/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const messages = await request.json();

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  const response = completion.data.choices[0].message;

  return new Response(JSON.stringify(response));
}
