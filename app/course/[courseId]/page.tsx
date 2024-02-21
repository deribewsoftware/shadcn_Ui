"use client"

import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/container";
import axios from "axios";
import { useState, useEffect } from "react";

interface IPrams{
  courseId:string;
}
type Course={
  title:string;
  cover:string;
  video:string;
  description:any;
  requiremnts:any;
  reviews:any;}
  

const Course = ({params}:{params:IPrams}) => {

  const [course,setCourse]=useState<Course|any>(null)
  useEffect(()=>{
    async function fetchData() {
      try{
        const response=await axios.get(`/api/course/${params.courseId}`)
        setCourse(response.data);
      }

      catch(error){

      }
    }
    fetchData();
    
  },[params.courseId])
  if(!course){
    return ( <div> no Course</div>)
  }
  
  return ( <div className="flex justify-center">

<div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 flex flex-col gap-10  pt-10">

  <h1>{course.subject}</h1>
  <div>video area</div>
  <Container
  childern={
    <div className="space-y-4 p-4">
      <Heading title="About Course"/>
      <div className="" dangerouslySetInnerHTML={{ __html: course.descriptions}}></div>
      </div>
  }
  />

<Container
  childern={
    <div className="space-y-4 p-4">
      <Heading title="About Course"/>
      <div className="" dangerouslySetInnerHTML={{ __html: course.descriptions}}></div>
      </div>
  }
  />


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
</div>

  </div>);
}
 
export default Course;





















// "use client"
// import Container from "@/components/container/container";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// import RatingCourse from "./rating/rating";
// import Heading from "@/components/Heading/Heading";
// import { Rating } from "@mui/material";
// import Reviews from "./reviews/Reviews";
// import { reviews } from "@/lib/reviews";
// import CourseContent from "./courseContent";
// import Navbar from "@/components/navbar/Navbar";
// import Header from "@/components/Header";
// import { courses } from "@/lib/courses";
// import { useCart } from "@/hooks/use.cart";
// import CourseDescribeList from "../coursedescribeList";


// interface CourseProps{
//   id: string;
// }

// const Course = ({params}:{params:CourseProps}) => {



//   const requirements = [
//     "Access to a computer, laptop, or mobile device with an internet connection",
//     "Basic computer literacy and proficiency in using online tools",
//     "Familiarity with business concepts and terminology (recommended but not required)",
//     "A desire to learn about doing business in Ethiopia and a willingness to engage with the course material"
// ]

// const target_audience = [
//   "Anyone who is interested in starting a business in Ethiopia",
//   "Business owners looking to expand their business in Ethiopia",
//   "Investors seeking to understand the business landscape in Ethiopia",
//   "Individuals in the diaspora interested in doing business in Ethiopia",
//   "Professionals and consultants who work with businesses in Ethiopia or Ethiopian businesses abroad"
// ]

// const aboutCourse=["Welcome to this practical course on doing business in Ethiopia! Whether you are looking to start a new business or expand an existing one in Ethiopia, this course will provide you with valuable insights and guidance to help you navigate the challenges and opportunities of the Ethiopian market. As your instructor, I am excited to share with you my over 10 years of experience in the business world, including valuable lessons learned from both successes and failures.",
// "During my career, I have had the opportunity to explore different business sectors, from retail to real estate, and I have even had the pleasure of touring various countries to gain knowledge on international business practices. However, it is my experience in Ethiopia's unique business landscape that sets me apart as an instructor. Through firsthand experience, I have navigated the challenges and complexities of starting and running a business in Ethiopia, and I am excited to share this knowledge with you.",
// "In this course, you will gain a comprehensive understanding of Ethiopia's business environment, including legal requirements, cultural norms, and market trends. You will also learn practical skills, such as how to develop a business plan, secure funding, and effectively market your products or services. By the end of this course, you will have the tools and knowledge needed to confidently start or expand your business in Ethiopia. Join me on this exciting journey of discovery and growth in the Ethiopian business world!"]
//   const [isScroll, setScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window !== undefined) {
//         if (window.scrollY > 2000) {
//           setScroll(true);
//         } else {
//           setScroll(false);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
 
// const router=useRouter()
// const id=params.id
// const {addToCart}=useCart();

// const course=courses.filter((course) => course.id==id)



//   return ( 
//   <><Header
//   title='Alpha Academy || Biology Course'
//   description={aboutCourse[0]+aboutCourse[1]}
//   keywords='Programming, High School Courses, Freshman Courses, Entrance Exams, Exit Exams, Online Education, Lifelong Learning'
// />
// <div>

//     <Navbar/>
//     <div className="lg:flex justify-center lg:min-h-screen lg:p-10 relative ">
//     <div className="lg:flex justify-center items-center   min-h-screen  w-full lg:w-7/12  ">
//     <div className="flex flex-col gap-10 p-2 lg:p-10 ">
//       <h1 className="text-3xl font-bold lg:mt-4">
//         {course[0].subject} Course
//       </h1>


//       <Container childern={ 

// <div role="status" className="flex items-center justify-center h-[400px] bg-gray-300  rounded-lg animate-pulse dark:bg-gray-700">
//     <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
//     <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
//     <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
//   </svg>
//     <span className="sr-only">Loading...</span>
// </div>
// }/>




//       <Container childern={ <div className="p-3 flex flex-col gap-4">
//   <Heading
//   title="About Courses"
//   />
//   <div className=" ">
//     {aboutCourse.map((requirement,index) =>{
//       return <p className="p-2 justify-start" key={index}>{requirement}</p>
//     })}
//   </div>
// </div>}/>


// <Container
// childern={
//   <CourseDescribeList
// course={course}
// />
// }
// />


// <Container childern={ <div className="p-3 flex flex-col gap-4">
//   <Heading
//   title="Requirements"
//   />
//   <ul  className=" list-disc list-inside dark:text-gray-300">
//     {requirements.map((requirement,index) =>{
//       return <li key={index}>{requirement}</li>
//     })}
//   </ul>
// </div>}/>


// <Container childern={ <div className="p-3 flex flex-col gap-4">
//   <Heading
//   title="Who is this course for?"
//   />
//   <ul  className=" list-disc list-inside dark:text-gray-300">
//     {target_audience.map((target,index) =>{
//       return <li key={index}>{target}</li>
//     })}
//   </ul>
// </div>}/>









// <Container
//      childern={<CourseContent courseId={id.toString()}/>}
//      />

       
      
//      <RatingCourse/>


//      <Container childern={ <div className="p-3 flex flex-col gap-2">
//       <Heading title="Add Rating"/>
//       <Rating/>
//      </div>}/>

// <Container childern={ <div className="p-3 flex flex-col gap-2">
// <Heading title="A&Q"/>
 
// </div>}/>

// <Container childern={ <div className="p-3 flex flex-col gap-2">
// <Heading title="Course Reviews"/>
// <div className="flex flex-col">
//   {reviews.map((review,index) =>{
// return <Reviews key={index}
// name={review.name}
// description={review.description}
// rating={review.rating}
// date={review.date}
// image={review.image}
// />
//   })}
// </div>
// </div>}/>


//     </div>
//     </div>






//     <div className="flex justify-center items-center w-full lg:w-3/12 p-2 lg:px-4 overflow-y-auto ">

//       <div className={`hidden lg:block  lg:mt-20 overflow-y-auto overflow-x-hidden  ${isScroll? "":"top-10 lg:fixed lg:w-3/12 lg:px-8"} duration-500`}>
      
// <CourseDescribeList
// course={course}
// />
//       </div>
//     </div>
//   </div> 
  
//   </div></>);
// }
 
// export default Course;