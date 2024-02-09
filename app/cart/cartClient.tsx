"use client"
import { useCart } from "@/hooks/use.cart";
import Link from "next/link";

const CartClient = () => {
    const {carts,removeFromCart,totalPrice}=useCart()
    if(!carts){
       return <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col gap-2">
            <h5 className="text-lg ">There are no carts you Added</h5>
        <p className="text-md text-gray-500  dark:text-gray-400">please back to <Link href="/#courseslist">Courses</Link> and then added the course you want to buy!</p>
            </div>
        </div>
    }
    else{
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
                    <span className="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {carts&&carts.map((cart:any,index)=>{
                return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {cart.subject}
                </th>
               
                <td className="px-6 py-4">
                  {cart.category}
                </td>
                <td className="px-6 py-4">
                    {cart.price}
                </td>
                <td className="px-6 py-4 text-right">
                <button onClick={()=>removeFromCart(cart.id)} className="font-medium text-rose-600 dark:text-rose-500  hover:text-rose-400">Remove</button>
                </td>
            </tr>
            })}
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">{carts?.length} courses</td>
                <td className="px-6 py-3">{totalPrice}</td>
                <td>
                <Link href="/payment" className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">Buy now</Link></td>
            </tr>
        </tfoot>
    </table>
</div>

   );}
}
 
export default CartClient;