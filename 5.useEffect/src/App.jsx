import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  //! useEffect sayfa yüklendiğinde bir şeyleri tetiklemek için kullanılır.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  })

  useEffect(() => {
    console.log("Component ilk render edildiğinde çalışır")
    // veritabanınında sayfayı yüklerken başta veriyi çeksin dahada çalışmasın gibi durumlar için kullanılır.
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FİRSTNAME veya LASTNAME state değeri değiştiğinde çalışır.")
  }, [firstName, lastName])

  // useEffect(() => {
  //   console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır.")
  // }, [lastName])

  return (
    <div>
      <div><button onClick={() => { setFirstName("Selim") }}>Adı Değiştir</button></div>
      <div><button onClick={() => { setLastName("Alkan") }}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
