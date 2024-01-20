import React, { ReactNode } from "react";

interface ContainerProps{
  childern: ReactNode;
}

const Container:React.FC<ContainerProps> = ({childern}) => {
  return ( <div className="bg-white border-slate-300 border-[1.5px] rounded-[5px]">
    {childern}
  </div> );
}
 
export default Container;