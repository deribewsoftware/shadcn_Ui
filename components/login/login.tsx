"use client"

import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/input";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Modal from "../modal/modal";
const Login = () => {
const router=useRouter();
const [isOpen,setOpen]=useState(false);
  const [Loading,setLoading]=useState(false);
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues:{
    
      email:"",
      password:""
    }

  })
  const onSubmit:SubmitHandler<FieldValues>=(data) => {

   
    setLoading(true)
    axios.post("api/auth/register",data).then((response) => {
      toast.success("Successfully logged in")
      setOpen(!isOpen)
      router.push("#")
      router.refresh()
      
    }).catch((error) => {
      toast.error("error occured in login")
    }).finally(()=>{
      setLoading(false)
      
    });
    
        
    
  }





  return ( <Modal label={"Login"}  title={"Signin"} setOpen={()=>setOpen(!isOpen)} isOpen={isOpen}>
    <div className="w-sm flex flex-col gap-2">

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
</div> 
  </Modal>);
}
 
export default Login;

