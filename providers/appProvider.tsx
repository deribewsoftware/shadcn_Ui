import { ReactNode } from "react";
import { ToggleProvider } from "./toggleProvider";

interface AppProviderProps{
  children:ReactNode;
}
const AppProvider:React.FC<AppProviderProps> = ({children}) => {
  return ( <ToggleProvider>
    {children}
  </ToggleProvider> );
}
 
export default AppProvider;