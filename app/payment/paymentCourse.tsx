import Image from "next/image";
import Biology from "../../public/biology.png"

const PaymentCourse = () => {
  return ( <div className=" max-w-lg flex flex-col gap-2 border-y-2  rounded-[10px] border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">

   
<div className="flex flex-col p-2">
  <div className=" flex justify-between">
  <h5 className="text-xl text-gray-500 dark:text-gray-400">Biology Courses</h5>
  <p className="text-xl font-bold text-rose-600 dark:text-green-400">100 ETB</p>
  </div>
  <div className="p-2">

<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">To Buy This Course:</h2>
<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
<li>
        Make payment to any account listed above.
    </li>
    <li>
        After making the payment, please fill out the following forms, and the admins will approved you.
    </li>
    <li>
        For any confusion or problems, please call +251930793119.
    </li>
</ul>



  </div>
  

</div>
  

  </div> );
}
 
export default PaymentCourse;