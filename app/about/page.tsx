"use client"
import Heading from "@/components/Heading/Heading";
import TextEditor from "@/components/editor/editor";
import { useState } from "react";


const About = () => {
  const [requirement,setRequirement]=useState("");
  console.log(requirement)
  return ( <div>
    <div className="flex flex-col  gap-1 my-4">
            <Heading small title="Add Course Requiremnts"/>
          <TextEditor value={requirement} setValue={setRequirement}/>
          </div>

          <div className="flex justify-center mt-10">
            <div className="border border-black border-2 p-2" dangerouslySetInnerHTML={{__html:requirement}}></div>
          </div>
  </div>);
}
 
export default About;