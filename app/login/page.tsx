import { getCurrentUser } from "@/actions/currentUser";
import Login from "@/components/login/login";
import Navbar from "@/components/navbar/Navbar";

const LoginPage = async() => {
  const user=await getCurrentUser();
  return (<> <Navbar/> <div className="flex h-screen w-full justify-center items-center">
    <Login user={user}/> 
  </div></>);
}
 
export default LoginPage;