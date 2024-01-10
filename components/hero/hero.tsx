"use client"

import Image from "next/image";
import Banner from "../../public/banner.png"
import { Avatar, AvatarGroup } from "@mui/material";
import { students } from "@/lib/students";
import Search from "../search/search";

const Hero = () => {
  return ( <div className="w-full flex min-h-screen justify-center md:justify-around items-center flex-wrap">
    {/* content */}
    <div className="flex flex-col gap-10 pt-10">
      <h1 className="text-2xl md:text-5xl font-bold">Welcome To Alpha Academy</h1>
      <div className="ml-4 text-xl font-semibold">
      <p>For HighSchools Students</p>
      <p>For Freshman Students Students</p>
      </div>
      <p className="text-lg font-medium">to improve their skills</p>

      <div className="">
       <Search/>
      </div>
      <div className="flex "> <AvatarGroup
  renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
  total={4251}
>
  {students.map((student,index) =>{return  <Avatar key={index} alt={student.name} src={`${student.image}`} />
   
  })}
 
</AvatarGroup> <h1 className="p-2">+20k students trust us.</h1></div>
    </div>

    

    <div className="">
      <Image  src={Banner} alt="banner" className=""/>
    </div>
  </div> );
}
 
export default Hero;