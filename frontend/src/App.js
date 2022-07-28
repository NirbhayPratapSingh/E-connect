import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer.jsx/Footer'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { useState } from 'react';

function App() {
  const location = useLocation();

  return (
    <div className="bg-white shadow dark:bg-gray-800">
      {
        location.pathname === "/login" || location.pathname === "/signup" ? null : <Header />
      }

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={
          <ErrorPage />
        } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
