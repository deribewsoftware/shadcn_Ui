interface HeadingProps{
  title: string;
  border?: boolean;
  small?: boolean;

}

const Heading:React.FC<HeadingProps> = ({title,border,small}) => {
  return ( <h1 className={`${small? "text-lg font-medium":"text-2xl md:3xl font-semibold"}`}>{title}</h1> );
}
 
export default Heading;