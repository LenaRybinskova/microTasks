import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./01/01_01_Type/Header";
import {Body} from "./01/01_01_Type/Body";
import {Footer} from "./01/01_01_Type/Footer";
import {IndexSite} from "./01/01_01_Type/indexSite";
import {NewComponent} from "./01/01_02_map/NewComponent";
import AppNewComponents from "./01/01_02_map/AppNewComponents";
import {Button0} from "./01/01_03_button/Button0";
import {Button} from "./01/01_03_button/components/Button";
import {IndexButton} from "./01/01_03_button/indexButton";
import {IndexUseState} from "./01/01_04_useState/IndexUseState";
import IndexFilter from "./01/01_05_filter/indexFilter";
import IndexPropeTypes from "./01/01_00_PROPSTypes/indexPropeTypes";
import {IndexInput} from "./01/02_01_input/InputWithButton/IndexInput";
import {IndexInputSeparateButton} from "./01/02_01_input/InputSeparateButton/IndexInputSeparateButton";


function App() {
    return (
        <>
            {/*<IndexInput/>*/}
            <IndexInputSeparateButton/>
        </>
    )
}

export default App;
