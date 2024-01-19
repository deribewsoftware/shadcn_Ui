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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";





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
    if(indexQuestion<questions.length){
      setIndexQuestion((prev)=>prev+=1)
      choice_array.map((option)=>{
        option.current.classList.remove("bg-teal-200");
        option.current.classList.remove("bg-rose-200");
      })
      setDisabled(false);
     
      
    }
   
    
  }
  const onPrevChangeQuestion  = ()=>{
    if(indexQuestion>0){
      setIndexQuestion((prev)=>prev-=1)
      
     
      
    }
   
    
  }
  
  useEffect(() => { setQuestion(questions[indexQuestion])},[questions,indexQuestion]);






  

const [currentLesson, setCurrentLesson] = useState(parseInt(params.lessonId) || 1);

  const onPrevChange = (data:number) => {
    if (data > 1) {
      const newLessonId = currentLesson - 1;
      router.push(`/course/${params.id}/${params.chapterId}/${newLessonId}`);
      router.refresh();

      setCurrentLesson(newLessonId);
    }
  };

  const onNextChange = (data:number) => {
    // You should check whether the next lesson exists based on your logic
    const newLessonId = currentLesson + 1;
    router.push(`/course/${params.id}/${params.chapterId}/${newLessonId}`);
      router.refresh();
    setCurrentLesson(newLessonId);
  };


// const onPrevQuestion = () => {
//   setIndex((prev)=>prev-1);
// }
// const onNextQuestion = () => {
//   setIndex((prev)=>prev+1);

// }


  return ( <div className="flex flex-col gap-20">
    <Navbar/>
    <div className="md:flex w-full justify-center gap-20 p-2">
   <div className="flex flex-col w-full md:w-7/12"> 
   
   

   <Container
   childern={<div className="flex flex-col gap-4 p-2 md:p-6">
    <div className="flex justify-between p-2 flex-wrap">
    <p className="text-sm text-slate-400 ">Biology</p>
      <p className="text-sm text-slate-400  ">Chapter:One <span>Bacteria</span></p>
    </div>
    <div className="flex justify-between p-2 flex-wrap">
   <button onClick={()=>onPrevChange(4)}
    className="border border-[1.5px] 
    border-slate-400 hover:text-teal-400 
   hover:border-teal-400 px-2 py-1 
   rounded-[5px]">Prev</button>
    <button onClick={()=>onNextChange(4)}
    className="border border-[1.5px] 
    border-slate-400 hover:text-teal-400 
   hover:border-teal-400 px-2 py-1 
   rounded-[5px]">Next</button>
     
    </div>
   <div className="p-2"> <Heading
      title="Indroduction  of Bacteria"
      /></div>
    <p className="bg-teal-100 p-3 rounded-[5px]">A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <div className="bg-sky-200 flex flex-col gap-2 p-3 rounded-[5px] border-l-[3px] border-sky-600">
        <h1 className="text-sky-600 font-medium text-md">Remark</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       </div>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <h1 className="font-semibold mt-2 text-lg">Whata Is Data?</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <h1 className="font-semibold mt-2 text-lg">Whata Is Data?</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <h1 className="font-semibold mt-2 text-lg">Whata Is Data?</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <h1 className="font-semibold mt-2 text-lg">Whata Is Data?</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <h1 className="font-semibold mt-2 text-lg">Whata Is Data?</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>
       <div className=" flex flex-col text-slate-600 font-serif gap-2">
       <h1 className="font-semibold mt-2 text-lg">Conclusions</h1>
       <p>A desire to learn about doing business in
       Ethiopia and a willingness to engage with the course
        materialA desire to learn about doing business in Ethiopia and a willingness to engage with the course
       materialA desire to learn about doing business in Ethiopia and 
       a willingness to engage with the course material</p>

       </div>
      
{/* questions */}
<div className="md:p-4">
      <div className="flex flex-col md:flex-row justify-between md:px-10 py-2">
      <h1 className="text-lg font-medium">Indroduction  of Bacteria Quizzes</h1>
      <h2>score:{score}</h2>
      <p className="text-slate-600">{indexQuestion+1} out of {questions.length}</p>
      </div>
      <hr className="h-[2px] w-full bg-slate-200"/>
      <div className="mt-4">
        <div className="flex gap-1 py-2 w-full">
         
            <div className="py-1 px-3 text-lg font-semibold  bg-teal-200 rounded-full h-8 w-8 ">{question.id}</div>
       
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
       <div className="flex justify-between px-10 mt-10"> 
        <button className="border-none bg-teal-300 hover:teal-400 rounded-[5px] px-2 py-1"  onClick={onNextChangeQuestion}>
          Next Question
        </button>
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