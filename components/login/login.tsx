"use client"

import { FieldValues, RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import Input from "../input/input";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
const router=useRouter();
  const [Loading,setLoading]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues:{
    
      email:"",
      password:""
    }

  })
  const onSubmit:SubmitHandler<FieldValues>=(data) => {

   
    setLoading(true)
    axios.post("https://ethio-exams-api.vercel.app/api/v1/login",data).then((response) => {
      toast.success("Successfully logged in")
      console.log("data",response)
    }).catch((error) => {
      toast.error("error occured in login")
    }).finally(()=>{
      setLoading(false)
      router.push("/")
      router.refresh()
    });
    
        
    
  }





  return ( <div className="w-sm flex flex-col gap-2">

    <div className="flex flex-col">
      
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
  </div> );
}
 
export default Login;

