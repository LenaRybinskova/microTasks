import React from 'react';

type ButtonOneType={
    name: string
    callback: ()=>void
}

export const ButtonOne = (props: ButtonOneType) => {

    const onClickButtonHandler =()=>{
        props.callback()

    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
