import React, { ReactNode } from "react";

interface ContainerProps{
  childern: ReactNode;
}

const Container:React.FC<ContainerProps> = ({childern}) => {
  return ( <div className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-600 border-[1.5px] rounded-[5px]">
    {childern}
  </div> );
}
 
export default Container;