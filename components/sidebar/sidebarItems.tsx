import Link from "next/link";
import { IconType } from "react-icons";

interface SideBarItemsPops{
  url:string;
  name:string;
  icon:IconType;
  isOpen:boolean;
}
const SideBarItems:React.FC<SideBarItemsPops> = ({url,name,icon:Icon,isOpen}) => {
  return ( <Link href={`/dashboard/${url}`} className="flex gap-2 p-2 px-4 items-center">
    <Icon size={24} className={`${isOpen? "block":"hidden md:block"} transition duration-300`}/>
    <p className={`${isOpen? "block":"hidden"} transition duration-300`}>{name}</p>


  </Link> );
}
 
export default SideBarItems;