"use client"
import { FcGoogle } from "react-icons/fc";
import { FieldValues,SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/input";
import { useState } from "react";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Link from "next/link";

interface LoginProps{
  user:any;
}
const Login:React.FC<LoginProps> = ({user}) => {
const router=useRouter();

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
        
    
  }

  const signInWithGoogle=()=>{
    signIn('google',{redirect:false}).then((callback)=>{
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
  }


if (user){
router.push('/')
return null;
}


  return (
    <div className="m-2 border border-gray-200 dark:border-gray-600  rounded-[10px] bg-white dark:bg-gray-800 px-2 pt-4 pb-10 w-full md:max-w-md flex flex-col gap-2">

<div className="flex flex-col gap-4">
  <div className="py-4">
    <h1 className="font-semibold text-[16px]">Login Your Account</h1>
  </div>
  
  <Input
    id="email"
    label="Email" 
    type="email" 
    register={register}
    errors={errors} 
    userFrom    
  />

<Input
    id="password"
    label="Password" 
    type="password" 
    register={register}
    errors={errors} 
    userFrom
  />
</div>
<div className="mt-4 flex justify-end w-full">
  <button disabled={Loading} className="text-white bg-blue-600 border border-gray-200 dark:border-gray-600 shadow-md hover:border-rose-600  hover:dark:border-green-400 shadow-blue-200 dark:shadow-blue-800 rounded-[5px] hover:dark:bg-gray-800 transition duration-300 px-2 py-1 text-center " onClick={handleSubmit(onSubmit)}>{Loading? "Loading...":"Login"}</button>
</div>
<p className="text-sm text-gray-500 dark:text-gray-400">Don&lsquo;t have an account? Join our community by <Link href="/register">signup</Link>!</p>

<div className="flex mt-10 w-full relative px-2 py-4 line-clamp-5">
  <hr  className=" absolute left-0 w-5/12 border-[1.5px] border-gray-200 dark:border-gray-500"/>
  <p className=" absolute left-[43%] -top-[1px] text-xl text-gray-500 dark:text-gray-400 font-mono font-light tracking-wide ">OR</p>
  <hr className="absolute right-0  w-6/12 border-[1.5px] border-gray-200 dark:border-gray-500"/>
</div>
<div className="w-full flex justify-center">
<button className="flex gap-2 hover:bg-opacity-80  bg-white text-black w-8/12 mx-2 px-2 py-1 border rounded-full border-gray-400 dark:border-gray-700 transition" onClick={signInWithGoogle}><FcGoogle size={24}/> <p className="text-base">Signin With Google</p></button>
</div>
</div> 

  );
}
 

export default Login;

