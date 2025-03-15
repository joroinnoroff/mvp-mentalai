"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Link from 'next/link'

export default function SR() {
  const [isShowing, setIsShowing] = useState(false);

 

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
            Want to speak to someone Real?
          </motion.h1>
          <div className="mt-3">
            <motion.p
              className="md:w-3/4 m-auto text-lg font-thin mb-4"
              id="Left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
            Here are some options in Norway:
            </motion.p>

            <motion.small
              className="w-3/5 md:inline-block mt-5 text-lg"
              id="Right"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
        <div className="flex gap-10 flex-col md:flex-wrap md:flex-row items-center justify-center">
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:scale-105 transition-all">
            <div class="p-10">
              <Link href={"https://mentalhelse.no/fa-hjelp/hjelpetelefonen/"} target={"_blank"}>
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Hjelpetelefonen
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                116 123 <Phone />
                </p>
              </Link>
            </div>
         
          </div>
          
          
          
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:scale-105 transition-all">
            <div class="p-10">
              <Link href={"https://mentalhelse.no/fa-hjelp/foreldresupport/"} target="_blank">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Foreldresupport
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                 116 123 (tast2) <Phone className="text-green-500"/>
                </p>
              </Link>
            </div>
       
          </div>
          
          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://mentalhelse.no/fa-hjelp/studenttelefonen/"} target="_blank" className="flex flex-col items-center justify-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Studenttelefonen
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  116 123 (tast3) <Phone className="text-red-500"/>
                </p>
              </Link>
            </div>
        
          </div>

          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://mentalhelse.no/fa-hjelp/arbeidslivstelefonen/"} target="_blank" className="flex flex-col items-center justify-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Arbeidslivstelefon
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  225 66 700 <Phone className="text-blue-500"/>
                </p>
              </Link>
            </div>
        
          </div>


          <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://sidetmedord.mentalhelse.no/"} target="_blank" className="flex flex-col items-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Sidetmedord
                </h5>
                <p class="font-sans flex items-center flex-col text-base antialiased font-light leading-relaxed text-inherit">
                Chat, forum og vennetjeneste
                </p>
                <MessageCircle/>
              </Link>
            </div>
        
          </div>
        </div>
            </motion.small>
          </div>
     
        </div>
    
    </div>
  );
}
