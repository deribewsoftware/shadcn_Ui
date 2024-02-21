import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

export async function GET(){

  try{
    const courses=await prisma.course.findMany()
    return NextResponse.json(courses)
  }
  catch(err){
    return null;
  }

}