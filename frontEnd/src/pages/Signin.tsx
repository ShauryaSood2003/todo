import axios from "axios";
import ButtonAdder from "../components/ButtonAdder";
import ChoiceUser from "../components/ChoiceUser";
import Heading from "../components/Heading";
import InputBox from "../components/InputBoxIn";
import SubHeading from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin=()=>{
    const [username,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return(
        <div className="bg-gray-500 h-screen w-screen flex justify-center items-center">
            <div className="bg-white p-10 rounded-md shadow-md text-center">
                <Heading text="Sign In"></Heading>
                <SubHeading text="Enter your credentials to access your account"></SubHeading>
                <div className="text-left mx-4">
                    <InputBox setUser={setEmail} placeholder="abc@gmail.com" lable="Email"></InputBox>
                    <InputBox setUser={setPassword} placeholder="" lable="Password"></InputBox>
                </div>
                <ButtonAdder onClick={async()=>{
                   
                    const res=await axios({
                        url:"http://localhost:3000/user/signin",
                        method:"POST",
                        data:{
                            username,
                            password
                        }
                    })
                    localStorage.setItem("token","Bearer "+res.data.token);
                    navigate("/todos")
                }} text="Sign In"></ButtonAdder>
                <ChoiceUser text="Don't have an account? " link="/signup" lable="Sign Up"></ChoiceUser>
            </div>
        </div>
    );
}
export default Signin;