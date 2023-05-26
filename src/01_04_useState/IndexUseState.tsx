import {useState} from "react";

export const IndexUseState = () => {
    // let a = 1
    // a-это состояние, setA - функция, в которой наход состояние
const [a,setA]=useState(1)

    const onClickHandler =()=>{
    setA(a+1);
    }

    const onClickHandlerReset=()=>{
        setA(0)
    }



    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </div>
    )
}
