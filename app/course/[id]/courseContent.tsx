import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { coursesContents } from "@/lib/courseContent"

export function CourseContent() {
  return (
    <Accordion type="single" collapsible className="w-full p-2">

      {coursesContents.map((courseContent,index) =>{
        return <AccordionItem key={index} value="item-1" className="bg-slate-200 my-4 px-1 rounded-lg">
        <AccordionTrigger ><div className="flex gap-3">
         <h5>Chapter:{courseContent.chapter}</h5>
         <h5>Chapter:{courseContent.title}</h5>
          </div></AccordionTrigger>
        <AccordionContent className="bg-white">
          <ul className="">
            {courseContent.lessons.map((lesson,ind)=>{
return <li key={ind}>{lesson}</li>
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      })}


     
      
    </Accordion>
  )
}
