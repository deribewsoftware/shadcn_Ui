import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";
export async function POST(req:Request){
  const body=await req.json();

  const {title}=body;

  const newCatgory=await prisma.category.create({
    data:{title}
  })

  return NextResponse.json(newCatgory);

}