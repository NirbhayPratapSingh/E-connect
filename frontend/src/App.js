import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer.jsx/Footer'

function App() {
  return (
    <div className="bg-white shadow dark:bg-gray-800">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
