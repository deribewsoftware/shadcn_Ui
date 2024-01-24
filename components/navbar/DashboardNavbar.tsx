"use client"
import Image from 'next/image'
import React from 'react'
import Logo from "../../public/alpha.png";
import { useToggle } from '@/hooks/use.toggle';
import { GoMoon } from 'react-icons/go';
import { LuSunMedium } from 'react-icons/lu';
import { useTheme } from 'next-themes';

const DashboardNavbar = () => {
  const {onOpenChange} =useToggle()
  const {setTheme}=useTheme();
  return (
    <div className={`overflow-hidden w-full bg-white dark:bg-gray-800 px-2 z-50 h-12 items-center   flex justify-between flex-wrap overflow-x-hidden shadow-md dark:shadow-gray-900 shadow-slate-300  fixed   duration-300`}>
    <div className="flex w-full md:w-auto gap-20 items-center justify-between px-2 md:px-0">
    <div className="flex gap-2"><Image src={Logo} alt="logo" className="w-10 h-10 rounded-full" height={30} width={30}/>
     <h1 className="font-semibold text-xl md:text-3xl py-2 overflow-hidden">
      <span className="text-blue-600">Alpha</span>
    <span className="text-teal-600"> Academy</span>
     </h1></div>
     <button onClick={onOpenChange}  className="outline-none cursor-pointer dark:hover:bg-gray-700 hover:bg-slate-200 p-2 rounded-full">
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
    </button>
    </div>

     <div className="flex gap-20">

    <div className=" hidden md:block">
      <div className="flex gap-4"><div className="">Category</div>
      <div className="">Courses</div>
      <div className="">Cart</div>
      <div className="">Signup</div>
      <div className="">Login</div>
    </div></div>

    <button className="dark:hidden px-4" onClick={()=>setTheme('dark')}>


       <GoMoon size={24}/>
</button>
<button className="px-4 hidden dark:block" onClick={() => setTheme("light")}>
  <LuSunMedium size={24}/>
  </button>
  </div>

  </div>
  )
}

export default DashboardNavbar