import { Router } from "express";
import authUser from "../middleware/authUser";
import { StatusCodes } from "../data/enums";
import { getUser, insertUser, getUserSignUp, getTodos, createTodo, updateTodoDone, removeTodo } from "../prismaFun/prismaFunctions";
import { JWTPASSWORD } from "../data/password";
const jwt=require("jsonwebtoken");

interface User {
    username:string;
    password:string;
    firstName:string;
    lastName:string;
}

const router=Router();
router.post("/signup",async(req,res)=>{
    try{
        const body:User=req.body;
        const user=await getUserSignUp(body.username);
        if(user){
            return res.status(StatusCodes.Forbidden).json({message:'user already exists!'})
        }
        const response=await insertUser(body.username,body.password,body.firstName,body.lastName);
        const token=jwt.sign({id:response.id,username:response.username},JWTPASSWORD);
        return res.status(StatusCodes.Successfull).json({token});
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:"Error occured"})
    }
})

router.post("/signin",async(req,res)=>{
    try{
        const body=req.body;
        const user=await getUser(body.username,body.password);
        if(!user){
            return res.status(StatusCodes.Forbidden).json({message:'No user found'})
        }
        const token=jwt.sign({id:user.id,username:user.username},JWTPASSWORD);
        return res.status(StatusCodes.Successfull).json({token});
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:"Error occured"})
    }
})
router.get("/getTodos",authUser,async(req,res)=>{
    try{
        const id:number=req.body.token;
        console.log("Inside GetTodo"+id);
        
        const todos=await getTodos(id);
        if(todos?.length){
            return res.status(StatusCodes.Successfull).json({todos});
        }
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:"Error occured"})
    }
});
router.post("/addtodo",authUser,async(req,res)=>{
    try{
        const id:number=req.body.token;
        const body=req.body;
        console.log(id);
        const done=await createTodo(id,body.title,body.description);
        return res.status(StatusCodes.ServerError).json({done})
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:"Error occured"})
    }
})
router.put("/done",async(req,res)=>{
    try{
        await updateTodoDone(req.body.id,req.body.done);
        console.log("updated succfully");
        return res.status(StatusCodes.Successfull).json({message:true});
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:false});
    }
});
router.delete("/removeTodo",authUser,async(req,res)=>{
    try{
        await removeTodo(req.body.id);;
        return res.status(StatusCodes.Successfull).json({message:"Removed the Todo"});
    }catch(e){
        return res.status(StatusCodes.ServerError).json({message:"Failed to remove the Todo"});
    }
    
})
export default router;