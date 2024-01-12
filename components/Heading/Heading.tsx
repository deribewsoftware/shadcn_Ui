interface HeadingProps{
  title: string;
  border?: boolean

}

const Heading:React.FC<HeadingProps> = ({title,border}) => {
  return ( <h1 className="text-3xl md:5xl font-semibold">{title}</h1> );
}
 
export default Heading;