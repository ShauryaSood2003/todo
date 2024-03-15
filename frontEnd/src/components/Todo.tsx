import axios from "axios"
import { TodoInterface } from "../Interfaces";

function Todo({ todo, setRender }: { todo: TodoInterface; setRender: React.Dispatch<React.SetStateAction<boolean>> }) {

    async function handelClick(isDone:boolean){
        try{
            const res=await axios({
                url:"http://localhost:3000/user/done",
                method:"PUT",
                headers:{
                    Authorization:localStorage.getItem("token")
                },
                data:{
                    id:todo.id,
                    done:isDone
                }
            })
            if(res.data.message){
                console.log("Done updated");
                setRender(c=>!c);
            }
        }catch(e){
            console.log("Not updated error occured!");
            
        }
    }
    async function handleClick(){
        try{
            
            await axios({
                url:"http://localhost:3000/user/removeTodo",
                method:"DELETE",
                data:{
                    id:todo.id
                },
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            setRender(c=>!c);
        }catch(e){
            console.log("error while removing todo");
            
        }
    }
    return(
        <div className=" rounded-md p-5 bg-slate-600 m-4 relative">
            <button onClick={handleClick} className="absolute right-5 bottom-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
            </button>
            <h1 className="font-bold text-2xl text-center">{todo.title}</h1>
            <p className="font-semibold text-lg px-2 py-8">{todo.description}</p>
           {
            todo.done?
            <button onClick={()=>handelClick(false)} className="font-semibold bg-green-500 text-lg p-2 rounded-md">Done</button>
            :
            <button onClick={()=>handelClick(true)} className="font-semibold bg-red-500 text-lg p-2 rounded-md">Not Done</button>
           }
        </div>
    )
}
export default Todo;