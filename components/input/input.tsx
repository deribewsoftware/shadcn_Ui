import { text } from "stream/consumers";
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'

interface InputProps{
  type:string;
  label:string;
  disabled?:boolean;
  required?:boolean;
  placehoder?:string;
  register:UseFormRegister<FieldValues>;
  errors:FieldErrors;
  id:string;
  userFrom?:boolean;

}

const Input:React.FC<InputProps> = ({userFrom,type,label,disabled,required,id,register,placehoder,errors}) => {
  return (  <div>
    <label htmlFor="first_name" className={`
    block mb-2 text-sm font-medium text-gray-900 dark:text-white 
    
    `}>{label}</label>
    <input type={type} 
    disabled={disabled}
    autoComplete="off"
     id={id}
     {...register(id,{required})}
     required={required}
     placeholder={placehoder}
     
    className={`border 
    border-gray-300 
    text-gray-900 
    text-sm 
    
     focus:ring-blue-500 
     focus:border-blue-500
      block 
      w-full 
      p-2.5 
      bg-gray-900/10
      dark:bg-white/10
      dark:border-gray-600 
      dark:placeholder-gray-400
       dark:text-white 
       dark:focus:ring-blue-500 
       dark:focus:border-blue-500 
    ${errors[id]? 'border-rose-400':'border-gray-300'}
    ${userFrom? 'rounded-bl-2xl rounded-tr-2xl ':'rounded-[5px]'}
    `} 
  
    />
</div> );
}
 
export default Input;