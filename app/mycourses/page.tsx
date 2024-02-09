import Navbar from "@/components/navbar/Navbar";
import MyCourseClient from "./mycourse";
import UserProfile from "@/components/userprofile/userProfile";

const MyCourses = () => {
  return ( <>
  <Navbar/>
  <div className="min-h-screen flex flex-col justify-center ">
    
<div className="flex gap-10 flex-wrap  justify-center">
  <div className="">
    <UserProfile/>
  </div>
  <div className="overflow-x-auto p-2"><MyCourseClient/></div>
</div>
    </div>
  </> );
}
 
export default MyCourses;