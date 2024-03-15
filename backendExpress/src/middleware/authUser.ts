const jwt=require("jsonwebtoken");
import { JWTPASSWORD } from "../data/password";
import { StatusCodes } from "../data/enums";


interface Token {
    id:string;
    username:string
}

function authUser(req:any,res:any,next:any){
    try{
        const code: string = req.headers['authorization'];
        const words:string[]=code.split(" ");
        const token:string=words[1];
        const response:Token=jwt.verify(token,JWTPASSWORD);
        if(response.username){
            req.body.token=response.id;
            return next();
        }
        return res.status(StatusCodes.Unauthorize).json({message:"Not Authorized"})
    }catch(e){
        return res.status(StatusCodes.Forbidden).json({message:"Error while Prosessing!"})
    }
}
export default authUser;