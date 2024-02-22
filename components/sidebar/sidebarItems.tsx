
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { IconBase, IconBaseProps } from "react-icons";
interface SideBarItemsPops{
  sidebarData:any[];
}
const SideBarItems:React.FC<SideBarItemsPops> = ({sidebarData}) => {
  return ( 
    <Accordion type="single" collapsible className="w-full " >
    {sidebarData.map((sidebar,index) =>{

      return <AccordionItem className="border-none" key={index} value={`${index}`}>
      <AccordionTrigger className="hover:no-underline">
        <div 
      className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex gap-2">
        <p> {<sidebar.icon size={20}/>}</p> 
        <p>{sidebar.title}</p>
        </div>
        </AccordionTrigger>
      <AccordionContent className="mx-2">
        <div className="flex flex-col gap-2 border-l-[1.5px] border-gray-200 dark:border-gray-600 ">
        {sidebar.items.map((item:any,ind:number) =>{
          return <Link
          className="no-underline text-sm text-gray-500 dark:text-gray-400 px-2 hover:border-l-[1.5px] hover:border-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          key={ind} href={item.url}>{item.label}</Link>
        })}
        </div>
      </AccordionContent>
    </AccordionItem>
    })}
  </Accordion>
  
  );
}
 
export default SideBarItems;




