import UserRouter from "./routes/UserRoute"
import express from "express";
import cors from "cors"

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("Server Running on port 3000");
    
})