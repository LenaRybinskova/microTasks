import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type InputWithButton = {
    fooToAddMesssage: (str: string) => void
}
// послед-ть действий:
// ВИДИМ ИНПУТ ЗДАЧИТ ДЕЛО К useState
//1. когда вводим в инпут. должно куда то сохраняться
//2. useState должен подхватить в стейт введеное и по нажатию кнопки отправить в стейт IndexInput


export const InputWithButton = (props: InputWithButton) => {
        let [title, setTitle] = useState("")
        //1.
        // при вводе в инпут введеная строка сохр в title(местный стейт)
        const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value);
        }

// при клике на кн в главный стейт передатся строка и зануляется местный стейт
        const onClickButtonHandler = () => {
            props.fooToAddMesssage(title)
            setTitle(" ")
        }

        return (

            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

        );
    }
;
