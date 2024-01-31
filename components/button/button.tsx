interface ButtonProps{
  outline?:boolean;
  small?:boolean;
  title:string;
  onClick:() => void;
  className?:string;
}

const Button:React.FC<ButtonProps> = ({outline,small,title,onClick,className}) => {
  return ( <button
  className={`rounded-[5px] px-2 py-1 ${outline? "border border-[1.5px]":"bg-teal"} ${className}`}
  onClick={onClick}>{title}</button> );
}
 
export default Button;