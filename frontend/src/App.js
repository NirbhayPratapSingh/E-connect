import './App.css'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer.jsx/Footer'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './contextApi/AuthContext'

import axios from 'axios'
import Main from './Components/Main/Main';
import ProfilePage from './Components/ProfilePage/ProfilePage'

function App() {
  const location = useLocation()
  const { login, setLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await axios.get('http://localhost:8080/login', {
        withCredentials: true,
        credentials: 'include',
      })

      console.log(data.data, 'useeffce')
      setLogin(data.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    // setLogin(data.data)
    handleLogin()
  }, [])

  return (
    <div className="bg-white shadow dark:bg-gray-800">
      {location.pathname === '/login' ||
        location.pathname === '/signup'
        || !login
        ?
        null : (
          <Header />
        )}

      <Routes>
        <Route path="/" element={login ? <HomePage /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={true ? <Main /> : <Login />} />
        <Route path="/profile" element={true ? <ProfilePage /> : <Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {location.pathname === '/login' ||
        location.pathname === '/signup'
        || !login
        ?
        null : (
          <Footer />
        )}
    </div>
  )
}

export default App
