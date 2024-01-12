import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { coursesContents } from "@/lib/courseContent"

export function CourseContent() {
  return (
    <Accordion type="single" collapsible className="w-full p-2" >

      {coursesContents.map((courseContent,index) =>{
        return <AccordionItem key={index} value={`${index}`}className="border border-slate-200  my-4 px-1 rounded-[6px]">
        <AccordionTrigger ><div className="flex gap-6 text-lg text-captalize">
         <h5>Chapter:{courseContent.chapter}</h5>
         <h5>{courseContent.title}</h5>
          </div></AccordionTrigger>
        <AccordionContent className="bg-white">
          <ul className="">
            {courseContent.lessons.map((lesson,ind)=>{
return <li className="flex text-md  gap-2  hover:underline  hover:text-teal-500 p-1 transition duration-300" key={ind}>
  <h5>Lesson:{ind+1}</h5>
  <h5>{lesson}</h5>
</li>
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      })}


     
      
    </Accordion>
  )
}
