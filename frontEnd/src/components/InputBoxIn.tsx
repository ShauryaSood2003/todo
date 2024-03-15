import { useState } from "react";
interface InputBoxInProps {
    lable:string,
    placeholder:string,
    setUser:(user:string)=>void
}
const InputBoxIn=({lable,placeholder,setUser}:InputBoxInProps)=>{
    const [value,setValue]=useState("");
    function handelClick(){
        setUser(value);
    }
    return(
        <div className="my-3 flex flex-col">
            <label  className="font-bold text-slate-800 mb-2">{lable}</label>
            <input onBlur={handelClick} onChange={(e)=>{setValue(e.target.value)}}  className="px-3 py-3 border-gray-400 border rounded-md w-[100%]" placeholder={placeholder}></input>
        </div>
    );
}
export default InputBoxIn;