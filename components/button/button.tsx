interface ButtonProps{
  outline?:boolean;
  small?:boolean;
  title:string;
  onClick:() => void;
}

const Button:React.FC<ButtonProps> = ({outline,small,title,onClick}) => {
  return ( <button
  className={`rounded-[5px] px-2 py-1 ${outline? "border border-[1.5px]":"bg-teal"}`}
  onClick={onClick}>{title}</button> );
}
 
export default Button;