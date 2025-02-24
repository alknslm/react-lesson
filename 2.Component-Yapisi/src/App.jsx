import { useState } from 'react'
import './App.css'
import Login from './Login' // component alındı
import { users } from './Login' // component içindeki users alındı
import Hello from './Hello'

function App() {

  console.log(users)
  return (
    <div>
      {/* <Login /> */}
      <Hello />
    </div>
  )
}

export default App
