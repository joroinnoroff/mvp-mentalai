"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
 

export default function HDW() {
  const [isShowing, setIsShowing] = useState(false);

  const handleButtonClick = () => {
    setIsShowing(true);
  };

  const transition = { duration: 0.8, ease: "easeInOut" }; // Adjust the duration as needed

  return (
    <div className="h-screen text-center">
    
        <div className="p-10">
          <motion.h1
            className="text-4xl font-bold"
            id="Left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
          >
            How does it work ?
          </motion.h1>
          <div className="mt-3">
            <motion.p
              className="md:w-3/4 m-auto text-lg font-thin mb-4"
              id="Left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
            Mental AI operates on the cutting edge of mental health support, driven by the powerful capabilities of the OpenAI API. Our platform is designed to provide you with a unique and personalized experience, centered around the idea that everyone deserves a space to express what&apos;s on their mind.
            </motion.p>

            <motion.small
              className="w-3/5 md:inline-block mt-5 text-lg"
              id="Right"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
              <ul className="list-decimal">
                <li className="">
                Ask Anything: <span className="font-thin">With Mental AI, there are no limits to what you can share. Our platform offers a judgment-free zone, allowing you to freely express your thoughts and emotions. Simply ask, and our AI will attentively listen, providing you with the support you need.</span>
                </li>

                <li>
                Personalized Guidance: <span className="font-thin">Beyond offering a listening ear, Mental AI goes a step further by providing personalized suggestions. Need guidance or someone to talk to? Our AI is your confidential companion, offering valuable insights tailored to your individual needs.</span>
                </li>

                <li>
                Therapist Recommendations: <span className="font-thin">We understand the value of human connection in mental well-being. Mental AI not only provides digital support but also recommends real-life therapists who can offer expert assistance. Your mental health journey is unique, and our goal is to empower you with the right resources for a healthier mind.</span>
                </li>
              </ul>

              <h2 className="mt-10">
              At Mental AI, we believe in the harmonious blend of technology and empathy. Join us on this transformative journey where asking what&apos;s on your mind becomes a catalyst for positive change, leading you to a path of mental wellness and empowerment.
              </h2>
            </motion.small>
          </div>
     
        </div>
    
    </div>
  );
}
