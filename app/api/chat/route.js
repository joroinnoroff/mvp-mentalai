import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  try {
    console.log("ENV CHECK: OPENAI_KEY:", process.env.OPENAI_KEY ? "EXISTS" : "NOT FOUND");

    if (!process.env.OPENAI_KEY) {
      console.error("API Key missing");
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const bodyText = await req.text(); // Debugging
    console.log("Raw request body:", bodyText);

    try {
      var { messages } = JSON.parse(bodyText);
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      return NextResponse.json({ error: "Invalid JSON input" }, { status: 400 });
    }

    console.log("Parsed messages:", messages);

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
    });

    console.log("OpenAI Response:", JSON.stringify(chatCompletion, null, 2));

    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
