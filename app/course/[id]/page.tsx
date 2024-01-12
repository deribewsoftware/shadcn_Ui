"use client"
import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CourseContent } from "./courseContent";
import Rating from "./rating/rating";
import Heading from "@/components/Heading/Heading";
import { BsBarChart } from "react-icons/bs";
import { SiLibreoffice } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IconType } from "react-icons";


interface ContentListProps{
icon:IconType;
title:string;
} 



const ContentList:React.FC<ContentListProps>=({icon:Icon,title})=>{
  return(
    <div className="flex gap-4 px-2 font-sans font-light text-sm border-b-2  mx-2 py-2">
      <Icon size={24}/>
      <p>{title}</p>
    </div>
  )
}
const Course = () => {
  const requirements = [
    "Access to a computer, laptop, or mobile device with an internet connection",
    "Basic computer literacy and proficiency in using online tools",
    "Familiarity with business concepts and terminology (recommended but not required)",
    "A desire to learn about doing business in Ethiopia and a willingness to engage with the course material"
]

const target_audience = [
  "Anyone who is interested in starting a business in Ethiopia",
  "Business owners looking to expand their business in Ethiopia",
  "Investors seeking to understand the business landscape in Ethiopia",
  "Individuals in the diaspora interested in doing business in Ethiopia",
  "Professionals and consultants who work with businesses in Ethiopia or Ethiopian businesses abroad"
]

const aboutCourse=["Welcome to this practical course on doing business in Ethiopia! Whether you are looking to start a new business or expand an existing one in Ethiopia, this course will provide you with valuable insights and guidance to help you navigate the challenges and opportunities of the Ethiopian market. As your instructor, I am excited to share with you my over 10 years of experience in the business world, including valuable lessons learned from both successes and failures.",
"During my career, I have had the opportunity to explore different business sectors, from retail to real estate, and I have even had the pleasure of touring various countries to gain knowledge on international business practices. However, it is my experience in Ethiopia's unique business landscape that sets me apart as an instructor. Through firsthand experience, I have navigated the challenges and complexities of starting and running a business in Ethiopia, and I am excited to share this knowledge with you.",
"In this course, you will gain a comprehensive understanding of Ethiopia's business environment, including legal requirements, cultural norms, and market trends. You will also learn practical skills, such as how to develop a business plan, secure funding, and effectively market your products or services. By the end of this course, you will have the tools and knowledge needed to confidently start or expand your business in Ethiopia. Join me on this exciting journey of discovery and growth in the Ethiopian business world!"]
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined) {
        if (window.scrollY > 2000) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const {id}=useParams()
  return ( <div>
    <div className="md:flex justify-center md:min-h-screen md:p-10 relative ">
    <div className="md:flex justify-center items-center   min-h-screen  w-full md:w-7/12  ">
    <div className="flex flex-col gap-10 p-2 md:p-10 ">
      <h1 className="text-3xl font-bold md:mt-4">
        Course Title {id}
      </h1>


      <Container childern={ 

<div role="status" className="flex items-center justify-center h-[400px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span className="sr-only">Loading...</span>
</div>
}/>




      <Container childern={ <div className="p-3 flex flex-col gap-4">
  <Heading
  title="About Courses"
  />
  <div className=" ">
    {aboutCourse.map((requirement,index) =>{
      return <p className="p-2 justify-start" key={index}>{requirement}</p>
    })}
  </div>
</div>}/>





<Container childern={ <div className="p-3 flex flex-col gap-4">
  <Heading
  title="Requirements"
  />
  <ul  className=" list-disc list-inside dark:text-gray-400">
    {requirements.map((requirement,index) =>{
      return <li key={index}>{requirement}</li>
    })}
  </ul>
</div>}/>


<Container childern={ <div className="p-3 flex flex-col gap-4">
  <Heading
  title="Who is this course for?"
  />
  <ul  className=" list-disc list-inside dark:text-gray-400">
    {target_audience.map((target,index) =>{
      return <li key={index}>{target}</li>
    })}
  </ul>
</div>}/>









<Container childern={ <div className="p-3">Global Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearvGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire</div>}/>

       
      
     <Rating/>


     <Container childern={ <div className="p-3">Global Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearvGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire</div>}/>

<Container childern={ <div className="p-3">Global Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearvGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire</div>}/>

<Container childern={ <div className="p-3">Global Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearvGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire</div>}/>

<Container childern={ <div className="p-3">Global Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearvGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire
The Hired Guns are seeking a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
Hybrid, Atlanta, GA Area - Full Time / Direct Hire</div>}/>
    </div>
    </div>






    <div className="flex justify-center items-center w-full md:w-3/12 p-2 md:px-4 overflow-y-auto ">

      <div className={`  overflow-y-auto overflow-x-hidden  ${isScroll? "":"top-10 md:fixed md:w-3/12 md:px-8"} duration-500`}>
      <div className="flex flex-col overflow-y-auto overflow-x-hidden   gap-10 ">
      <h4>Course Content</h4>
     <Container
     childern={ <div className="flex flex-col gap-4">

      <ContentList
      title="Level:Beginner"
      icon={BsBarChart}
      />

<ContentList
      title="Resourses:2"
      icon={SiLibreoffice}
      />

<ContentList
      title="Lessons:20"
      icon={BsBarChart}
      />

<ContentList
      title="Questions and Exams:3000"
      icon={GoQuestion}
      />
<ContentList
      title="Accessed by Laptop,desktop,Mobile,Tablet and etc..."
      icon={IoIosPhonePortrait}
      />
<ContentList
      title="Communicate and Asking Questions and get Answers from Your Friends"
      icon={IoPeopleOutline}
      />
     </div> }
     />
      <Container
     childern={<CourseContent/>}
     />
     
     
      </div>
      </div>
    </div>
  </div> 
  <Footer/>
  </div>);
}
 
export default Course;