'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Rating } from "@mui/material";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";
import Container from "@/components/container/container";
import toast from "react-hot-toast";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
interface AddReviewsProps{
  course:any|null;
}
const AddReviews:React.FC<AddReviewsProps> = ({course}) => {
  const router=useRouter();
  const [isLoading,setLoading] =useState(false);
const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm<FieldValues>({
  defaultValues:{
    comment:"",
    course:course,
  }
  
});

const setCostume=(id:string,value:any)=>{
  setValue(id,value);

}

const onSubmit:SubmitHandler<FieldValues>=(data)=>{
  setLoading(true);
  axios.post('/api/review',data).then(()=>{
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
     <>
    <Heading title="Add Review" />
    <div className="flex flex-col mt-4 gap-2">
    <Rating onChange={(event,newValue)=>{
      setCostume("rating",newValue);
    }}/>

    <Input
    id="comment"
    label="Comment"
    required
    register={register}
    errors={errors}
    disabled={isLoading}
    type="text"
    />
   <div className="flex justify-end w-full">
   <div className="mt-2 w-1/7 px-4">
<Button title={isLoading?"Loading":"Submit"} onClick={handleSubmit(onSubmit)}/>
    </div>
   </div>
  </div>
  </>}/> );
}
 
export default AddReviews;