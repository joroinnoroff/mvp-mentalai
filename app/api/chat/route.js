export async function POST(req) {
  try {
    console.log("ENV CHECK: OPENAI_KEY:", process.env.OPENAI_KEY ? "EXISTS" : "NOT FOUND");

    if (!process.env.OPENAI_KEY) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const { messages } = await req.json();
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o", // Eller gpt-3.5-turbo
      messages: messages,
    });

    console.log("OpenAI Response:", chatCompletion);

    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
