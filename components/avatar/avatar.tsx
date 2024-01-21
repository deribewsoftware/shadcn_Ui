interface AvatarProbs{
  image: any;
  name: string;
}
const Avatar:React.FC<AvatarProbs> = ({image,name}) => {
  return ( <div className=" w-14 h-14 rounded-full items-center">
    <img src={image} alt={name}  className="w-full h-full object-contain rounded-full"/>

  </div> );
}
 
export default Avatar;