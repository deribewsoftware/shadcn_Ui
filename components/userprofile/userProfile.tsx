import Image from "next/image";
import Container from "../container/container";

const UserProfile = () => {
  return ( 
    <div className="w-72 p-2 border-[1.5px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 relative rounded-[5px]">
    
      <Image
      height={100}
      width={100}
      className="absolute left-[32%] -top-16 rounded-full border-[1.5px] border-white dark:border-gray-900"
       src="https://avatars.githubusercontent.com/u/739984?v=4"
       alt="user profile"
      />
   
    <div className="flex  flex-col  items-center mt-10">
      <h4 className="text-lg">Deribew Shimelis</h4>
      <div className="">
      <div className="flex text-md justify-around border-b  text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700">
        <p>Total Courses Enrolled</p>
        <p>4</p>
       </div>
       <div className="flex justify-around border-b  text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700">
        <p>Aproved Courses</p>
        <p>4</p>
       </div>
       <div className="flex justify-around border-b  text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700">
        <p>Completed Courses</p>
        <p>4</p>
       </div>
       <div className="flex justify-around border-b  text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700">
        <p>Pending Courses</p>
        <p>2</p>
       </div>
       
      </div>
    </div>

  </div>
  );
}
 
export default UserProfile;