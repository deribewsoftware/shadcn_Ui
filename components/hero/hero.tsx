"use client"

import Image from "next/image";
import Banner from "../../public/banner.png"
import { Avatar, AvatarGroup } from "@mui/material";
import { students } from "@/lib/students";
import Search from "../search/search";
import { BsExclamationLg } from "react-icons/bs";

const Hero = () => {
  
  return ( <div className="w-full flex min-h-screen justify-center md:justify-around items-center flex-wrap px-4 items-center">
    {/* content */}
    <div className="pt-10 md:pt-0 flex flex-col gap-20 justify-center items-center  md:w-2/3">
      <div className="flex flex-col gap-6">
      <h1 className="text-2xl md:text-5xl font-semibold items-center justify-center text-center overflow-hidden">Alpha Academy, where heroes are born and excellence reigns supreme <span className="font-bold text-rose-600 dark:text-yellow-400 text-3xl md:text-5xl">!</span></h1>
      <div className="font-medium md:text-lg flex flex-col gap-1 md:mx-10">
      <p className="text-md px-4 font-medium dark:text-gray-400 text-slate-600 flex flex-col md:flex-row"> 
      <span className="text-rose-600 dark:text-yellow-400">🌟 Ignite Your Brilliance:</span> 
      <span className="pl-6 md:pl-2">Join a community of trailblazers where every individual is a beacon of inspiration.</span></p>
      <p className="text-md px-4 font-semibold dark:text-gray-400  text-slate-600 flex flex-col md:flex-row"> 
      <span className="text-rose-600 dark:text-yellow-400">💡 Alpha Academy:</span> 
      <span className="pl-6 md:pl-2">Is not just a school; its a launchpad for greatness.</span></p>
      </div>
      </div>
    

      <div className="w-full md:w-2/3 mx-2 md:m-4">
       <Search/>
      </div>
      <div className="flex "> <AvatarGroup
  renderSurplus={(surplus) => <span className="overflow-hidden">+{surplus.toString()[0]}k</span>}
  total={4251}
>
  {students.map((student,index) =>{return  <Avatar key={index} alt={student.name} src={`${student.image}`} />
   
  })}
 
</AvatarGroup> <h1 className="p-2">+20k students trust us.</h1></div>
    </div>

    

    <div className="md:w-1/3 items-center">
      <Image  src={Banner} alt="banner" className=""/>
    </div>
  </div> );
}
 
export default Hero;