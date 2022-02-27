
import { useState } from "react";
import Counter from "./copmponents/Counter/Counter";
import Input from "./copmponents/Input/Input";
import Output from "./copmponents/Output/Output";

const Main = (props)=>{
    const [input,setInput] = useState("Введи текст")
    return(
    <>
    {/* <h2>{props.username}</h2> */}
        <Counter/>
        <Input
            setValue = {setInput}
        />
        <Output
            value = {input}
        />
    </>)
}

export default Main