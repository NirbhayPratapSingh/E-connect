import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer.jsx/Footer'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext, AuthProvider } from './contextApi/AuthContext'
import Chat from './Components/Chat/Chat'
import { useNavigate,Navigate } from 'react-router-dom'

function App() {
  const location = useLocation()
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()



  return (
    <div className="bg-white shadow dark:bg-gray-800">
      {location.pathname === '/login' ||
      location.pathname === '/signup' ||
      location.pathname === '/chat' ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={login ? <HomePage /> : navigate("/login")} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={login ? <Chat /> : navigate("/login")} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {location.pathname === '/login' ||
      location.pathname === '/signup' ||
      location.pathname == '/chat' ? null : (
        <Footer />
      )}
    </div>
  )
}

export default App
