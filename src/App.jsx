import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Programs from './Components/Programs'
import About from './Components/About'
import Impact from './Components/Impact'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Advocacy from './Components/Advocancy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
