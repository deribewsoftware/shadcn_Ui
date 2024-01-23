"use client"
import { dashboardContents } from "@/lib/dashboardContents";
import SideBarItems from "./sidebarItems";
import { useToggle } from "@/hooks/use.toggle";

const Sidebar = () => {
  const {isOpen} =useToggle()
  return ( <div className={` h-screen relative  ${isOpen? "w-72":"hidden md:block w-20 items-center"} transition duration-500 ease-out `}>
  <div className={`fixed  bg-white dark:bg-gray-800 shadow-md h-screen pt-10 ${isOpen? "w-72":"w-20 items-center"} transition duration-300`}>
    {dashboardContents.map((content,index)=>{
      return <SideBarItems
      key={index}
      url={content.url}
      name={content.name}
      icon={content.icon}
      isOpen={isOpen}
      />
    })}
</div>
  </div> );
}
 
export default Sidebar;