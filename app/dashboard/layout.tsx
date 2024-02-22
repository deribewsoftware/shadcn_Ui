
import Navbar from "@/components/navbar/Navbar";

import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProbs{
  children: ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProbs> = ({children}) => {
  return ( <div className="">
   <Navbar/>
    <div className="lg:px-10 flex gap-10 justify-between  pt-10 w-full">
      
          <div className="hidden lg:block w-sm">
          <div className="fixed left-10 h-screen overflow-y-auto"><Sidebar/></div>
          </div>


          <div className="w-full flex-grow px-2 lg:px-10 flex justify-center pt-10 lg:border-x border-gray-200 dark:border-gray-700">
     
    {children}
      </div>
    </div>

  </div> );
}
 
export default DashboardLayout;