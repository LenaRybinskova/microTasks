import React, {useState} from 'react';
import {InputWithButton} from "./InputWithButton";

// универс импут, 2 подхода:
//1. инпут и кнопка вместе
//2. инпуст это отдельная компонента, а кнопка это отдельн компонента и они обе связаны.
// как делать скажет тимлид

export const IndexInput = () => {
        let [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"},
        ])
    //2. добавляем получ сообщение в стейт
        const addMessage = (str: string) => {
            let newMessage=[{message: str},...message]
            setMessage(newMessage)
        }


        return (
            <div>
                <InputWithButton fooToAddMesssage={addMessage}/>
                {message.map(((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                }))}
            </div>
        );
    }
;

