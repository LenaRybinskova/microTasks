import React from "react";

type NewComponentType = {
    currentMoney: MoneyTypes[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

type MoneyTypes = {
    banknote: string
    nominal: number
    number: string
}

type FilterType = "all" | "dollar" | "ruble"

export const NewComponent = (props: NewComponentType) => {
    debugger
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
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </div>
    )
}