import Card from '@/components/card/card'
import Footer from '@/components/footer/footer'
import Hero from '@/components/hero/hero'
import Navbar from '@/components/navbar/Navbar'

import { courses } from '@/lib/courses'


export default function Home() {
  return (
   <div className="flex flex-col overflow-x-hidden">
    <Navbar/>
    <Hero/>
   
    <main className='md:flex md:justify-center w-full pb-10'>
    <div className="flex flex-col gap-10">
      <h1 className='w-full text-xl md:text-4xl font-semibold border-b pl-4'>Most common Courses</h1>

  
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
      






    <h1 className='w-full text-2xl md:text-4xl font-semibold border-b mt-10 pl-4'>New Coming  Courses</h1>
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

   </main>
   <Footer/>
   </div>
  )
}
