"use client"
import { dashboardContents } from "@/lib/dashboardContents";
import SideBarItems from "./sidebarItems";
import { useToggle } from "@/hooks/use.toggle";
import { sidebarData } from "@/lib/sidebarData";
import Link from "next/link";

const Sidebar = () => {
  const {isOpen} =useToggle()
  return ( <div className={` h-screen relative  ${isOpen? "w-72":"hidden md:block w-20 items-center"} transition duration-500 ease-out `}>
  <div className={`fixed  bg-white dark:bg-gray-800 shadow-md h-screen pt-10 ${isOpen? "w-72":"w-20 items-center"} transition duration-300`}>
   {sidebarData&&sidebarData.map((sidebar,index) =>{
    return <ul key={index} className="list-none">
            {sidebar.href? <li><Link className="text-gray-500 hover:text-gray-600 hover:dark:text-gray-300  dark:text-gray-400 no-underline font-semibold" href={sidebar.href}>{sidebar.name}</Link></li>:<li className="text-gray-500  dark:text-gray-400 no-underline font-semibold">{sidebar.name}</li>}
            
            <li>
              <ul className="list-none">
               
               {sidebar.links?.map((link,ind)=>{
                return <li key={ind}><Link className="text-gray-500 hover:text-gray-600 hover:dark:text-gray-300  dark:text-gray-400 no-underline " href={link.href}>{link.linkName}</Link></li>
               })}
              </ul>
            </li>
      </ul>
    
   })}
</div>
  </div> );
}
 
export default Sidebar;