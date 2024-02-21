import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/container";
import { IoIosStar } from "react-icons/io";
const RatingCourse = () => {

  const ratingData=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
  ]
  return (  <Container childern={
    <div className="flex justify-center md:px-2 w-full  flex-col md:flex-row">
      <div className="flex justify-center items-center w-full md:w-1/4 sm:py-10 ">
       <div className="border border-teal-400 border-[1.5px]   p-10 m-4 rounded-[5px]">
       <Heading title="4.5"/>
       </div>
      </div>
      <div className="flex flex-col justify-center  p-1 w-full md:w-3/4">
{ratingData.map((rating)=>{
  return <div key={rating.id} className="flex w-full px-4">
  <span className="flex ">
    <span className="mb-1 px-1 text-lg font-medium">{rating.id-1} </span>
    <IoIosStar size={24} className={`${rating.id-1? "text-teal-400":"text-slate-200"}`}/></span>
     <div className="h-2 m-2 w-full bg-slate-200">
     <div className={`h-full  bg-teal-400  rounded-r-[5px]`} style={{width:`${(rating.id-1)*100/5}%`}}></div>
     </div>
     {(rating.id-1)*100/5}%
</div>
})}
      </div>
    </div>
  }/>
  
  );
}
 
export default RatingCourse;