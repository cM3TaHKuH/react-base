
import Counter from "./copmponents/Counter/Counter";
import Input from "./copmponents/Input/Input";
import Output from "./copmponents/Output/Output";

const Main = (props)=>{
    return(
    <>
    {/* <h2>{props.username}</h2> */}
        <Counter/>
        <Input/>
        <Output/>
    </>)
}

export default Main