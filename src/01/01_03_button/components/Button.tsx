import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    // const oncklickHandler = () => {
    //     console.log("ok")
    // }

    return (
        <button onClick={props.callBack}>{props.name}</button>
    )
}