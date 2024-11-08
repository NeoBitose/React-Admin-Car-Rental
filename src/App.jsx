import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
