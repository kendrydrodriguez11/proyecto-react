import { useState } from 'react'
import { useNavigate } from 'react-router'
import InputAuth from '../../components/button/input'
import './register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: ''
  })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.firstName && formData.email && formData.password === formData.confirmPassword) {
      navigate('/home')
    }
  }

  return (
    <div className='register-container'>
      <div className='register-header'>
        <div className='register-header-content'>
          <h1 className='register-logo'>facebook</h1>
          <p className='register-header-text'>Es rápido y fácil.</p>
        </div>
        <button className='register-close-btn' onClick={() => navigate('/login')}>✕</button>
      </div>

      <form className='register-form' onSubmit={handleRegister}>
        <div className='form-row'>
          <InputAuth
            placeholder='Nombre'
            type='text'
            value={formData.firstName}
            onChange={handleChange}
            name='firstName'
          />
          <InputAuth
            placeholder='Apellidos'
            type='text'
            value={formData.lastName}
            onChange={handleChange}
            name='lastName'
          />
        </div>

        <InputAuth
          placeholder='Correo electrónico'
          type='email'
          value={formData.email}
          onChange={handleChange}
          name='email'
        />

        <InputAuth
          placeholder='Contraseña nueva'
          type='password'
          value={formData.password}
          onChange={handleChange}
          name='password'
        />

        <InputAuth
          placeholder='Confirmar contraseña'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          name='confirmPassword'
        />

        <div className='form-section-title'>¿Cuál es tu fecha de nacimiento?</div>
        <div className='form-row date-inputs'>
          <select
            name='birthDay'
            value={formData.birthDay}
            onChange={handleChange}
            className='date-select'
          >
            <option value=''>Día</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <select
            name='birthMonth'
            value={formData.birthMonth}
            onChange={handleChange}
            className='date-select'
          >
            <option value=''>Mes</option>
            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((month, idx) => (
              <option key={idx} value={idx + 1}>{month}</option>
            ))}
          </select>

          <select
            name='birthYear'
            value={formData.birthYear}
            onChange={handleChange}
            className='date-select'
          >
            <option value=''>Año</option>
            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className='form-section-title'>¿Cuál es tu género?</div>
        <div className='gender-options'>
          <label className='gender-label'>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Mujer
          </label>
          <label className='gender-label'>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Hombre
          </label>
          <label className='gender-label'>
            <input
              type='radio'
              name='gender'
              value='custom'
              checked={formData.gender === 'custom'}
              onChange={handleChange}
            />
            Personalizado
          </label>
        </div>

        <button type='submit' className='register-submit-btn'>Regístrate</button>
      </form>
    </div>
  )
}

export default Register