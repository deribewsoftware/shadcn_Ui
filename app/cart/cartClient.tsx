import Link from "next/link";

const CartClient = () => {
  return ( 


<div className="  px-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full lg:min-w-[800px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Course name
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Biology
                </th>
               
                <td className="px-6 py-4">
                   Chemistry
                </td>
                <td className="px-6 py-4">
                    100Etb
                </td>
                <td className="px-6 py-4 text-right">
                <button className="font-medium text-rose-600 dark:text-rose-500  hover:text-rose-400">Remove</button>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Highschool
                </th>
               
                <td className="px-6 py-4">
                    Freshman
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 text-right">
                <button className="font-medium text-rose-600 dark:text-rose-500  hover:text-rose-400">Remove</button>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
              
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                <button className="font-medium text-rose-600 dark:text-rose-500  hover:text-rose-400">Remove</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">21,000</td>
                <td><Link className="
                text-lg
                no-underline
                px-2 py-1 border 
                dark:border-gray-800 
                rounded-[5px]
                hover:dark:border-rose-400
                hover:text-rose-400 
                hover:dark:text-green
                border-gray-200
                hover:dark:border-green-400"
                  href="/payment">Buy</Link></td>
            </tr>
        </tfoot>
    </table>
</div>

   );
}
 
export default CartClient;