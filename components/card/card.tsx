import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "../container/container";




interface CardProps{
  id: string;
  subject: string;
  category: string;
  cover: any; // Assuming cover is the path to the image
  price: number;
  // users: string[]; // Assuming users are identified by strings
  // reviews: string[]; // Assuming reviews are identified by strings
  rating: number;
  // description: string;
}


const Card:React.FC<CardProps> = ({id,subject,category,cover,price,rating}) => {
  return ( <Container
  childern={<div className="w-full md:w-72 h-auto  ">
  <div className="w-full ">
    <Image src={cover} alt={subject} className="h-[200px] w-full rounded-t-[5px]"/>
  </div>
  <div className="flex flex-col p-3 gap-4">
    <div className="flex justify-between px-2">
      <Link href={`/category/${category}`} className="bg-gray-200 px-1 cursor-pointer rounded-full items-center text-center text-sm">{category}</Link>
      <div  className="px-1  bg-teal-200  rounded-full items-center text-center text-sm font-medium">{price}ETB</div>
    </div>
    <div className="flex justify-center">
      <h1 className="hidden md:block text-xl font-semibold p-1">{subject.length>21? subject.substring(0,19)+"...":subject}</h1>
      <h1 className=" md:hidden text-2xl font-semibold p-1">{subject.length>30? subject.substring(0,30)+"...":subject}</h1>
    </div>
    <div className="flex justify-center"><Rating readOnly value={rating} size="medium"/></div>

  </div>
  <div className="m-3">
  <Link href={`/course/${id}`} className="w-full flex justify-center border border-slate-400 hover:border-slate-400 hover:bg-teal-600 hover:text-white rounded  duration-300 p-2">
    <p className="text-lg font-medium ">Get started</p>
  </Link>
  </div>
</div>}
  /> );
}
 
export default Card;