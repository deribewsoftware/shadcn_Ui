import Link from "next/link";
import { IconType } from "react-icons";

interface SideBarItemsPops{
  url:string;
  name:string;
  icon:IconType;
  isOpen:boolean;
}
const SideBarItems:React.FC<SideBarItemsPops> = ({url,name,icon:Icon,isOpen}) => {
  return ( <Link href={`/dashboard/${url}`} className="flex gap-2 p-2 px-4">
    <Icon className={`${isOpen? "block":"hidden md:block"}`}/>
    <p className={`${isOpen? "block":"hidden"}`}>{name}</p>


  </Link> );
}
 
export default SideBarItems;