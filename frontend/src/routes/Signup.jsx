import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import{Button}  from "../components/Button";
import {BottomWarning} from "../components/BottomWarning"

 function Signup(){

  return(
    <div className="bg-slate-100 h-screen flex justify-center">
    <div className="flex flex-col  justify-center">
    <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
      <Heading label={"Signup"}/>
      <SubHeading label={"Enter the required details to create and account"}/>
      <InputBox  label={"Frist Name"} placeholder={"Enter the name"}/>
      <InputBox label={"Last Name"} placeholder={"Enter the name"}/>
      <InputBox label={"Email"} placeholder={"Enter yout email"}/>
      <InputBox label={"Password"} placeholder={"Enter the password"}/>
      <div className="pt-4">
      <Button label={"SignUp"}/>
      </div>
      <BottomWarning label={"Already have an account"} buttonText={"SignIn"} to={"/signin"}/>
    
      
   </div>
    </div>
    </div>
  )
}

export default Signup;
