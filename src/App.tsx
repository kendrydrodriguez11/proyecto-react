import { Route, Routes } from 'react-router'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Home from './pages/home/home'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App