import { Link } from "react-router-dom";
interface ChoiceUserProps {
    lable:string,
    text:string,
    link:string
}
const ChoiceUser=({lable,text,link}:ChoiceUserProps)=>{
    return(
    <div className="flex justify-center font-semibold">
        <p>{text}</p>
        <Link className="underline ml-1" to={link}>{lable}</Link>
    </div>
    );
}
export default ChoiceUser;