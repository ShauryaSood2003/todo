interface SubHeadingProps {
    text:string
}
const SubHeading=({text}:SubHeadingProps)=>{
    return(
        <p className="text-gray-500 text-lg py-5 mx-auto w-[85%] font-semibold">{text}</p>
    )
}
export default SubHeading;