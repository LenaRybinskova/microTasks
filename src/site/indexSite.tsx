import React from 'react';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export const IndexSite = () => {
    return (
        <>
            <Header title={"NEW BODY"}/>
            <Body titleForBody={"NEW BODY"}/>
            <Footer titleForFooter={"NEW FOOTER"} />
        </>
    );
};

