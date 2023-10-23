import React from 'react'
import './App.css'
import {AA} from "./AA";

function A() {

    console.log('Rendering:  A')

    return (
        <div className="A">
            <header className="Subcomponent-header">
                <p className="component-title">Component: A</p>
                <AA/>
            </header>
        </div>
    )
}

export {A}
