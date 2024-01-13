"use client"

import Logo from "../../public/alpha.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll,setScroll] =useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return ( <div className={`w-full bg-slate-100 px-2 z-50 h-12 items-center   flex justify-between flex-wrap overflow-x-hidden ${isScroll? "shadow-md shadow-slate-300  fixed  ":""} duration-300`}>
    <div className="flex gap-2"><Image src={Logo} alt="logo" className="w-10 h-10 rounded-full" height={30} width={30}/>
     <h1 className="font-semibold text-xl md:text-3xl py-2 overflow-hidden">
      <span className="text-blue-600">Alpha</span>
    <span className="text-teal-600"> Academy</span>
     </h1></div>
    <div className=" hidden md:block">
      <div className="flex gap-4"><div className="">Category</div>
      <div className="">Courses</div>
      <div className="">Cart</div>
      <div className="">Signup</div>
      <div className="">Login</div>
    </div></div>

    <div className="md:hidden">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
    </div>

  </div> );
}
 
export default Navbar;