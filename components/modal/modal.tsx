"use client"
import { ReactNode, useState } from "react";
import Container from "../container/container";
import Heading from "../Heading/Heading";
import Button from "../button/button";
interface ModalProps{
  label:string;
 
  children:ReactNode;
  title:string;
  setOpen:() => void;
  isOpen:boolean;
}
const Modal:React.FC<ModalProps> = ({label,children,title,setOpen,isOpen}) => {
  
  
  return ( <>
  <Button onClick={setOpen} title={label}/>
  <div className={`fixed  h-screen w-screen top-0 bg-gray-700 dark:bg-opacity-80 bg-opacity-60 botton-0 left-0 right-0  flex justify-center items-center ${isOpen? "block opacity-1":"hidden opacity-0"} `}>
   <Container childern={<div className={`flex flex-col  min-w-[500px]  max-w-[800px]
    ${isOpen? "translate-y-0" : "translate-y-full"
              } transition-transform duration-500`}>
      <div className="flex justify-between p-2">
      <Heading title={title}/>
      <Button onClick={setOpen} title="X"/>
      
      </div>
      <div className="">{children}</div>
    </div>}/>

  </div> </>);
}
 
export default Modal;