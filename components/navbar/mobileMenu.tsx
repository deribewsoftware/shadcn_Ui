"use client"

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { CiLogin,CiLogout  } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

interface MobileSidebarProps{
  user:any;
}

const MobileSidebar:React.FC<MobileSidebarProps>= ({user}) => {
 
   const [isOpen,setOpen]=useState(false)

 
  const category=[
    {
      name: "Highschool",
      url: "/category/Highschool"
    },
    {
      name: "Freshman",
      url: "/category/Freshman"
    },
    {
      name: "Remedial",
      url: "/category/Remedial"
    },
    {
      name: "Development",
      url: "/category/Development"
    }
  ]
  
 const onOpen = () => {
  setOpen((prev)=>!prev)
 };

  
    return (
      


<div className="">
  <button onClick={onOpen} className="pt-2 no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium"> {isOpen? <IoMdClose size={24}/>:<IoIosMenu size={24}/>}</button>
  <div className={`fixed  right-0  h-full bg-white dark:bg-gray-800 shadow-xl top-10 z-50 ${!isOpen?'bg-opacity-0 translate-x-[100%]':'w-[70%] bg-opacity-100 translate-x-0'} transition duration-300 ease-in-out`}>
      <div className=" px-4 pt-10 w-full space-y-4">
      <div className="space-y-2">
      <Link href="/logout" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <SiCoursera className="pt-1" size={20}/>  <p>Courses</p>
         </Link>
         <Link href="/logout" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <BiCategory className="pt-1" size={20}/>  <p>Category</p>
         </Link>

         <Accordion type="single" collapsible className="w-full  ">
      <AccordionItem value="item-3" className="hover:no-underline border-none">
        <AccordionTrigger className="hover:no-underline border-none"><div className="text-sm flex hover:no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <BiCategory className="pt-1" size={20}/>  <p>Category</p>
         </div></AccordionTrigger>
        <AccordionContent>

          {category.map((c,index)=>{
            return <Link key={index} href={c.url} className="px-2 py-1 text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            {c.name}
           </Link>
          })}
        
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>

       <hr className="border-gray-100 dark:border-gray-600"/>
      

      <div className="space-y-2">
      {!user&&<Link href="/register" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <SiGnuprivacyguard className="pt-1" size={20}/>  <p>Signup</p>
         </Link>}
         {!user&&<Link href="/login" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <CiLogin className="pt-1" size={20}/> <p>Login</p>
         </Link>}
         {user&&(user.role==='ADMIN')&&<Link href="/dashboard" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <MdOutlineDashboard className="pt-1" size={20}/> <p>Dashboard</p>
         </Link>}
         {user&&<Link href="/logout" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <CiLogout className="pt-1" size={20}/> <p>Logout</p>
         </Link>}
      </div>
        
        

      </div>
    </div>
  <div onClick={onOpen} className={`fixed right-0 left-0 w-full h-screen z-0 bg-black bg-opacity-20 ${!isOpen&&'hidden'}`}>
    
  </div>
</div>


    
   );
}
 
export default MobileSidebar;