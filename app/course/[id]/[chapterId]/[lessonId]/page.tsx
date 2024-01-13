"use client"
import Container from "@/components/container/container";
import CourseContent from "../../courseContent";
import Heading from "@/components/Heading/Heading";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import { courses } from "@/lib/courses";
import Card from "@/components/card/card";
import { questions } from "@/lib/questions";
import { useState } from "react";

interface IParams{
  chapterId: string;
  lessonId: string;
  id:string;
}

const CourseLesson = ({params}:{params:IParams}) => {

const [showQuizess,setShowQuizess]=useState(false);
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
       <div className={`flex justify-center md:p-4 ${showQuizess? "hidden":"block"}`}>
        <button onClick={()=>setShowQuizess(true)} className="border border-[1.5px] border-slate-400 hover:text-teal-400 hover:border-teal-400 bg-transparent rounded-[5px] py-1 px-3">Start Quizes</button>
       </div>


       <div className={`flex flex-col gap-4  ${showQuizess? "block":"hidden"} transition duration-500`}>
        <hr className="h-[2px] bg-slate-400"/>
       <div className="p-2"> <Heading
      title="Quizzess About Indroduction  of Bacteria"
      /></div>
      <div className="flex flex-col">
        {/* questions */}
       {
        questions.map((question) =>{
         return  <div key={question.id} className="flex flex-col">
         
          <p className="text-lg font-semibold border-b-2 border-teal-400 m-2">{question.id}</p>
          <p className="p-2 justify-start w-full">{question.question}</p>
          {
            question.choices.map((choice,index)=>{
              return <div key={index} className="">
              <div className="flex gap-1">
                <input id={question.id+index} type="radio" name={question.id}/>
                <label htmlFor={question.id+index}> {choice}</label>
              </div>
            </div>
            })
          }
    
      </div>
        })
       }
      </div>
      <div className={`flex justify-center md:p-4 ${showQuizess? "block":"hidden"}`}>
        <button onClick={()=>setShowQuizess(false)} className="border border-[1.5px] border-slate-400 hover:text-teal-400 hover:border-teal-400 bg-transparent rounded-[5px] py-1 px-3">Close Quizes</button>
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