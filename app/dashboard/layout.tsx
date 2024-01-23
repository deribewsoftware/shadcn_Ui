
import DashboardNavbar from "@/components/navbar/DashboardNavbar";

import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProbs{
  children: ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProbs> = ({children}) => {
  return ( <div className="">
   <DashboardNavbar/>
    <div className="flex gap-10 justify-between  pt-10">
      
          <Sidebar/>
      <div className="flex-grow px-2 md:px-10 flex justify-center pt-10">
     
    {children}
      </div>
    </div>

  </div> );
}
 
export default DashboardLayout;