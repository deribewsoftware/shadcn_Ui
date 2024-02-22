
import Navbar from "@/components/navbar/Navbar";

import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProbs{
  children: ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProbs> = ({children}) => {
  return ( <div className="">
   <Navbar/>
    <div className="lg:px-10 flex gap-10 justify-center pt-10 w-full">
      
          <div className="hidden lg:block w-48 ">
          <div className="fixed left-10 h-screen w-48 overflow-y-auto"><Sidebar/></div>
          </div>


          <div className="w-full  px-2 l lg:w-8/12 xl:w-7/12 flex justify-center pt-10 border-x border-gray-200 dark:border-gray-700">
    
    {children}
      </div>
    </div>

  </div> );
}
 
export default DashboardLayout;