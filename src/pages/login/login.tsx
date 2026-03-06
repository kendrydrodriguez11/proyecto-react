import { useState } from 'react'
import InputAuth from '../../components/button/input'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='formulario-login'>
      <InputAuth
        label='Email'
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputAuth
        label='Password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  )
}

export default Login