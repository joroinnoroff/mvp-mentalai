"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Ai from "./components/Ai";
import { Heart } from "lucide-react";
import heart from '../app/Animations/heart.json'
import Lottie from "lottie-react";
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
          <h1 className="text-4xl">LOVE YOURSELF</h1>
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
                <motion.p
                  className="md:w-3/4 m-auto text-lg font-thin"
                  id="Left"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={transition}
                >
                  We understand the importance of having a safe space to express
                  your thoughts and emotions. Our innovative AI is here to listen,
                  providing a judgment-free zone for you to share whatever is on
                  your mind.
                </motion.p>

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
                  confidential companion on the journey to mental wellness. But we
                  don't stop there. Recognizing the value of{" "}
                  <span className="font-bold">human connection</span>, we also offer
                  personalized suggestions for real-life therapists who can provide
                  expert support. Mental AI is committed to empowering you on your
                  path to <span className="font-bold">mental health</span>, offering a
                  seamless blend of technology and human touch.
                </motion.small>
              </div>
              <motion.button
                className="border p-2 rounded-md mt-5 hover:scale-105 transition-all flex items-center justify-center m-auto gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                onClick={handleButtonClick}
              >
                Start Asking What&apos;s on your mind <Heart />
              </motion.button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
