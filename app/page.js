"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Ai from "./components/Ai";
import { Heart, XIcon } from "lucide-react";
import heart from '../app/Animations/heart.json'
import Lottie from "lottie-react";
import Box from '../public/box.png'
import Image from 'next/image'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Simulating a delay to represent the loading process
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the duration as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    setIsShowing(true);
  };

  const transition = { duration: 0.8, ease: "easeInOut" };

  return (
    <div className="h-screen text-center">
      {isLoading ? (
        <div className="animate-pulse">
     
          <Lottie animationData={heart} style={{height: "400px"}}/>
        </div>
      ) : (
        <div>
          {isShowing ? (
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              initial={{ x: 0, opacity: 0 }}
            >
                <div className="close absolute top-52 right-10 lg:right-40 xl:right-80 border rounded-full cursor-pointer p-2" onClick={() => setIsShowing(false)}>
                  <XIcon/>
                </div>
              <Ai />
            </motion.div>
          ) : (
            <div className="p-10">
  <motion.h1
    className="text-lg md:text-4xl font-bold"
    id="Left"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={transition}
  >
    Welcome to Mental AI, your digital ally for mental well-being.
  </motion.h1>
  <div className="mt-3">
 

    <motion.small
      className="md:w-3/5 md:inline-block mt-5 text-lg"
      id="Right"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={transition}
    >
      Whether you&apos;re looking for a{" "}
      <span className="font-bold">sympathetic</span> ear or seeking{" "}
      <span className="font-bold">guidance</span>, Mental AI is your
      confidential companion on the journey to mental wellness. In addition, we
      offer personalized suggestions for licensed therapists who can provide
      expert support, bridging technology and human connection.
      <br />
      <br />
      - <span className="italic font-extrabold">
        While our platform strives to provide a secure and private experience,
        please note that conversations are powered by OpenAI&apos;s API. OpenAI
        employs strong privacy safeguards, and data is not used to improve their
        models unless explicitly opted in. However, as with any digital service,
        absolute confidentiality cannot be guaranteed.
      </span>
    </motion.small>
  </div>
 

              <motion.button
                className=" p-2 rounded-md mt-5 hover:scale-105 transition-all flex items-center justify-center m-auto gap-2 font-extralight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                onClick={handleButtonClick}
              >
                  Click here to start conversation
              <Image src={Box} alt="Image by user15245033 on Freepik" width={150} height={150}/>
              </motion.button>
            </div>
          )}
 
        </div>
      )}
    </div>
  );
}
