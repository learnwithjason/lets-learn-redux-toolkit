import React from 'react'

import {useAppSelector} from './app/hooks';

import {STYLE} from "./app/constants";
import './App.css'


function BA() {

    console.log('Rendering:  BA')

    const count = useAppSelector((state) => state.counter.value);
    const sn = useAppSelector((state) => state.counter.SN);

    return (
        <div className="BA">
            <header className="Subcomponent-header">
                <p className="component-title">Component: BA</p>
                <div>
                    Counter: <div className="counter">{count}</div>
                    <div>SN: {sn.value || STYLE.EMPTY_VALUE}</div>
                    <div className="val-state">(state: {sn.isValid ? 'valid' : 'invalid'})</div>
                </div>
            </header>
        </div>
    )
}

export {BA}
