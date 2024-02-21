import prisma from "@/lib/prismadb"

export async function getCourses(){
  try{
    const courses = await prisma.course.findMany({
      
    });
  return courses
  }catch(e){
    return null;
  }
  
}