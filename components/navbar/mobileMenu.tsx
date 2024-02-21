"use client"
import { useTheme } from "next-themes";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useCart } from "@/hooks/use.cart";
import { useState } from "react";
import Signup from "../signup/signup";
import Login from "../login/login";

interface MobileSidebarProps{
  user:any;
}

const MobileSidebar:React.FC<MobileSidebarProps>= ({user}) => {
  const {setTheme}=useTheme();
  const {carts}=useCart()
   const [isOpen,setOpen]=useState(false)

 
  const category=[
    {
      name: "Highschool",
      url: "category/Highschool"
    },
    {
      name: "Freshman",
      url: "category/Freshman"
    },
    {
      name: "Remedial",
      url: "category/Remedial"
    },
    {
      name: "Development",
      url: "category/Development"
    }
  ]
  
 const onOpen = () => {
  setOpen((prev)=>!prev)
 };

  
    return (
      


<div className="">
  <button onClick={onOpen} className="pt-2"> {isOpen? <IoMdClose size={24}/>:<IoIosMenu size={24}/>}</button>
  <div className={`fixed  right-0  h-full bg-white dark:bg-gray-800 shadow-xl top-10 z-50 ${!isOpen?'w-0 bg-opacity-0 translate-x-[100%]':'w-[70%] bg-opacity-100 translate-x-0'} transition duration-300 ease-in-out`}>
      <div className=" px-2">
      {user&&<div className=" flex no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium"> 
      <IoIosMenu/>  <Signup/>
       </div>}

      {user&&<div className="flex  no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium">
       <IoIosMenu/> <Login/>
      </div>}
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>
        <p>Category</p>

      </div>
    </div>
  <div onClick={onOpen} className={`fixed right-0 left-0 w-full h-screen z-0 bg-black bg-opacity-20 ${!isOpen&&'hidden'}`}>
    
  </div>
</div>


    
   );
}
 
export default MobileSidebar;