import { ReactNode } from "react";

interface DashboardLayoutProbs{
  children: ReactNode
}

const DashboardLayout:React.FC<DashboardLayoutProbs> = ({children}) => {
  return ( <div className="">
    <div className="flex gap-10">
      <div className="w-72 bg-sky-100">sidebar</div>
      <div className="flex-grow bg-rose-100">
     
    {children}
      </div>
    </div>

  </div> );
}
 
export default DashboardLayout;