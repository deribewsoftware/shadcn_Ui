import { getCurrentUser } from "@/actions/currentUser";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
export async function POST(req:Request){
  const body = await req.json();

  const user =await getCurrentUser();
  if (!user){
    return NextResponse.json({status:false, message:"unauthorized"});
  }

  if (user.role!=="ADMIN"){
    return NextResponse.json({status:false, message:"unauthorized"});

  }

  const {
    subject,
    category,
     cover,
     videoUrl,
     price,
     descriptions,
     requirements,
     whoShouldTake,
  }=body;

  const newCourse=await prisma.course.create({
    data:{
      creatorId:user.id,
      subject:subject,
      category:category,
      videoUrl:videoUrl,
      cover:cover,
      price:parseFloat(price),
      rating:4.5,
      descriptions:descriptions,
      requirements:requirements,
      whoShouldTake:whoShouldTake
    }
  })

  return NextResponse.json(newCourse);
}