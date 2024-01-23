"use client"
import { Toggle } from "@/hooks/use.toggle"
import { ReactNode, useState } from "react"
interface ToggleProviderProps{
  children:ReactNode;
}
export const ToggleProvider:React.FC<ToggleProviderProps>=({children})=>{

const [isOpen,setOpen]=useState(false)
const onOpenChange=()=>{
  setOpen((prev)=>!prev)
}
  return <Toggle.Provider value={{isOpen,onOpenChange}}>
{children}
  </Toggle.Provider>
}