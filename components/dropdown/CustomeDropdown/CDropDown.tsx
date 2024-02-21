'use client'
import React, { ReactNode, useState } from "react";

interface CDropDownProps{
 title:ReactNode;
  body:ReactNode;
}

const CDropDown:React.FC<CDropDownProps>  = ({title,body}) => {
  const [dropDownOpen,setDropdown]=useState(false);
  const onOpen =()=>{
setDropdown((prev)=>!prev)
  }
  

  return (  <>
    <div className="z-50">
     <div className="p-2">
       <button onClick={onOpen}>
       {title}
       </button>
     </div>
     <div onClick={onOpen} className={`fixed  h-screen right-0 left-0 ${!dropDownOpen&&'hidden'} `}>
     <div className="fixed right-4  w-sm top-13 rounded-[10px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
       {body}
     </div>

    </div>
   </div>
</>  );
}
 
export default  CDropDown ;