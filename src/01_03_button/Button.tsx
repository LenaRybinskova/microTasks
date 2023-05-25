import React from 'react';

export const Button = () => {

    // const myFirstSubs = () => {
    //     console.log("Вася")
    // }
    //
    // const mySecondSubs = () => {
    //     console.log("Саня")
    // }
    // const onClickHandle=(name: string)=>{
    //     console.log(name)
    // }

    const foo1 =()=> {
        console.log("100200")
    }

    const foo2 =(str: string)=> {
        console.log(str)
    }

// !!если надо передать что то наверх(в функ до ретерна), надо скобки и слева и справа делать ()=>onClickHandle("Lena")
    return (
        <>
            {/*<button onClick={() => console.log("нажали")}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={()=>onClickHandle("Lena")}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={mySecondSubs}>MyYouTubeChannel-2</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2("100200")}>2</button>
        </>
    )
        ;
};

