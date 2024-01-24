interface HeadingProps{
  title: string;
  border?: boolean

}

const Heading:React.FC<HeadingProps> = ({title,border}) => {
  return ( <h1 className="text-2xl md:3xl font-semibold">{title}</h1> );
}
 
export default Heading;