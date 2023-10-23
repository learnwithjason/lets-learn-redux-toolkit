import React from 'react'
import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, amountAdded} from './features/counter/counter-slice';
import logo from './logo.svg'
import './App.css'
import {A} from "./A";
import {B} from "./B";

function App() {

    console.log('Rendering: [ App ]')

    return (
        <div className="App">
            <header className="App-header">
                <A/>
                <p className="component-title">Component: App</p>
                <p>Hello Redux + Redux-toolkit!</p>
                <B/>
            </header>
        </div>
    )
}

export default App
