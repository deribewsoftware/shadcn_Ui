import { ReactNode } from "react";
import { ToggleProvider } from "./toggleProvider";
import { ThemeProvider } from "./themeProvider";

interface AppProviderProps{
  children:ReactNode;
}
const AppProvider:React.FC<AppProviderProps> = ({children}) => {
  return (  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  ><ToggleProvider>
    {children}
  </ToggleProvider> </ThemeProvider>);
}
 
export default AppProvider;