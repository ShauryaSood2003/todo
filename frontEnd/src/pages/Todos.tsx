import  { useEffect, useState } from "react";
import InputData from "./InputBox";
import Todo from "../components/Todo";
import axios from "axios";
import { TodoInterface } from "../Interfaces";


function Todos() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [rerender,setRender]=useState<boolean>(false);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await axios({
          url:"http://localhost:3000/user/getTodos",
          method:"GET",
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })
        if (res.data.todos) {
          setTodos(res.data.todos);
        }
      } catch (error) {
        console.error("Failed to load todos:", error);
      }
    }
    fetchTodos();
  }, [rerender]);

  return (
    <>
      <InputData setRender={setRender}/>
      <hr className="my-1" />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
        {todos.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          todos.map((todo: TodoInterface) => (
            <Todo key={todo.id} todo={todo} setRender={setRender}/>
          ))
        )}
      </div>
    </>
  );
}

export default Todos;
