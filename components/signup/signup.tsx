"use client"

import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/input";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Modal from "../modal/modal";
import {signIn} from 'next-auth/react'
const Signup = () => {
const router=useRouter();
  const [Loading,setLoading]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues:{
     name:"",
      email:"",
      password:""
    }

  })
  const onSubmit:SubmitHandler<FieldValues>=(data) => {

   
    setLoading(true)
    axios.post("/api/user/register",data).then((response) => {
      console.log("response",response);
      toast.success("Account Created Successfully ")
     
      signIn('credentials',{
        email: data.email,
        password: data.password,
        redirect:false,
       }).then((callback)=>{
         if (callback?.ok){
           router.push('/')
           router.refresh()
           
           toast.success("account logged in successfully")
           
         }
         if (callback?.error){
           toast.error(callback.error)
         }
       }).catch((error)=>toast.error('something went wrong')).finally(() => {
               setLoading(false)
       })  
       
    }).catch((error) => {
      toast.error("error occured in login")
    }).finally(()=>{
      setLoading(false)
      
    });
    
    
  }





  return (
    <div className="bg-white dark:bg-gray-800 py-4 w-full md:max-w-md flex flex-col gap-2">

<div className="flex flex-col">
<Input
    id="name"
    label="Your Full Name" 
    type="text" 
    register={register}
    errors={errors}     
  />
  
  <Input
    id="email"
    label="Email" 
    type="email" 
    register={register}
    errors={errors}     
  />

<Input
    id="password"
    label="Password" 
    type="password" 
    register={register}
    errors={errors}     
  />
</div>
<div className="flex justify-end w-full">
  <button className="bg-white hover:border-rose-600  border border-gray-200 dark:border-gray-700 hover:dark:border-green-400 dark:bg-gray-700 rounded-[5px] hover:dark:bg-gray-800 transition duration-300 px-2 py-1 text-center " onClick={handleSubmit(onSubmit)}>{Loading? "Loading...":"Submit"}</button>
</div>
</div> 
  );
}
 
export default Signup;

