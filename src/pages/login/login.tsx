import { useState } from 'react'
import { useNavigate } from 'react-router'
import InputAuth from '../../components/button/input'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      navigate('/home')
    }
  }

  return (
    <div className='login-container'>
      <div className='login-left'>
        <h1 className='facebook-logo'>facebook</h1>
        <p className='facebook-subtitle'>Conecta con amigos y familiares usando Facebook.</p>
      </div>

      <div className='login-right'>
        <form className='login-form' onSubmit={handleLogin}>
          <InputAuth
            placeholder='Correo electrónico o número de teléfono'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputAuth
            placeholder='Contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='login-btn'>Iniciar sesión</button>

          <div className='login-divider'>
            <span>¿Olvidaste tu contraseña?</span>
          </div>

          <button
            type='button'
            className='register-btn'
            onClick={() => navigate('/register')}
          >
            Crear cuenta nueva
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login