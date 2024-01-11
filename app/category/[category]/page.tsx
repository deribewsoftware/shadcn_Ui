import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import { courses } from "@/lib/courses";


interface IPrams{
  category: string;
}
const Category = ({params}:{params:IPrams}) => {
  const filterdata=courses.filter((course)=>course.category===params.category)
  return (<><Navbar/> <div className="flex pb-20">
<div className="flex flex-col gap-10 w-full items-center">


<div className="flex 
 bg-teal-500
  w-[90%]
   m-10
    h-72 
    flex
     justify-center 
     items-center">
      <h1 className="text-3xl md:5xl font-bold text-white ">{params.category} Courses</h1>
    </div>


    <h1 className='
    w-full
     text-2xl
      md:text-4xl
      font-semibold
       border-b mt-10
     pl-4'>New Coming  {params.category} Courses</h1>
    <div className='flex justify-center flex-wrap gap-8 md:px-10 '>

{filterdata.map((course,index)=>{
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
  </div> <Footer/></> );
}
 
export default Category;