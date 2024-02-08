"use client"
import { ReactNode, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";

interface DropdownProps{
  
  label:string;
  contents:any[]
 
}
const Dropdown:React.FC<DropdownProps>= ({label,contents}) => {
const [isOpen,setOpen]=useState(false);
const onDropdown=()=>{
  setOpen((prev)=>!prev);

}


 
  
  
 

  
    return (
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-none outline-none flex gap-1"><p className="font-medium">{label}</p> <p><HiChevronDown size={20}/></p></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-opacity-95 bg-slate-100 dark:bg-gray-800 rounded-[5px] rounded-t-0 dark:border-gray-600">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup >
            {contents?.map((content,index)=>{
              return <Link key={index} className="hover:bg-slate-600 dark:hover:bg-gray-800" href={`/${content.url}`}><DropdownMenuRadioItem  value="top">{content.name}</DropdownMenuRadioItem></Link>
            })}
            
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    
   );
}
 
export default Dropdown;