import { BsBarChart } from "react-icons/bs";
import { SiLibreoffice } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { useCart } from "@/hooks/use.cart";
import { useRouter } from "next/navigation";
import { courses } from "@/lib/courses";
import { IconType } from "react-icons";
import { CourseType } from "@/components/search/types/course.type";

interface ContentListProps{
  icon:IconType;
  title:string;
  } 
  

  interface CourseDescriptionListprops{
    course:CourseType[];
  }

const ContentList:React.FC<ContentListProps>=({icon:Icon,title})=>{
  
  return(
    <div className="flex gap-4 px-2   text-base text-gray-500 dark:text-gray-400  border-y border-gray-200 dark:border-gray-700 mx-2 py-2">
      <Icon size={24}/>
      <p>{title}</p>
    </div>
  )
}
const CourseDescribeList:React.FC<CourseDescriptionListprops> = ({course}) => {

  const router=useRouter()
const {addToCart}=useCart();



const onAddToCart=()=>{
  addToCart(course[0])
  router.push('/cart')
}

const onPayment=()=>{
  addToCart(course[0])
  router.push('/payment')
}
  return ( <div className="
  shadow-lg
  rounded-[5px]
  flex
   flex-col overflow-y-auto 
  overflow-x-hidden  
    bg-white dark:bg-gray-800">
    <div className="p-2 flex justify-end gap-6">
      <button 
      onClick={onAddToCart}
      className="
      text-xl
      
      dark:bg-gray-700 
      border
       bg-gray-100 
      border-gray-200 
      hover:border-blue-600 
      hover:text-blue-600 
      dark:border-gray-600
       px-3 py-2 rounded-[5px] 
      hover:dark:border-green-400 
      hover:dark:text-green-400 transition
       duration-300"
       >Add to cart</button>
      <button

      onClick={onPayment}
       className="
       text-xl
      
       dark:bg-gray-700 
       border
        bg-gray-100 
       border-gray-200 
       hover:border-blue-600 
       hover:text-blue-600 
       dark:border-gray-600
        px-3 py-2 rounded-[5px] 
       hover:dark:border-green-400 
       hover:dark:text-green-400 transition
        duration-300"
      >Buy</button>
    </div>
  <h5 className="px-2 text-lg text-gray-500 dark:text-gray-400">Course Content</h5>
 <div className="flex flex-col  ">

  <ContentList
  title="Level:Beginner"
  icon={BsBarChart}
  />

<ContentList
  title="Resourses:2"
  icon={SiLibreoffice}
  />

<ContentList
  title="Lessons:20"
  icon={BsBarChart}
  />

<ContentList
  title="Questions and Exams:3000"
  icon={GoQuestion}
  />
<ContentList
  title="Accessed by Laptop,desktop,Mobile,Tablet and etc..."
  icon={IoIosPhonePortrait}
  />
<ContentList
  title="Communicate and Asking Questions and get Answers from Your Friends"
  icon={IoPeopleOutline}
  />
 </div> 
  
 
 
  </div> );
}
 
export default CourseDescribeList;