"use client"
import React, {useState} from "react";
import OpenAI from "openai";
import { SendIcon } from "lucide-react";


 
export default function Ai() {
const [userInput, setUserInput] = useState('');
const [chatHistory, setChatHistory] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const handleUserInput = async () => {
  if (!userInput.trim()) return;
  setIsLoading(true);
  
  setChatHistory((prevChat) => [
    ...prevChat,
    { role: "user", content: userInput },
  ]);

  await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms pause

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...chatHistory, { role: "user", content: userInput }] }),
    });

    const data = await response.json();

    if (data.error) throw new Error(data.error);

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "assistant", content: data.content },
    ]);
  } catch (error) {
    console.error("Error fetching response:", error);
  } finally {
    setUserInput("");
    setIsLoading(false);
  }
};


 

  return (
<div className="mt-10 flex flex-col justify-center items-center">
<div className="w-full max-w-screen-md mg-white p-4 rounded-lg shadow-md">
<div className="mb-32">
<div className="text-4xl font-bold text-blue-800 ">
  Mental AI
</div>
<p className="text-gray-600 text-lg">Get the answers your looking for here!</p>
<p className="text-gray-600 text-sm">
While our platform strives to provide a secure and private experience,
      please note that conversations are powered by OpenAI&apos;s API. OpenAI
      employs strong privacy safeguards, and data is not used to improve their
      models unless explicitly opted in. However, as with any digital service,
      absolute confidentiality cannot be guaranteed.
</p>
<small>
Welcome to your safe-space
</small>
</div>
<div className="" style={{ height: "400px", overflow: "auto"}}>
    {chatHistory.map((message, index) => (
      <div 
      key={index}
      className={`${
        message.role === 'user' ? 'text-left' : 'text-right'
      } mb-2`}
      >
        <div className={`rounded-full p-2 max-w-md mx-4 inline-block ${message.role === 'user' ? 'bg-blue-300 text-blue-800' : 'bg-green-300 text-green-800'}`}>
          {message.role === 'user' ? 'H' : 'AI'}
        </div>
        <div className={`max-w-md mx-4 my-2 inline-block ${message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} p-2 rounded-md`}>
          {message.content}
        </div>
      </div>
    ))}
  </div>
  <div className="flex">
      <input 
      type="text"
      placeholder="Ask me Anything"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      className="flex-1 p-2 rounded-1-lg"
      />
      {isLoading ? (
        <div className="bg-blue-500 text-white p-2 rounded-r-lg animate-pulse">
          loading...
        </div>
      ) : (
        <button
        onClick={handleUserInput}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center"
        >
          ask <SendIcon />
        </button>
      )}
  </div>
</div>
</div>
  );
}
