import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import{Button}  from "../components/Button";
import {BottomWarning} from "../components/BottomWarning"

 function Signin(){
  return(
    <div className="bg-slate-100 h-screen flex justify-center">
    <div className="flex flex-col  justify-center">
    <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
      <Heading label={"SignIn"}/>
      <SubHeading label={"Enter your credentials to access your account"}/>
      <InputBox label={"Email"} placeholder={"Enter yout email"}/>
      <InputBox label={"Password"} placeholder={"Enter the password"}/>
      <div className="pt-4">
      <Button label={"SignIn"}/>
      </div>
      <BottomWarning label={"Don't have an account"} buttonText={"SignUp"} to={"/signup"}/>
   </div>
    </div>
    </div>
  )
}

export default Signin;
