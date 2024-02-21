import { getCurrentUser } from "@/actions/currentUser";
import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'
export async function POST(req: Request){
  const body=await req.json();
 const user=await getCurrentUser();
 if (!user){
  return NextResponse.error()
 }
 if (user&&(user?.role==='ADMIN')){
  return NextResponse.error()
 }
  const {subject,
    cover ,
    videoUrl,
    price,
    category,
    rating ,
    descriptions ,
    requirements ,
    whoShouldTake,}=body;


    const newCourse=await prisma.course.create({
      data:{
        creatorId:user.id,
        subject:subject,
        cover:cover,
        videoUrl:videoUrl,
        price:parseInt(price),
        category:category,
        rating:parseFloat(rating),
        descriptions:descriptions,
        requirements:requirements,
        whoShouldTake:whoShouldTake,

      }
     
    })

    return NextResponse.json(newCourse);
}