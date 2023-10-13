import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import './App.css'

function BB() {

  console.log('Component BB rendered')

  const count = useAppSelector((state) => state.counter.value);


  return (
    <div className="BB">
      <header className="Subcomponent-header">
        <p>Component BB</p>
        <p>
            count is: {count}
        </p>
      </header>
    </div>
  )
}

export {BB}
