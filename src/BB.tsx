import React from 'react'
import {useUpdates} from "./hooks/useUpdates";
import './App.css'


function BB() {

    console.log('Rendering:  BB')

    const {increment, decrement } = useUpdates();

    return (
        <div className="BB">
            <header className="Subcomponent-header">
                <p className="component-title">Component: BB (with custom "actions" hooks)</p>
                <div className="bouttons">
                <button onClick={increment}>Counter++</button>
                <button onClick={decrement}>Counter--</button>
                </div>
            </header>
        </div>
    )
}

export {BB}
