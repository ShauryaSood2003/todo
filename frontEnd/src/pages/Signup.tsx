
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonAdder from "../components/ButtonAdder";
import ChoiceUser from "../components/ChoiceUser";
import Heading from "../components/Heading";
import InputBoxIn from "../components/InputBoxIn";
import SubHeading from "../components/SubHeading";
import axios from "axios";


const Signup=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return(
        <div className="bg-gray-500 h-screen w-screen flex justify-center items-center">
            <div className="bg-white p-10 rounded-md shadow-md text-center">
                <Heading text="Sign Up"></Heading>
                <SubHeading text="Enter your information to create an account"></SubHeading>
                <div className="text-left mx-4">
                    <InputBoxIn setUser={setFirstName} placeholder="John" lable="First Name"></InputBoxIn>
                    <InputBoxIn setUser={setLastName} placeholder="Doe" lable="Last Name"></InputBoxIn>
                    <InputBoxIn setUser={setEmail} placeholder="abc@gmail.com" lable="Email"></InputBoxIn>
                    <InputBoxIn setUser={setPassword} placeholder="" lable="Password"></InputBoxIn>
                </div>
                <ButtonAdder onClick={async()=>{
                    const res=await axios({
                        url:"http://localhost:3000/user/signup",
                        method:"POST",
                        data:{
                            username,
                            firstName,
                            lastName,
                            password
                        }
                    })
                    localStorage.setItem("token","Bearer "+res.data.token);
                    navigate("/todos")
                }} text="Sign Up"></ButtonAdder>
                <ChoiceUser text="Already have an account? " link="/signin" lable="Login"></ChoiceUser>
            </div>
        </div>
    );
}
export default Signup;