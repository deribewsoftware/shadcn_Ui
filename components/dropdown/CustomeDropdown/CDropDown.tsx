'use client'
import React, { ReactNode, useState } from "react";
import { GoChevronDown } from "react-icons/go";
interface CDropDownProps{
 title:ReactNode;
  body:ReactNode;
  chevron?:boolean;
}

const CDropDown:React.FC<CDropDownProps>  = ({title,body,chevron}) => {
  const [dropDownOpen,setDropdown]=useState(false);
  const onOpen =()=>{
setDropdown((prev)=>!prev)
  }
  

  return (  <>
    <div className="z-50 relative">
     <div className="p-2">
       <button className="flex gap-2" onClick={onOpen}>
       <div className="">{title}</div>
       {chevron&&<div className={`${dropDownOpen&&'rotate-180'} transition duration-300`}><GoChevronDown size={24}/></div>}
       </button>
     </div>

     <div className={`absolute z-20 right-4  w-sm top-12 rounded-b-[10px] rounded-tl-[10px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 ${!dropDownOpen? '-translate-y-[200%]  bg-white opacity-0':'translate-y-0 opacity-1'} transition duration-300 ease-in-out`}>
       {body}
     </div>

     <div onClick={onOpen} className={`fixed  h-screen right-0 left-0 ${!dropDownOpen&&'hidden'} `}>
    </div>
   </div>
</>  );
}
 
export default  CDropDown ;