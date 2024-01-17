"use client"
import Container from "@/components/container/container";
import CourseContent from "../../courseContent";
import Heading from "@/components/Heading/Heading";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import { courses } from "@/lib/courses";
import Card from "@/components/card/card";
import { questions } from "@/lib/questions";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { list } from "postcss";




interface IParams{
  chapterId: string;
  lessonId: string;
  id:string;
}

const CourseLesson = ({params}:{params:IParams}) => {
const router=useRouter();
const answersArray:{[key:string]:any}[]=questions.map((question)=>({id:question.id,answer:null,disabled:false}))

  
console.log(answersArray)

const [showQuizess,setShowQuizess]=useState(false);
const [showExplanation,setShowExplanation]=useState(false);
const [userAnswerData,setUserAnswerData]=useState<any>(answersArray);
const [userAnswer,setUserAnswer]=useState<any>({id:"",answer:0,disabled:false});
const [index,setIndex]=useState(0)
const [question,setQuestion]=useState(questions[index])

useEffect(() => {
  setUserAnswerData((prev:any)=>prev.map((item:any)=>{
if(item.id===userAnswer.id) {
return{...item,answer:userAnswer.answer,disabled:userAnswer.disabled}
}
return item;
  }));
},[userAnswer]);

useEffect(() =>{
  setQuestion(questions[index]);
},[questions,index]);


// console.log("userAnswerData",userAnswerData);
// console.log("userAnswer",userAnswer);

const [selectedAnswer, setSelectedAnswer] = useState(null);
  const isAnswerCorrect = selectedAnswer== question.answer;

  const onHandleChange = (event:any) => {
    const selectedValue = event.target.value;
    setSelectedAnswer(selectedValue);
  };
console.log("onHandleselected",selectedAnswer,question.answer,isAnswerCorrect);
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


const onPrevQuestion = () => {
  setIndex((prev)=>prev-1);
}
const onNextQuestion = () => {
  setIndex((prev)=>prev+1);

}
console.log("index",index)

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
      
<div className="flex flex-col gap-10 mt-20">
  <Heading title="Quizzes"/>
  <div className="flex justify-end"><p>{index+1}/{questions.length}</p></div>

  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <p>{question.id}</p>
      <p>{question.question}</p>
    </div>
    <ul className="p-2">
        {question.choices.map((choice, index) =>{
return <li className={` ${isAnswerCorrect? "bg-teal-400":"bg-rose-400"}`} key={index}> <input name={question.id} type="radio" onChange={onHandleChange} value={index} /> <label>{choice}</label></li>
        })}
      </ul>
  </div>
   <div className="px-4 flex justify-between">
    <button onClick={onPrevQuestion }>Prev</button>
    <button onClick={onNextQuestion }>Next</button>
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