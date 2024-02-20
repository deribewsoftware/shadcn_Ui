
import { getCurrentUser } from "@/actions/currentUser";
import NavbarClient from "./NavbarClient";

const Navbar =async () => {
  const currentUser = await getCurrentUser();
  console.log("currentUser:-", currentUser);
  return (<NavbarClient/> );
}
 
export default Navbar;