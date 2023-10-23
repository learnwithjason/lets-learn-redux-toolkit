import React from 'react'
import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, amountAdded} from './features/counter/counter-slice';
import './App.css'
import {BB} from "./BB";
import {BA} from "./BA";
import {BC} from "./BC";
import {STYLE} from "./app/constants";

function B() {

    console.log('Rendering:  B')

    const macVal = useAppSelector((state) => state.counter.MAC.value);
    const macIsValid = useAppSelector((state) => state.counter.MAC.isValid);

    return (
        <div className="B">
            <header className="Subcomponent-header">
                <p className="component-title">Component: B</p>
                <div>MAC: {macVal || STYLE.EMPTY_VALUE}</div>
                <div className="val-state">(state: {macIsValid ? 'valid' : 'invalid'})</div>
                <BA/>
                <BB/>
                <BC/>
            </header>
        </div>
    )
}

export {B}
