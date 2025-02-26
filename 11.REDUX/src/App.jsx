import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  const state = useSelector((store) => store.counter);
  console.log(state);

  return (
    <div>
      Selim
    </div>
  )
}

export default App
