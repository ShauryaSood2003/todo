import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/dashboard");
        },4000);
    },[]);
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className=" text-green-600 text-3xl m-5">Transaction Successfull</h1>
            <p className="text-md text-slate-700"><b>Money</b> Transaftion to the User account</p>
        </div>
    )
}
export default Success;