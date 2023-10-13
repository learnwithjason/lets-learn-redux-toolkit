import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import logo from './logo.svg'
import './App.css'
import {A} from "./A";
import {B} from "./B";

function App() {

  console.log('App rendered')


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Redux + Redux-toolkit!</p>
        <A/>
        <B/>
      </header>
    </div>
  )
}

export default App
