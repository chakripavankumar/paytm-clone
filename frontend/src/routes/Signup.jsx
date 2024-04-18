import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import{Button}  from "../components/Button";
import {BottomWarning} from "../components/BottomWarning"
import { useState } from "react";
import axios from "axios";

 function Signup(){
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return(
    <div className="bg-slate-100 h-screen flex justify-center">
    <div className="flex flex-col  justify-center">
    <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
      <Heading label={"Signup"}/>
      <SubHeading label={"Enter the required details to create and account"}/>
      
      <InputBox onChange={e =>{
        setFirstName(e.target.value)}}  
         label={"Frist Name"} placeholder={"Enter the name"}/>
      <InputBox   onChange={e =>{
        setLastName(e.target.value)
      }}
        label={"Last Name"} placeholder={"Enter the name"}/>
        <InputBox onChange={e =>{
          setUsername(e.target.value)
        }} label={"Username"} placeholder={"Enter yout email"}/>
      <InputBox  onChange={e =>{
      setPassword(e.target.value)}}  
      label={"Password"} placeholder={"Enter the password"}/>
      <div className="pt-4">
      <Button onClick={async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
          username,
          firstName,
          lastName,
          password
        });
        localStorage.setItem("token", response.data.token)
        
      }} label={"Sign up"} />
      </div>
      <BottomWarning label={"Already have an account"} buttonText={"SignIn"} to={"/signin"}/>
    
      
   </div>
    </div>
    </div>
  )
}

export default Signup;
