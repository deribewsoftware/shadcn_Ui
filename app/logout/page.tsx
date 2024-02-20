'use client'
import toast from 'react-hot-toast';
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';
const Logout = () => {
  const router=useRouter();
  return ( <div className="h-screen w-full flex justify-center items-center">
    <div className="py-4 px-2 border bg-white border-gray-200 rounded-[10px] space-y-4 dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="font-[16px] text-rose-400 ">Are Sure To Logout?</h5>
      <button onClick={()=>{signOut(),router.push("/"),toast.success("Your account is Logout Successfully")}} className="border text-sm font-medium bg-gray-100 hover:text-rose-400 hover:dark:border-rose-400 hover:border-rose-400 dark:bg-gray-700 transition duration-300 px-2 py-2 rounded-[5px]">Logout</button>
    </div>
  </div> );
}
 
export default Logout;