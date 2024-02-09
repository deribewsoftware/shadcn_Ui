
import { courses } from "@/lib/courses";
import { usersData } from "@/lib/users";

const MyCourseClient = () => {
const id="1"
    const user=usersData.filter((user) => user.id===id);
    const enrolledCourses = user
    ? courses.filter((course) => course.users.some((u) => u.id === id))
    : [];
  return ( 

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Course name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Percent
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Completion
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Biology Grade 12 Course
                    </th>
                    <td className="px-6 py-4">
                        78%
                    </td>
                    <td className="px-6 py-4">
                        Approved
                    </td>
                    <td className="px-6 py-4">
                        Incomplete
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>

{enrolledCourses.map((course)=>{
    return <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       {course.subject}
    </th>
    <td className="px-6 py-4">
        {course.percent}%
    </td>
    <td className="px-6 py-4">
        Approved
    </td>
    <td className="px-6 py-4">
        Incomplete
    </td>
    <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
    </td>
</tr>

})}
                
            </tbody>
        </table>
    </div>
     );
}
 
export default MyCourseClient;