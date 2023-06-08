import React, {useState} from 'react';
import {Input} from "./Input";
import {ButtonOne} from "./Button";

// ЕСЛИ Инпут и кнопка(КАК ОТДЕЛЬНЫЕ КОМПОНЕНТЫ, а не теги) на одном уровне вложенности, то введеная строка
// должна быть в стейте их родителя

export const IndexInputSeparateButton = () => {
// глобальный стейт
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
// лоакальный стейт для Инпута
    let [title, setTitle] = useState("")

    // добавляем получ сообщение в стейт
    const addMessage = (str: string) => {
        let newMessage=[{message: str},...message]
        setMessage(newMessage)
    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <Input setTitle={setTitle} title={title}/>
            <ButtonOne name={"+"} callback={callbackButtonHandler}/>

            {message.map(((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            }))}
        </div>
    )
        ;
};

