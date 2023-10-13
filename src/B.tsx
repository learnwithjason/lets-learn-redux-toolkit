import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import './App.css'
import {BB} from "./BB";

function B() {
  
  console.log('Component B rendered')

  return (
    <div className="B">
      <header className="Subcomponent-header">
        <p>Component B</p>
        <BB/>
      </header>
    </div>
  )
}

export {B}
