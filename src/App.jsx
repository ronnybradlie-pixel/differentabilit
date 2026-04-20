import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Programs from './Components/Programs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
