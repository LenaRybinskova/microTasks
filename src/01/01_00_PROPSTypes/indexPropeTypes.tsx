import React from 'react';
// import {MyComponentHello, MyComponentBye} from "./MyComponentHello";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const data = {
    message: "Lena",
    message1: "Sasha"
}
// type RouteType={
//     path:string,
//     render:()=> Element
// }

const IndexPropeTypes = () => {
    return (
        <>
            <BrowserRouter>


                {/*<Route path={"/hello"} {()=><MyComponentHello message={"Hello"}/>}/>*/}
                {/*<Route path={"/hello"} render={()=><MyComponentBye message={"Buy"}/>}/>*/}

                {/*<MyComponentHello message={data.message}/>*/}
                {/*<MyComponentBye message={data.message1}/>*/}
            </BrowserRouter>
        </>
    )
};


type MyComponentType = {
    message: string
}
// либо типизир пропсы
export const MyComponentHello = (props: MyComponentType) => {
    return (
        <h1>{props.message}</h1>
    );
};

// либо типизир саму функц компоненту
export const MyComponentBye: React.FC<MyComponentType> = (props) => {
    return (
        <h1>{props.message}</h1>
    );
};

// yarn add react-router-dom , потом добавили ипорт import {BrowserRouter} from "react-router-dom"
// yarn add @types/react-router-dom  это добавили типизацию для библиотеки react-router-dom

export default IndexPropeTypes;