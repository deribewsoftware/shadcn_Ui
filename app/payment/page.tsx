import Bank from "./bank";
import PaymentForm from "./paymentForm";

const Payment = () => {
  return ( <div className="flex gap-20 justify-center w-full">

    <div className="">
      <Bank/>
    </div>


    <div className="">
      <PaymentForm/>
    </div>
  </div> );
}
 
export default Payment;