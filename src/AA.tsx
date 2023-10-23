import React from 'react'

import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, amountAdded} from './features/counter/counter-slice';
import {macUpdated, snUpdated} from "./features/deviceId/deviceIds-slice";

import './App.css'


function AA() {

    console.log('Rendering:  AA')

    const dispatch = useAppDispatch();
    const snState = useAppSelector((state) => state.deviceId.snState);
    const macState = useAppSelector((state) => state.deviceId.macState);

    function handleClick() {
        // increment by 1
        // dispatch(incremented());

        // increment by a fixed amount
        dispatch(amountAdded(1));
    }


    function handleMacChange(e: React.ChangeEvent<HTMLInputElement>) {
        const macUpdate = {value: e.target.value, isValid: e.target.value !== ''};
        dispatch(macUpdated(macUpdate));
    }

    function handleSnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const snUpdate = {value: e.target.value, isValid: e.target.value !== ''};
        dispatch(snUpdated(snUpdate));
    }

    return (
        <div className="AA">
            <header className="Subcomponent-header App-bar">
                <p className="component-title">Component: AA</p>
                <p>
                    <button onClick={handleClick}>
                        Counter++
                    </button>
                </p>
                <p>
                    <input type="text" placeholder="Enter MAC" value={macState.value} onChange={handleMacChange}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter SN" value={snState.value} onChange={handleSnChange}/>
                </p>
            </header>
        </div>
    )
}

export {AA}
