"use client"
import React, {useState} from "react";
import logoAni from '../Animations/logoAni.json'
import Lottie from "lottie-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Navbar() {
  const pathname = usePathname(); 
  const [activeLink, setActiveLink] = useState(pathname);
 
  const navLinks = [


    { id: 0, title: "Home", href: "/" },
    { id: 1, title: "Someone real?", href: "/SR" },
 
  
  ];

  return (
<div className="w-screen p-5 md:p-10 lg:flex items-center justify-between">
 <div className="flex items-center">
  <Link href={"/"}>
    <Lottie animationData={logoAni} width={20} height={20} style={{height: "100px", width: "auto", overflow: "auto"}}/>
    
  </Link>
 </div>

    
 <div className="flex gap-2 md:gap-10 text-center">
 
 {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`hover:underline transition duration-300 px-6 py-3 rounded-full ${
              pathname === link.href ? "text-white bg-blue-600 " : "text-gray-700"
            }`}
          >
            {link.title}
          </Link>
        ))}


  
 </div>
</div>
  );
}
