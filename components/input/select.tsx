import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectInputProps{
  
  disabled?:boolean;
  required?:boolean;
  placehoder?:string;
  register:UseFormRegister<FieldValues>;
  errors:FieldErrors;
  id:string;

}
const Select:React.FC<SelectInputProps> = ({register,errors,id,placehoder,required,disabled}) => {
  return ( <div>
  
<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
<select id={id} {...register(id,{required})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>category</option>
  <option value="Highschool">Highschool</option>
  <option value="Remedial">Remedial</option>
  <option value="Freshman">Freshman</option>
  <option value="Development">Development</option>
  
</select>
</div> );
}
 
export default Select;