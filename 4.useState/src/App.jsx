import { useState } from 'react'
import './App.css'

function App() {


  const [firstName, setFirstName] = useState('Selim');
  const [lastName, setLastName] = useState('Alkan');
  // firstName -> ifadenin değeri, setFirstName -> ifadeyi değiştirmek için kullanılan fonksiyon
  // useState('') -> ifadenin başlangıç değeri
  // ! useState içine string, dizi, obje, number, boolean değerler alabilir

  const handleChange = () => { // buton ile method çağırılıyor
    setFirstName('Fatmanur');
    setLastName('Dönmez');
  }

  const [names, setNames] = useState(['Selim', 'Ali', 'Veli', 'Ayşe', 'Fatma']);
  const [userInfo, setUserfo] = useState({ userName: "alknslm", passWord: "123" });

  // ! useState : bir state'in değerini set methodunu kullarak değiştirdiğinde component yeniden render edilir.
  // ! yeniden çalıştığı için component içindeki tüm kodlar çalışır. sayfayı yavaşlatabilir.
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  }

  const azalt = () => {
    setCount(count - 1)
  }

  console.log('App render edildi');
  return (
    <>
      {/* <div>{firstName} {lastName}</div>
      <div> <button onClick={handleChange}>İsim Değiştir</button></div>
      <hr />
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <hr />
      <div>{userInfo.userName} {userInfo.passWord}</div> */}
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azaltır</button>
      </div>

    </>
  )
}

export default App
