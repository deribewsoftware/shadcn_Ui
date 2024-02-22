"use client"

import { sidebarData } from "@/lib/sidebarData";
import SideBarItems from "./sidebarItems";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";




const Sidebar = () => {

  
  return ( <div className="flex flex-col gap-4 pt-10">
    <Link className=" flex gap-2 no-underline text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          href="/dashboard"> <p><MdOutlineDashboard size={20}/></p><p>Dashbord</p> </Link>
     <SideBarItems sidebarData={sidebarData}/>
 </div> );
}
 
export default Sidebar;