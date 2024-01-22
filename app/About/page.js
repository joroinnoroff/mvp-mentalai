"use client"
import React from "react";
import { motion } from "framer-motion";
 

export default function About() {
 
 

  const transition = { duration: 0.8, ease: "easeInOut" }; // Adjust the duration as needed

  return (
    <div className="h-screen text-center">
    
        <div className="p-10">
          <motion.h1
            className="text-4xl font-bold"
            id="Left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
          >
            About Us
          </motion.h1>
          <div className="mt-3">
            <motion.p
              className="md:w-3/4 m-auto text-lg font-thin mb-4"
              id="Left"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
              We understand the importance of having a safe space to express
              your thoughts and emotions. Our innovative AI is here to listen,
              providing a judgment-free zone for you to share whatever is on
              your mind.
            </motion.p>

            <motion.small
              className="md:w-3/5 md:inline-block  text-lg"
              id="Right"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
             Welcome to Mental AI, your dedicated ally on the path to mental well-being. At Mental AI, we understand the importance of fostering a safe and compassionate space for individuals to express their thoughts and emotions. Our innovative AI technology is designed to be your listening companion, providing a non-judgmental environment for you to share your innermost thoughts.

We believe in the power of human connection, and that&apos;s why Mental AI goes beyond traditional solutions. Whether you&apos;re seeking a sympathetic ear or guidance, our confidential AI companion is here to support you on your journey to mental wellness.

But our commitment doesn&apos;t end there. Recognizing the value of connecting with real-life therapists, Mental AI also offers personalized suggestions for expert support. We blend cutting-edge technology with a human touch, empowering you to take control of your mental health journey.

Take the first step towards a healthier mind with Mental AI. Your well-being matters, and we are here to accompany and guide you every step of the way. Together, let&apos;s explore the possibilities and embrace a future where technology and compassion seamlessly come together for your mental wellness.
            </motion.small>
          </div>
     
        </div>
    
    </div>
  );
}
