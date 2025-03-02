import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/counterSlice';
import UserList from './UserList';

function App() {

  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      {/* <div>{value}</div>
      <div><button onClick={() => dispatch(increament())}>Arttır</button> <button onClick={() => dispatch(decreament())}>Azalt</button></div> */}
      <UserList />
    </div>
  )
}

export default App
