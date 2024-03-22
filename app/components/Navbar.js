"use client"
import React, {useState} from "react";
import logoAni from '../Animations/logoAni.json'
import Lottie from "lottie-react";
import Link from "next/link";
 
export default function Navbar() {
 

  return (
<div className="w-screen p-5 md:p-10 flex items-center justify-between">
 <div className="flex items-center">
  <Link href={"/"}>
    <Lottie animationData={logoAni} width={20} height={20} style={{height: "100px", width: "auto", overflow: "auto"}}/>
    
  </Link>
 </div>

    
 <div className="flex gap-2 md:gap-10 text-center">
  <Link href="/About" className="hover:text-gray-600 hover:scale-105 transition-all text-sm md:text-lg">
    About Us
  </Link>
  <Link href="/HDW" className="hover:text-gray-600 hover:scale-105 transition-all text-sm md:text-lg">
    How Does this work?
  </Link>

  <Link href="/SR" className="hover:text-gray-600 hover:scale-105 transition-all text-sm md:text-lg">
    Someone real ?
  </Link>
 </div>
</div>
  );
}
