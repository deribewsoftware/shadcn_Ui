import Link from "next/link";
import CDropDown from "./CustomeDropdown/CDropDown";

const CategorCDrobDown = () => {
  const category=[
    {
      name: "Highschool",
      url: "/category/Highschool"
    },
    {
      name: "Freshman",
      url: "/category/Freshman"
    },
    {
      name: "Remedial",
      url: "/category/Remedial"
    },
    {
      name: "Development",
      url: "/category/Development"
    }
  ]
  return ( 
    <CDropDown title={
      <p>Category</p>
    } body={<div>
        {category.map((c,index)=>{
            return <Link key={index} href={c.url} className="px-2 py-1 text-sm flex no-underline  gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            {c.name}
           </Link>
          })}
    </div>}/>
   );
}
 
export default CategorCDrobDown;