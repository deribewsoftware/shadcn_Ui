import Navbar from "@/components/navbar/Navbar";

const MyCourses = () => {
  return ( <>
  <Navbar/>
  <div className="min-h-screen flex justify-center items-center w-full px-2 md:px-10">
    
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
  <div className="bg-rose-400">profile</div>
  <div className="bg-green-400">MyCourses</div>
</div>
    </div>
  </> );
}
 
export default MyCourses;