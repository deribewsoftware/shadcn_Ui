"use client"
import { ReactNode, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import Link from "next/link";
import { GoMoon } from "react-icons/go";
import { LuSunMedium } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Modal from "../modal/modal";
import { useCart } from "@/hooks/use.cart";



const MobileMenu= () => {
  const {setTheme}=useTheme();
  const {carts}=useCart()


 
  const category=[
    {
      name: "Highschool",
      url: "category/Highschool"
    },
    {
      name: "Freshman",
      url: "category/Freshman"
    },
    {
      name: "Remedial",
      url: "category/Remedial"
    },
    {
      name: "Development",
      url: "category/Development"
    }
  ]
  
 

  
    return (
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-none outline-none flex gap-1">
          <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-opacity-95 bg-slate-100 dark:bg-gray-800 rounded-[5px] rounded-t-0 dark:border-gray-600">
          <DropdownMenuLabel>
          <button className="dark:hidden px-4" onClick={()=>setTheme('dark')}>


<GoMoon size={24}/>
</button>
<button className="px-4 hidden dark:block" onClick={() => setTheme("light")}>
<LuSunMedium size={24}/>
</button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup >
          <Accordion type="single" collapsible className="w-full">
     
     
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="text-sm  hover:no-underline hover:border-none ">Category</AccordionTrigger>
        <AccordionContent>
        {category.map((cat,index)=>{
              return <Link key={index} className="hover:bg-slate-600 dark:hover:bg-gray-800" href={`/${cat.url}`}><DropdownMenuRadioItem  value="top">{cat.name}</DropdownMenuRadioItem></Link>
            })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div className="">
    <Link href="/#courseslist" className="p-2 no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium">Courses</Link>
    </div>




<div className="">
<Link href="/cart" className="p-2 no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium">Cart{carts&&`(${carts.length})`}</Link>
</div>
<div className="p-1 no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium">  <Modal
label="Signup"
title="Sign Up"
>
  <div className="p-3 flex flex-col gap-6">
    {/* <Input type="text" label="Username"/>
    <Input type="phone" label="Phone"/>
    <Input type="password" label="Password"/>
    
    <Input type="password" label="Confirm Password"/> */}
  </div>
</Modal></div>
<div className="p-1 no-underline text-gray-500 dark:text-gray-400 font-medium  hover:dark:text-green-400 hover:text-rose-400 transition duration-300 font-medium">
  <Modal
label="Login"
title="Sign In"
>
  <div className="p-3 flex flex-col gap-6">
    {/* <Input type="text" label="Username"/>
    <Input type="password" label="Password"/> */}
  </div>
</Modal>
</div>
            
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    
   );
}
 
export default MobileMenu;