import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
//Routes Route
//çalıştırabilmek için App componentini browserRouter ile sarmalıyoruz
function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} /> {/* hiç brisiyle eşleşmezse bu sayfayı aç */}
      </Routes>
    </div>
  )
}

export default App
