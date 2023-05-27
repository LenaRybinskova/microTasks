import React from "react";

type NewComponentType = {
    currentMoney: MoneyTypes[]
    callback: (nameButton: FilterType) => void
}

type MoneyTypes = {
    banknote: string
    nominal: number
    number: string
}

type FilterType = "all" | "dollar" | "ruble"

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.callback("all")}>all</button>
                <button onClick={() => props.callback("ruble")}>ruble</button>
                <button onClick={() => props.callback("dollar")}>dollar</button>
            </div>
        </div>
    )
}