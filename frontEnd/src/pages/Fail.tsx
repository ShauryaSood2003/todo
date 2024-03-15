import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Fail=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/dashboard");
        },4000);
    },[]);
    return(

        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-red-700 text-3xl m-5">Fail to Process Transaction</h1>
            <p className="text-md text-slate-700">If debited <b>Money</b> will be refunded within 6 working days</p>
        </div>
    )
}
export default Fail;