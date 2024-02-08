
import CartClient from "./cartClient";
import Navbar from "@/components/navbar/Navbar";

const Cart = () => {
  return ( <>
    <Navbar/>
    <div className="w-full md:flex justify-center items-center h-screen overflow-y-auto">
   
   <div className="flex flex-col  ">
     <CartClient/>
   
   </div>
 </div>
  </> );
}
 
export default Cart;