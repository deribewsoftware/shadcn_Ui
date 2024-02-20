import prisma from "@/lib/prismadb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"


export async function POST(req:Request) {
  console.log("user created");
  const body=await req.json()

  const {name,email,password}=body
  const user = await prisma.user.findUnique({where: {email: email}})

  if (user) {
    throw new Error('User already exists');
  }

  const hashPassword=await bcrypt.hash(password,10)

  const newUser= await prisma.user.create({
    data:{name:name,email:email,hash:hashPassword}
  });
  console.log(newUser);
  return NextResponse.json(newUser);
  
}