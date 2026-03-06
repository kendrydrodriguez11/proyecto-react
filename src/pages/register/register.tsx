import InputAuth from '../../components/button/input'
import { useState } from 'react'
import './register.css'


function register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
  return (
    <div className='formulario-registro'>
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
        <InputAuth
        label='Confirm Password'
        placeholder='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
    </div>
  )
}

export default register