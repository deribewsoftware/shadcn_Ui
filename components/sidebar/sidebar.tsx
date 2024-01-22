import { dashboardContents } from "@/lib/dashboardContents";
import SideBarItems from "./sidebarItems";
interface SidebarProps{
  isOpen: boolean;
}
const Sidebar:React.FC<SidebarProps> = ({isOpen}) => {
  return ( <div className="">
    {dashboardContents.map((content,index)=>{
      return <SideBarItems
      key={index}
      url={content.url}
      name={content.name}
      icon={content.icon}
      isOpen={isOpen}
      />
    })}

  </div> );
}
 
export default Sidebar;