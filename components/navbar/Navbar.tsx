"use client"

import { Avatar } from "@mui/material";
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


  return ( <div className={`px-2 z-50 h-12 items-center bg-white w-full flex justify-between ${isScroll? "shadow-md border-b-2 fixed  ":""} duration-300`}>
    <div className="flex"><Avatar alt="Logo" src="../../public/alpha.png"/>
     <h1 className="font-semibold text-3xl">
      <span className="text-blue-600">Alpha</span>
    <span className="text-teal-600"> Academy</span>
     </h1></div>
    <div className="flex gap-4">
      <div className="">Category</div>
      <div className="">Courses</div>
      <div className="">Cart</div>
      <div className="">Signup</div>
      <div className="">Login</div>
    </div>

  </div> );
}
 
export default Navbar;