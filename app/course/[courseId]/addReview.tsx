'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { Rating } from "@mui/material";

import { useState } from "react";

import axios from "axios";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useRouter } from "next/navigation";
import Container from "@/components/container/container";
import toast from "react-hot-toast";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import StarOutlined from "@mui/icons-material/StarOutlined";
interface AddReviewsProps{
  course:any|null;
}
const AddReviews:React.FC<AddReviewsProps> = ({course}) => {
  const router=useRouter();
  const [isLoading,setLoading] =useState(false);
  const [isvalue,setIsValue] = useState(0)
const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm<FieldValues>({
  defaultValues:{
    comment:"",
    courseId:course.id,
  }
  
});

const setCostume=(id:string,value:any)=>{
  setValue(id,value);

}

const onSubmit:SubmitHandler<FieldValues>=(data)=>{
  setLoading(true);
  axios.post('/api/reviews',data).then(()=>{
    toast.success("Review  created  successfully")
    router.refresh()
    reset();
  }).catch((errors)=>{
    toast.error("something went wrong");
  }).finally(()=>{
    setLoading(false);
  });
  console.log(data);

}

if (!course){
  return null;
}
  return (<Container childern={
     <div className="p-4">
    <Heading title="Rating This Course" />
    <div className="flex flex-col mt-4 gap-2">
    <Rating size="large" precision={0.5} onChange={(event,newValue)=>{
      setCostume("rating",newValue);
      setIsValue(newValue||0);
    }}
    emptyIcon={
      <StarOutlined fontSize="inherit" className="text-gray-200 dark:text-gray-600" />
    }
    />

   {isvalue?<div className="flex w-full gap-1">
   <div className="w-11/12">
   <Input
   
   id="comment"
   label="Write Your Comment"
   required
   register={register}
   errors={errors}
   disabled={isLoading}
   type="text"
   />
   </div>
    <div className="flex pt-4 justify-center  items-center">
   <button onClick={handleSubmit(onSubmit)} className="text-gray-500 dark:text-gray-400 font-bold hover:text-blue-500 hover:dark:text-blue-400 transition  duration-300"><IoIosSend size={40}/></button>
    </div>
   </div>:""}
  

    
  </div>
  </div>}/> );
}
 
export default AddReviews;