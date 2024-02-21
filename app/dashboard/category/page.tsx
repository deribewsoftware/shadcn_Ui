"use client"
import Input from "@/components/input/input";
import axios from "axios";
import { useState } from "react";
import { FieldValues, RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Category = () => {

  const [isLoading,setIsLoading]=useState(false);
  const {handleSubmit,register,formState:{errors}}=useForm<FieldValues>({
    defaultValues:{
      title:""
    }
  })

  const onSubmit:SubmitHandler<FieldValues> =(data)=>{
setIsLoading(true);
    axios.post(`/api/category`,data).then(()=>{
      toast.success("category successfully created")
    }).catch((err)=>{
      console.log("error",err);
    }).finally(()=>{
      setIsLoading(false)

    })

  }
  return ( <div className="flex flex-col gap-10">
     <Input 
     type={"text"} 
     label={"Title"} 
     register={register}
     errors={errors} 
     id={"title"}     
     />

     <button disabled={isLoading} onClick={handleSubmit(onSubmit)}>{isLoading? 'Loading...':'Create'}</button>
  </div> );
}
 
export default Category;