import Image from "next/image";
import CBE from "../../public/CBE.jpg"


interface BankProps{
  bank_name: string;
  name: string;
  account_no: string;
  image:any;

}

const Bank:React.FC<BankProps>  = ({bank_name,name,account_no,image}) => {
  return ( <div className="border-y-2 bg-white dark:bg-gray-800 rounded-[10px] p-1 border-gray-200 dark:border-gray-700">
    <h5 className="text-sm text-gray-500 dark:text-gray-400">{bank_name}</h5>
    <div className="flex gap-2">
      <div className=" overflow-hidden ">
      
        <Image  width={60} height={60} src={image} alt="cbe" className="object-contain "/>
      </div>

      <div className="flex flex-col text-gray-500 dark:text-gray-400">
        <p>{name}</p>
        <p>{account_no}</p>
      </div>

    </div>

  </div> );
}
 
export default Bank ;