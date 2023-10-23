import React from 'react'

import {useAppSelector} from './app/hooks';

import {STYLE} from "./app/constants";
import './App.css'


function BA() {

    console.log('Rendering:  BA')

    const count = useAppSelector((state) => state.counter.value);
    const snState = useAppSelector((state) => state.deviceId.snState);

    return (
        <div className="BA">
            <header className="Subcomponent-header">
                <p className="component-title">Component: BA</p>
                <div>
                    Counter: <div className="counter">{count}</div>
                    <div>SN: {snState.value || STYLE.EMPTY_VALUE}</div>
                    <div className="val-state">(state: {snState.isValid ? 'valid' : 'invalid'})</div>
                </div>
            </header>
        </div>
    )
}

export {BA}
