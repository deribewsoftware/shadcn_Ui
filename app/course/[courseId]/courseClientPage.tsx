"use client"

import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/container";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RatingPage from "./rating";
import AddReviews from "./addReview";
import Reviews from "./reviews";
import CourseContentList from "./course-content-list";
import CourseContent from "./courseContent";

interface ICourseId{
  courseId:string;
}
type Course={
  title:string;
  cover:string;
  video:string;
  description:any;
  requiremnts:any;
  reviews:any;}
  

const CourseClientPage:React.FC<ICourseId> = ({courseId}) => {

  const [course,setCourse]=useState<Course|any>(null)
  useEffect(()=>{
    async function fetchData() {
      try{
        const response=await axios.get(`/api/course/${courseId}`)
        setCourse(response.data);
      }

      catch(error){

      }
    }
    fetchData();
    
  },[courseId])
  if(!course){
    return ( <div> no Course</div>)
  }
  console.log("course reviews updated",course.reviews)
  return ( <>
  <div className="flex justify-center py-10 px-2">

<div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 flex flex-col gap-10  pt-10">

  <h1 className="text-xl  font-semibold">{course.subject}</h1>
  <div>
    <video
        className="w-full rounded-lg shadow-lg"
        controls
        poster={course.cover}
      >
        <source src={course.videoUrl} type="video/mp4"  />
        Your browser does not support the video tag.
      </video></div>
  <Container
  childern={
    <div className="space-y-4 p-4">
      <Heading title="About Course"/>
      <div className="" dangerouslySetInnerHTML={{ __html: course.descriptions}}></div>
      </div>
  }
  />



{/* course contents or modules */}
<Container
  childern={
    <div className="p-4">
      <CourseContent courseId={course}/>
      </div>
  }
  />


<div className=" md:hidden">
<CourseContentList/>
</div>


<Container
  childern={
    <div className="space-y-4 p-4">
      <Heading title="Requiremets"/>
      <div className="" dangerouslySetInnerHTML={{ __html: course.requirements}}></div>
      </div>
  }
  />

<Container
  childern={
    <div className="space-y-4 p-4">
      <Heading title="Who Shuld Use Course?"/>
      <div className="" dangerouslySetInnerHTML={{ __html: course.whoShouldTake}}></div>
      </div>
  }
  />



<RatingPage/>
<AddReviews course={course}/>
<Reviews reviews={course.reviews}/>


</div>




{/* course contents lits for above md */}
<div className="fixed right-4 w-md hidden md:block">
  <CourseContentList/>

</div>






  </div></>);
}
 
export default CourseClientPage;


















