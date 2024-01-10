import { Rating } from "@mui/material";
import Image from "next/image";



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
  return ( <div className="w-full mx-4 md:mx-0 md:w-72 h-auto border bg-white shadow-md shadow-slate-300 rounded-[5px]  hover:shadow-teal-400 hover:bg-teal-400 duration-300 hover">
    <div className="w-full ">
      <Image src={cover} alt={subject} className="h-[200px] w-full rounded-t-[5px]"/>
    </div>
    <div className="flex flex-col p-3 gap-4">
      <div className="flex justify-between px-2">
        <div className="bg-gray-200 px-1 rounded-full items-center text-center text-sm">{category}</div>
        <div className="px-1 bg-teal-200  rounded-full items-center text-center text-sm font-medium">{price}ETB</div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg md:text-xl font-semibold p-1">{subject.length>21? subject.substring(0,19)+"...":subject}</h1>
      </div>
      <div className="flex justify-center"><Rating readOnly value={rating} size="medium"/></div>

    </div>
    <div className="m-3">
    <button className="w-full flex justify-center border border-teal-500 hover:border-slate-400 hover:bg-white rounded  duration-300 p-2">
      <p className="text-lg font-medium ">Get started</p>
    </button>
    </div>
  </div> );
}
 
export default Card;