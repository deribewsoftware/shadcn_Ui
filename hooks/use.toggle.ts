"use client"
import { createContext, useContext } from "react";
interface ToggleContextProps{
  isOpen: boolean;
  onOpenChange:() => void;
}
export const Toggle=createContext<ToggleContextProps>({isOpen: false,onOpenChange:()=>{}});

export const useToggle=()=>{
  return useContext(Toggle)
}