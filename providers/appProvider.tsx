import { ReactNode } from "react";
import { ToggleProvider } from "./toggleProvider";
import { ThemeProvider } from "./themeProvider";
import CartProvider from "./cartProvider";

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
   <CartProvider>
   {children}
   </CartProvider>
  </ToggleProvider> </ThemeProvider>);
}
 
export default AppProvider;