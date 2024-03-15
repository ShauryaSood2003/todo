interface HeadingProps {
    text:string
}
const Heading=({text}:HeadingProps)=>{
    return(
        <h1 className=" font-bold text-3xl">{text}</h1>
    )
}
export default Heading;