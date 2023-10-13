import React from 'react'
import './App.css'
import {AA} from "./AA";

function A() {

  console.log('Component A rendered')

  return (
    <div className="A">
      <header className="Subcomponent-header">
        <p>Component A</p>
        <AA/>
      </header>
    </div>
  )
}

export {A}
