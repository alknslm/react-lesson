import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const average = () => {
    debugger;
    const total = topla() / 2;
    printConsole(total);
  }

  const topla = () => {
    debugger;
    const totalResult = vize1 + vize2;
    return totalResult;
  }

  const printConsole = (sonuc) => {
    debugger;
    console.log("Ortalama: " + sonuc);
  }

  return (
    <>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
      </div>

      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div>

      <div>
        <button onClick={average}>Ortalama Bul</button>
      </div>
    </>
  )
}

export default App
