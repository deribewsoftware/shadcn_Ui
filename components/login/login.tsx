"use client"

import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/input";
import { useState } from "react";
import {signIn} from 'next-auth/react'
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

   
    setLoading(true);
    
    signIn('credentials',{
     email: data.email,
     password: data.password,
     redirect:false,
    }).then((callback)=>{
      if (callback?.ok){
        router.push('#')
        router.refresh()
        setOpen(!isOpen)
        toast.success("account logged in successfully")
        
      }
      if (callback?.error){
        toast.error(callback.error)
      }
    }).catch((error)=>toast.error('something went wrong')).finally(() => {
            setLoading(false)
    })  
        
    
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

<button className="w-full mx-2 px-2 py-1 border rounded-lg border-gray-700" onClick={()=>{signIn('google')}}>Signin With Google</button>
</div> 

  </Modal>);
}
 

export default Login;

