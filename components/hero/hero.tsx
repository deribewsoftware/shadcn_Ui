"use client"

import Image from "next/image";
import Banner from "../../public/banner.png"
import { Avatar, AvatarGroup } from "@mui/material";
import { students } from "@/lib/students";
import Search from "../search/search";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect]=useTypewriter({
    words: ["Embark on a Journey of Limitless Learning Excellence at Alpha Academy.", "Unleash Your Potential", "Ignite Your Passion", "and Welcome a World of Possibilities.", "Join Us in the Pursuit of Knowledge, Innovation, and Success."," Your Alpha Journey Starts Here!"],
  loop: true,
    typeSpeed:100,
    delaySpeed:40,
    


  })
  return ( <div className="w-full flex min-h-screen justify-center md:justify-around items-center flex-wrap">
    {/* content */}
    <div className="flex flex-col gap-10 pt-10 justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold">Welcome To Alpha Academy</h1>
      <div className="ml-4 text-xl font-semibold">
      <p className="p-3 text-2xl font-semibold text-teal-600">{typeEffect}</p>
      </div>
      <p className="text-md px-4 font-medium text-slate-500"> improve their skills</p>

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