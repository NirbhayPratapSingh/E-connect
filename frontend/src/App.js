import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
