import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Impact from './Components/Impact'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Advocacy from './Components/Advocancy'
import SRHR from './Components/SRHR'
import Mentorship from './Components/Mentorship'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/srhr" element={<SRHR />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
