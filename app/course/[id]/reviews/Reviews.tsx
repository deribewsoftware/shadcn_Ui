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
  
  return ( <div className="flex py-2 border-b-[2px]">
    <div className="flex justify-center p-2 ">
      <Image 
     
      src={image} alt={name}
      className=" rounded-full  h-[60px] w-[60px] "
      />
    </div>
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full justify-between  text-lg">
        <h1>{name}</h1>
        <p>{date}</p>
      </div>
      <div className="flex px-2">
        <Rating value={rating} readOnly className="text-teal-400"/>
      </div>
      <div className="flex justify-center ">
        <p className="justify-start p-4">{description}</p>

      </div>
      
     
    </div>
  </div> );
}
 
export default Reviews;