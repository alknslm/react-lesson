import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  const productName = "Buzdolabı";
  const price = 2000;

  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <Product productName="Bilgisayar" price={5000} />
      <Product productName={productName} price={price} /> */}

      {/* Component içinde component çağırma */}
      <Container>
        <Product productName="Buzdolabı" price={4000} /> {/* Productı container'ın childı olarak çağırıyor */}
        <Product productName="Çamaşır Makinesi" price={3000} />
      </Container>
    </div>
  )
}

export default App
