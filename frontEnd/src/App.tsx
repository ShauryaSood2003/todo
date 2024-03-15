import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;