import axios from "axios";
import React, { useState } from "react";


interface InputDataProps {
    setRender: React.Dispatch<React.SetStateAction<boolean>>;
}
  
const InputData: React.FC<InputDataProps> = ({ setRender }) => {
    const [todo,setTodo]=useState({title:"",description:""});
    async function handeClick(){
        console.log(todo);
        try{
            
            setTimeout(() => {
                setTodo({ title: "", description: "" });
            }, 1000);
            setRender(c => !c);
            const responsese=await axios({
                url: "http://localhost:3000/user/addtodo",
                method: "POST",
                data: todo,
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            console.log(responsese.data);
            
            setRender(c => !c);
            console.log("Data added successfully!");
        }catch(e){
            console.log("ERROR:"+e);
        }
    }
    return(
       
        <div className="flex flex-col w-[100%] justify-center items-center my-8">
            <input value={todo.title} onChange={(e)=>{setTodo({...todo,title:e.target.value})}} className="px-5 py-3 w-[35%] my-2 rounded-md border border-gray-500" placeholder="Title"></input>
            <input value={todo.description} onChange={(e)=>{setTodo({...todo,description:e.target.value})}} className="px-5 py-3 w-[35%] my-2 rounded-md border border-gray-500" placeholder="Description"></input>
            <button onClick={handeClick} className=" bg-yellow-500 text-lg font-semibold rounded-md p-1 w-[15%] ">Add</button>
        </div>
    )
}
export default InputData;