import Image from "next/image";
import Mena from "../../../../public/mena.jpeg"
import { Rating } from "@mui/material";

interface ReviewsProps{
  name: string;
  description: string;
  date: string;
  rating: number;
  image:any;
}
const Reviews:React.FC<ReviewsProps> = ({name,description,date,rating,image}) => {
  
  return ( <div className="flex py-2 border-slate-200 dark:border-gray-600 border-b-[2px]">
    <div className="flex justify-center p-2 ">
      <Image 
     
      src={image} alt={name}
      className=" rounded-full  h-[30px] w-[30px]  md:h-[40px] md:w-[40px]  "
      />
    </div>
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full justify-between  text-lg">
        <p className="font-medium pt-2 text-slate-700 dark:text-gray-300 text-sm md:text-base">{name}</p>
        <p className="text-xs md:text-sm text-gray-400">{date}</p>
      </div>
      <div className="flex md:px-2">
        <Rating value={rating} readOnly className="text-teal-400" size="small" />
      </div>
      <div className="ml-0 md:ml-4 flex justify-start ">
        <p className="justify-start pt-1 md:p-4 text-xs md:text-sm text-slate-500 dark:text-gray-400">{description}</p>

      </div>
      
     
    </div>
  </div> );
}
 
export default Reviews;