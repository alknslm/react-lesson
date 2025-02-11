import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //JSX : { } içerisine yazılan kodlar javascript kodlarıdır.
  //Javascript kodları buraya geliyor
  // javascript ile html'i birleştiren şey süslü parantezlerdir.

  let a = 15;
  const firstName = "Selim";
  let vize1 = 60;
  let vize2 = 70;

  let sonuc = true;

  let isimler = ["Selim", "Ahmet", "Mehmet", "Ayşe", "Fatma"];

  return (
    //Burada HTML kodları yazılıyor

    <div>
      {/* <p>Ortalama = {(vize1 + vize2) / 2}</p> */}
      {/* <p> a değişkeninin değeri {a}</p>
      <p> Müşteri İsmi: {firstName}</p> */}

      {/* {sonuc ? <p>Geçti</p> : <p>Kaldı</p>} TURNERY OPERATÖRÜ if else yapısı gibi kullanılır */}

      {/* {
        (vize1 + vize2) / 2 >= 66 ? <p>Dersten geçtin</p> : <p>Dersten kaldın</p>
      } */}

      {
        isimler.map((isim, index) => ( // div'in keyine indexi verdik yoksa consola hata verir.
          <div style={{ //style objesi içn ilk süslü parntez javsAcript kodu olduğunu belirtir. 2.PARNTEZ CSS KODLARI
            backgroundColor: "lightblue",
            border: "1px solid black",
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

//componentin dışarda kullanılabilrmesi için export edilmesi gerekiyor.
export default App
