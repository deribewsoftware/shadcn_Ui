import { getCurrentUser } from "@/actions/currentUser";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb"
export async function POST(req:Request){
  const body = await req.json();
  const{comment ,rating,courseId }=body

  if (!comment || !rating|| !courseId){
    return NextResponse.json({
      status:false,
      message:"Invalid parameters"
    })
  }

  const user=await getCurrentUser();
  if (!user){
    return NextResponse.json({
      status:false,
      message:"unathorized user"
    })
  }

  const newReview = await prisma.review.create({
    data:{
      customerId:user.id,
      courseId:courseId,
      comment:comment,
      rating:rating,
    }
  })

return NextResponse.json(newReview)
}