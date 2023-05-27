import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

type FilterType="all" | "dollar" | "ruble"
const IndexFilter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money
    if (filter === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }
    if (filter === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
    }

// в стейт filter передаем dollar ruble или all, на какой был клик
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <NewComponent currentMoney={currentMoney} callback={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objFromMoneyArr.banknote}</span>*/}
            {/*                <span>{objFromMoneyArr.nominal}</span>*/}
            {/*                <span>{objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: "35px"}}>*/}
            {/*    <button onClick={() => onClickFilterHandler("all")}>all</button>*/}
            {/*    <button onClick={() => onClickFilterHandler("ruble")}>ruble</button>*/}
            {/*    <button onClick={() => onClickFilterHandler("dollar")}>dollar</button>*/}
            {/*</div>*/}

        </>
    )
}


export default IndexFilter;