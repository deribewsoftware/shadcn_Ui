'use client'
import { CiSettings } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import CDropDown from "./dropdown/CustomeDropdown/CDropDown";
interface UserProfileProps{
 
  user:any;
}

const UserProfile:React.FC<UserProfileProps>  = ({user}) => {
  
  if (!user){
    return <h1>No User</h1>
  }
  else{
  return ( 
  <CDropDown
  title={<><Image width={30} height={30} className={`${!user?.image&&'hidden'} bg-gray-600 rounded-full `}   src={user?.image? user?.image:"/"} alt="Rounded avatar"/>

  <div className={`${user?.image&&'hidden'} relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="font-medium text-gray-600 dark:text-gray-300">{user.name[0]}</span>
  </div></>}
  body={
    <div className=" space-y-2">
         <div className=" border-b text-center py-2 border-gray-100 dark:border-gray-700">
           <p className="font-semibold text-gray-500 dark:text-gray-400 text-[16px]">{user.name}</p>
           <p className="text-gray-500 dark:text-gray-400 text-xs">{user.email}</p>
         </div>
         <div className="flex flex-col">
         <Link href="/logout" className="flex no-underline text-sm gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <IoBookOutline className="pt-1" size={20}/> <p>My Courses</p>
         </Link>
             <Link href="/logout" className="flex text-sm no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <CiSettings className="pt-1" size={20}/> <p>Settings</p>
         </Link>
         {user&&(user.role==='ADMIN')&&<Link href="/dashboard" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <MdOutlineDashboard className="pt-1" size={20}/> <p>Dashboard</p>
         </Link>}
           
         </div>
         <hr className="border-gray-100 dark:border-gray-700"/>
         <Link href="/logout" className="text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <CiLogout className="pt-1" size={20}/> <p>Logout</p>
         </Link>
       </div>
  }
  /> );
}}
 
export default  UserProfile ;