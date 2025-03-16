import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_KEY, // Sørg for at denne er satt i .env.local
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
    });

    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
