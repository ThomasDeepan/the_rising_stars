import { useState } from 'react'
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Contact from "./pages/Contact"

function App() {
    return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
