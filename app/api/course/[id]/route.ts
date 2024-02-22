// pages/api/yourApiRouteName.ts
import prisma from '@/lib/prismadb';


import { NextRequest, NextResponse } from 'next/server';

  export async function GET(req:NextRequest, { params }: { params: { id: string } } ) {
    try{

      const id = params.id;

     
  const course = await prisma.course.findUnique({
  where:{
   
    id:id,
  },
  include:{chapters:true,
    reviews:{
      include:{
        customer:true
      }
  }},
  
});

return NextResponse.json(course);

    }
    catch(err){
      console.log(err);
    }
  }