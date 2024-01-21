"use client"
import Container from "@/components/container/container";
import CourseContent from "../../courseContent";
import Heading from "@/components/Heading/Heading";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import { courses } from "@/lib/courses";
import Card from "@/components/card/card";
import { questions } from "@/lib/questions";
import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import { lessons } from "@/lib/lessons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";





interface IParams{
  chapterId: string;
  lessonId: string;
  id:string;
}

const CourseLesson = ({params}:{params:IParams}) => {
const router=useRouter();


  


const choice1 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice2 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice3 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice4 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice_array=[choice1, choice2, choice3, choice4]
 

  
  const [score, setScore] = useState(0);
  const [indexQuestion ,setIndexQuestion] = useState(0);
  const [question, setQuestion] = useState(questions[indexQuestion]);
  const [disabled, setDisabled] = useState(false);
  const [lesson,setLesson]=useState<any>(null);
  const[showSubmit, setShowSubmit] = useState(false);

  const handleOptionClick = (e:any,ans:number,index:number) => {
   const isCorrect=e.target.value==ans;
   setDisabled(e.target.checked)
   if (isCorrect){
    e.target.parentElement.classList.add("bg-teal-200");
    setScore((prev)=>prev+1)
    

   }else{
    if (choice_array[ans]?.current) {
      choice_array[ans].current.classList.add("bg-teal-200");
    }
    e.target.parentElement.classList.add("bg-rose-200");

   }
   
  };

  


  const onNextChangeQuestion = ()=>{
    if(indexQuestion<questions.length-1){
      setIndexQuestion((prev)=>prev+=1)
      choice_array.map((option)=>{
        option.current.classList.remove("bg-teal-200");
        option.current.classList.remove("bg-rose-200");
      })
      setDisabled(false);
     
      
    }
    else{
      setShowSubmit(true);
        
    }
   
    
  }
  const onPrevChangeQuestion  = ()=>{
    if(indexQuestion>0){
      setIndexQuestion((prev)=>prev-=1)
      
     
      
    }
   
    
  }
  
  useEffect(() => { setQuestion(questions[indexQuestion])},[questions,indexQuestion]);
  useEffect(() => {
    const lessonData=lessons.filter((ls)=>ls.lessonId===params.lessonId&&ls.chapterId===params.chapterId)
    setLesson(lessonData)
   },[]);






  

const [currentLesson, setCurrentLesson] = useState(parseInt(params.lessonId) || 1);

  const onPrevChange = () => {
    if (currentLesson > 1) {
      const newLessonId = currentLesson - 1;
      router.push(`/course/${params.id}/${params.chapterId}/${newLessonId}`);
      

      setCurrentLesson(newLessonId);
    }
    else{
      router.push(`/course/${params.id}/${params.chapterId}/${lessons.length}`);

    }
    router.refresh();
  };

  const onNextChange = () => {
    // You should check whether the next lesson exists based on your logic
    
    if(currentLesson<lessons.length){
      const newLessonId = currentLesson + 1;
    router.push(`/course/${params.id}/${params.chapterId}/${newLessonId}`);
    setCurrentLesson(newLessonId);
    }
    else{
      router.push(`/course/${params.id}/${params.chapterId}/1`);
    }
    
      router.refresh();
    
  };


const onsubmit = () => {
  alert("score:"+`${score}/${questions.length}`);
}

  return ( <div className="flex flex-col gap-20">
    <Navbar/>
    <div className="md:flex w-full justify-center gap-20 p-2">
   <div className="flex flex-col w-full md:w-7/12"> 
   
   

   <Container
   childern={lesson&&<div className="flex flex-col gap-4 p-2 md:p-6">
    <div className="flex justify-between p-2 flex-wrap">
    <p className="text-sm text-slate-400 ">Biology</p>
      <p className="text-sm text-slate-400  ">Chapter:One <span>Bacteria</span></p>
    </div>
    <div className="flex justify-between p-2 flex-wrap">
   <button onClick={()=>onPrevChange()}
    className="border border-[1.5px] 
    border-slate-400 hover:text-teal-400 
   hover:border-teal-400 px-2 py-1 
   rounded-[5px]">Prev</button>
    <button onClick={()=>onNextChange()}
    className="border border-[1.5px] 
    border-slate-400 hover:text-teal-400 
   hover:border-teal-400 px-2 py-1 
   rounded-[5px]">Next</button>
     
    </div>
   <div className="p-2 flex flex-col justify-between md:flex-row"> 
   <Heading title={lesson[0].title}/>
   <p className=" text-slate-400  ">Lesson:{lesson[0].id}</p>
      </div>
      <p className="bg-teal-100 p-3 rounded-[5px]">{lesson[0].introduction}</p>

    <div className="">
      {lesson[0].contents.map((content:string,index:number)=><p key={index} className="p-2">{content}</p>)}
    </div>
      
       <div className="bg-sky-200 flex flex-col gap-2 p-3 rounded-[5px] border-l-[3px] border-sky-600">
        <h1 className="text-sky-600 font-medium text-md">Remark</h1>
       <p>{lesson[0].remark}</p>
       </div>
       
      
      
      
      
       <div className=" flex flex-col text-slate-600 font-serif gap-2">
       <h1 className="font-semibold mt-2 text-lg">Conclusions</h1>
       <p>{lesson[0].summary}</p>

       </div>
      
{/* questions */}
<div className="md:p-4">
      <div className="flex flex-col md:flex-row justify-between md:px-10 py-2">
      <h1 className="text-lg font-medium">{lesson[0].title} Quizzes</h1>
      <h2>score:{score}</h2>
      <p className="text-slate-600">{indexQuestion+1} out of {questions.length}</p>
      </div>
      <hr className="h-[2px] w-full bg-slate-200"/>
      <div className="mt-4">
        <div className="flex gap-1 py-2 w-full">
         
            <div className="py-1 px-3 text-lg font-semibold  bg-teal-200 rounded-full ">{question.id}</div>
       
          <h2>{question.question}</h2>
        </div>
        <ul>
          {question.choices.map((option, index) => (
            <li ref={choice_array[index]} key={index} className='flex gap-2 p-2'>
              <input disabled={disabled} type="radio" name="0" value={index} onChange={()=>handleOptionClick(event,question.answer,index)}/>
              <label>{option}</label>
            </li>
          ))}
        </ul>
        <div className="mt-6 ">{

        disabled&&<Accordion type="single" collapsible className="border-none" >

 <AccordionItem  value={`${question.id}`}className="border-none">
  <AccordionTrigger ><div className="text-md text-captalize">
   <h5>Explanation</h5>
   
    </div></AccordionTrigger>
  <AccordionContent className="bg-teal-100 p-2">
   <p>{question.explanation}</p>
  </AccordionContent>
</AccordionItem>





</Accordion>

         } </div>
       <div className="flex justify-end px-10 mt-10"> 
        {showSubmit? <button className="border-none bg-teal-300 hover:teal-400 rounded-[5px] px-2 py-1"  onClick={onsubmit}>
          submit
        </button>:<button className="border-none bg-teal-300 hover:teal-400 rounded-[5px] px-2 py-1"  onClick={onNextChangeQuestion}>
          Next Question
        </button>}
        </div>
      </div>
    </div>

   </div>}
   />
   </div>
   <div className="w-full mt-6 md:m-0 md:w-3/12 flex h-full justify-center md:p-4">
    <Container
    childern={<CourseContent courseId={params.id}/>}
    />
   </div>
  </div>
  <div className="flex flex-col p-3 gap-4">
    <Heading title="Related Courses"/>

  <div className='flex justify-center flex-wrap gap-8 md:px-10'>

        {courses.map((course,index)=>{
          return <Card
          key={index}
              id={course.id}
              category={course.category}
              price={course.price}
              subject={course.subject}
              rating={course.rating}
              cover={course.cover}  />
      
        })}


      </div>

      </div>
  <Footer/>
  </div> );
}
 
export default CourseLesson;