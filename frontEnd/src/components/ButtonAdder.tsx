import { useState } from "react";
interface ButtonAdderProps {
    text:string,
    onClick:()=>void
}
const ButtonAdder=({text,onClick}:ButtonAdderProps)=>{
    const [clicked,setClicked]=useState(false);
    function handelClick(){
        setClicked(true);
        onClick()
        setTimeout(()=>{
            setClicked(false);
        },700);

    }
    return(
        <button
        className={`text-white font-semibold text-center text-md rounded-md p-3 w-[90%] my-3 ${clicked?'bg-slate-700 text-slate-300':'bg-slate-900'}`}
        onClick={handelClick}
        >
        {text}
        </button>  
    );
}
export default ButtonAdder;