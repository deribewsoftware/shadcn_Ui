import { ReactNode } from "react";

interface DashboardLayoutProbs{
  children: ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProbs> = ({children}) => {
  return ( <div className="">
    <div className="flex gap-10  ">
      <div className="w-72  h-screen">sidebar</div>
      <div className="flex-grow">
     
    {children}
      </div>
    </div>

  </div> );
}
 
export default DashboardLayout;