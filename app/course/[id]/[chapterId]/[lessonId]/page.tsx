import Container from "@/components/container/container";
import CourseContent from "../../courseContent";
import Heading from "@/components/Heading/Heading";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";

interface IParams{
  chapterId: string;
  lessonId: string;
  id:string;
}

const CourseLesson = ({params}:{params:IParams}) => {
  return ( <div className="flex flex-col gap-10">
    <Navbar/>
    <div className="md:flex w-full justify-center gap-20 p-2">
   <div className="flex flex-col w-full md:w-7/12"> 
   
   

   <Container
   childern={<div className="flex flex-col gap-4 p-2 md:p-6">
    <div className="flex justify-between p-2 flex-wrap">
      <Heading
      title="Indroduction Information Data"
      />
      <p className="text-sm text-slate-400 order-first md:order-last">Chapter:One <span>Data Science</span></p>
    </div>
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
       <div className="flex justify-center md:p-4">
        <button className="border border-[1.5px] border-slate-400 hover:text-teal-400 hover:border-teal-400 bg-transparent rounded-[5px] py-1 px-3">Start Quizes</button>
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
  <Footer/>
  </div> );
}
 
export default CourseLesson;