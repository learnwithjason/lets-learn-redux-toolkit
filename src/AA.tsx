import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import './App.css'

function AA() {

  console.log('Component AA rendered')

  // const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();


  function handleClick() {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  return (
    <div className="AA">
      <header className="Subcomponent-header">
        <p>Component AA</p>
        <p>
          <button onClick={handleClick}>
            {/*count is: {count}*/}
            Increment the counter
          </button>
        </p>
      </header>
    </div>
  )
}

export {AA}
