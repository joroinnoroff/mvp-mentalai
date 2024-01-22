"use client"
import React, {useState} from "react";
import OpenAI from "openai";
import { SendIcon } from "lucide-react";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,

})
export default function Ai() {
const [userInput, setUserInput] = useState('');
const [chatHistory, setChatHistory] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const handleUserInput = async () => {
setIsLoading (true);
setChatHistory ((prevChat) => [
...prevChat,
{role: 'user', content: userInput},
]);


const chatCompletion = await openai.chat.completions.create({
  messages: [... chatHistory, {role: 'assistant', content: userInput}],
  model: 'gpt-3.5-turbo',
  });
  
  setChatHistory ((prevChat) => [
  ...prevChat,
  {role: 'assistant', content: chatCompletion.choices[0].message.content},
  ]);
  setUserInput('');
  setIsLoading(false);
}

  return (
<div className="mt-10 flex flex-col justify-center items-center">
<div className="w-full max-w-screen-md mg-white p-4 rounded-lg shadow-md">
<div className="mb-32">
<div className="text-4xl font-bold text-blue-800 ">
  Mental AI
</div>
<p className="text-gray-600 text-lg">Get the answers your looking for here!</p>
<p className="text-gray-600 text-sm">Everything here is confidential and is not shared with anyone.</p>
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
