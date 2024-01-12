"use client"
import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CourseContent } from "./courseContent";
import Rating from "./rating/rating";


const Course = () => {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined) {
        if (window.scrollY > 1000) {
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
       
      
     <Rating/>
    </div>
    </div>

    <div className="flex justify-center items-center  w-full md:w-3/12 p-2 md:px-4 ">
      <div className={`  overflow-y-auto overflow-x-hidden  ${isScroll? "":"top-10 md:fixed md:w-3/12 md:px-8"}`}>
      <div className="flex flex-col overflow-y-auto overflow-x-hidden   gap-10 ">
      <h4>Course Content</h4>
     <Container
     childern={ <p> a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
      Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
      Hybrid, Atlanta, GA Area - Full Time / Direct Hire</p>}
     />
      <Container
     childern={<CourseContent/>}
     />
      <Container
     childern={ <p> a proactive, results-driven Print-On-Demand Sales Director to lead the POD business for a startup nestled within a $2-billion promotional products company. Note, this is a hybrid role in the Atlanta, Georgia area. You must be willing to go to the office in-person, and to relocate if you’re not currently living in the region.
      Salary range: $110,000 to $160,000 per yearGlobal Promotional Products Company
      Hybrid, Atlanta, GA Area - Full Time / Direct Hire</p>}
     />
     
      </div>
      </div>
    </div>
  </div> 
  <Footer/>
  </div>);
}
 
export default Course;