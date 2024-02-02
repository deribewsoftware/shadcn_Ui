"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { coursesContents } from "@/lib/courseContent"
import { useRouter } from "next/navigation"
interface courseContentProps{
  courseId: string;
}
const  CourseContent:React.FC<courseContentProps>=({courseId})=> {
const router=useRouter();
  const onLessonRouter=(courseId:string,chapterId:string,lessonId:string)=>{
router.push(`/course/${courseId}/${chapterId}/${lessonId}`)
router.refresh()
  }
  return (
    <Accordion type="single" collapsible className="w-full p-1" >

      {coursesContents.map((courseContent,index) =>{
        return <AccordionItem key={index} value={`${index}`}className="border border-slate-200 dark:border-gray-600 px-2 md:px-6 m-2 rounded-[6px] ">
        <AccordionTrigger ><div className="flex gap-1 md:gap-4 text-md text-captalize  ">
         <p className="text-sm md:text-lg text-rose-600 dark:text-teal-400">Chapter:{courseContent.chapter}</p>
         <p className="text-sm md:text-lg">{courseContent.title}</p>
          </div></AccordionTrigger>
        <AccordionContent className="bg-background">
          <ul className="">
            {courseContent.lessons.map((lesson,ind)=>{
return <li onClick={()=>onLessonRouter(courseId,`${index+1}`,`${ind+1}`)} className="flex text-md  gap-2  hover:underline  hover:text-teal-500 p-1 transition duration-300" key={ind}>
  <p>Lesson:{ind+1}</p>
  <p>{lesson}</p>
</li>
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      })}


     
      
    </Accordion>
  )
}
export default CourseContent;