import { Avatar, Rating } from "@mui/material";
import Moment from 'react-moment';
import Container from "@/components/container/container";
import Heading from "@/components/Heading/Heading";
import StarOutlined from "@mui/icons-material/StarOutlined";
type Review={
  customer:any;
  createdAt: string;
  comment: string;
  rating: number;

}

interface ReviewsProps{
  reviews: Review[];
}

const Reviews:React.FC<ReviewsProps> = ({reviews}) => {
  return (  <Container childern={<div className="p-3">
    <Heading title="Reviews" />
    <div className="mt-4 " >{
    reviews.map((review,index)=> <div key={index} className="flex flex-col md:flex-row  w-full md:gap-4  border-b py-3 md:py-6 border-gray-200 dark:border-gray-600">
    <div className=""><Avatar alt={review.customer.name} src={review.customer.avatar}/></div>

    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col  justify-between w-full">
        <div className="flex flex-col md:flex-row md:gap-6 justify-between"> 
        <p className="font-bold">{review.customer.name}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm"> <Moment fromNow>{review.createdAt}</Moment></p>
        </div>
        <div className="">
          <Rating 
        readOnly 
        value={review.rating} 
        precision={0.5} 
        size="small" 
        emptyIcon={
          <StarOutlined fontSize="inherit" className="text-gray-100 dark:text-gray-600" />
        }
        /></div>
  
      </div>
  
      <p className="text-sm text-gray-500 dark:text-gray-400  py-1">{review.comment}</p>
    </div>
    
  </div>)
  }</div>
</div>}/> );
}
 
export default Reviews;