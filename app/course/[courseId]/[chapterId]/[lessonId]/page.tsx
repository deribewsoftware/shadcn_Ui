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
  const [lessonsData,setLessons]=useState<any>(null);
  const[showSubmit, setShowSubmit] = useState(false);

  const handleOptionClick = (e:any,ans:number,index:number) => {
   const isCorrect=e.target.value==ans;
   setDisabled(e.target.checked)
   if (isCorrect){
    e.target.parentElement.classList.add("bg-teal-200");
    e.target.parentElement.classList.add("dark:bg-teal-600");
    setScore((prev)=>prev+1)
    

   }else{
    if (choice_array[ans]?.current) {
      choice_array[ans].current.classList.add("bg-teal-200");
      choice_array[ans].current.classList.add("dark:bg-teal-600");
    }
    e.target.parentElement.classList.add("bg-rose-200");
    e.target.parentElement.classList.add("dark:bg-rose-600");

   }
   
  };

  


  const onNextChangeQuestion = ()=>{
    if(indexQuestion<questions.length-1){
      setIndexQuestion((prev)=>prev+=1)
      choice_array.map((option)=>{
        option.current.classList.remove("bg-teal-200");
        option.current.classList.remove("dark:bg-teal-600");
        option.current.classList.remove("bg-rose-200");
        option.current.classList.remove("dark:bg-rose-600");
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
    const  lessonsData=lessons.filter((ls:any)=>ls.chapterId===params.chapterId)
    const lessonData=lessonsData.filter((ls:any)=>ls.lessonId===params.lessonId)
    setLesson(lessonData)
    setLessons(lessonsData)
   },[]);






  

const [currentLesson, setCurrentLesson] = useState(parseInt(params.lessonId) || 1);

  const onPrevChange = () => {
    if (currentLesson > 1) {
      const newLessonId = currentLesson - 1;
      router.push(`/course/${params.id}/${params.chapterId}/${newLessonId}`);
      

      setCurrentLesson(newLessonId);
    }
    else{
      router.push(`/course/${params.id}/${params.chapterId}/${lessonsData.length}`);

    }
    router.refresh();
  };

  const onNextChange = () => {
    // You should check whether the next lesson exists based on your logic
    
    if(currentLesson<lessonsData.length){
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

  return ( <div className="flex flex-col gap-20 font-serif text-[18px]">
    <Navbar/>
    <div className="lg:flex w-full justify-center gap-20 p-2 md:px-6 lg:px-0">
   <div className="flex flex-col w-full lg:w-7/12"> 
   
   

   <Container
   childern={lesson&&<div className="flex flex-col gap-4 p-2 md:p-6 md:px-4 lg:px-4">
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
   <div className="p-2 flex flex-col justify-between lg:flex-row dark:text-300"> 
   <Heading title={lesson[0].title}/>
   <p className=" text-slate-400  ">Lesson:{lesson[0].lessonId}</p>
      </div>
      <p className="bg-teal-100 dark:bg-gray-700 p-3 rounded-[5px]">{lesson[0].introduction}</p>

    <div className="">
      {lesson[0].contents.map((content:string,index:number)=><p key={index} className="p-2">{content}</p>)}
    </div>
      
       <div className="bg-sky-200 flex flex-col gap-2 p-3 rounded-[5px] border-l-[3px] border-sky-600 dark:border-gray-900 dark:bg-gray-700">
        <h1 className="text-sky-600 dark:text-white font-medium text-lg">Remark</h1>
       <p>{lesson[0].remark}</p>
       </div>
       
      
      
      
      
       <div className=" flex flex-col text-slate-600 dark:text-gray-400 font-serif gap-2">
       <h1 className="font-semibold mt-2 text-lg">Conclusions</h1>
       <p>{lesson[0].summary}</p>

       </div>
      
{/* questions */}
<div className="lg:p-4">
      <div className="flex flex-col lg:flex-row justify-between md:px-10 py-2">
      <h1 className="text-lg font-medium">{lesson[0].title} Quizzes</h1>
      <h2 className="text-sm">score:{score}</h2>
      <p className="text-slate-600">{indexQuestion+1} out of {questions.length}</p>
      </div>
      <hr className="h-[2px] w-full bg-slate-200"/>
      <div className="mt-4">
        <div className="flex gap-1 py-2 w-full">
         
            <div className="text-center w-6 h-6 text-lg font-semibold  bg-teal-200 dark:bg-gray-700 rounded-full ">{question.id}</div>
       
          <h2 className="text-lg">{question.question}</h2>
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
  <AccordionTrigger ><div className="text-lg text-captalize">
   <h5 className="text-lg">Explanation</h5>
   
    </div></AccordionTrigger>
  <AccordionContent className="bg-teal-100 dark:bg-gray-700  p-2">
   <p>{question.explanation}</p>
  </AccordionContent>
</AccordionItem>





</Accordion>

         } </div>
       <div className="flex justify-end px-10 mt-10"> 
        {showSubmit? <button className="dark:bg-gray-700 dark:hover:bg-gray-600 border-none bg-teal-300 hover:teal-400 rounded-[5px] px-2 py-1"  onClick={onsubmit}>
          submit
        </button>:<button className="dark:bg-gray-700 dark:hover:bg-gray-600 border-none bg-teal-300 hover:teal-400 rounded-[5px] px-2 py-1"  onClick={onNextChangeQuestion}>
          Next Question
        </button>}
        </div>
      </div>
    </div>

   </div>}
   />
   </div>
   <div className="w-full mt-6 lg:m-0 lg:w-3/12 flex h-full justify-center lg:p-4">
    <Container
    childern={<CourseContent courseId={params.id}/>}
    />
   </div>
  </div>
  <div className="flex flex-col p-3 gap-4">
    <Heading title="Related Courses"/>

  <div className='flex justify-center flex-wrap gap-8 lg:px-10'>

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
 
  </div> );
}
 
export default CourseLesson;