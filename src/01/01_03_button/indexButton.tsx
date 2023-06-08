import {Button} from "./components/Button";
import React from "react";

export const IndexButton = () => {

    const Button1Foo = (str: string, age: number) => {
        console.log(str, age)
    }

    const Button2Foo = (str: string) => {
        console.log(str)
    }

    const Button3Foo = () => {
        console.log("stuped button")
    }
    return (
        <>
            <Button name={"MyYoutubeChannel-1"} callBack={() => Button1Foo("Vasya", 21)}/>
            <Button name={"MyYoutubeChannel-2"} callBack={() => Button2Foo("Ivan")}/>
            <Button name={"stuped button"} callBack={Button3Foo}/>
        </>)
}