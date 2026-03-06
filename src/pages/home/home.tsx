import { useNavigate } from 'react-router'
import Sidebar from './components/sidebar/sidebar'
import Feed from './components/feed/feed'
import './home.css'

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className='home-container'>
      <header className='home-header'>
        <div className='header-left'>
          <h1 className='header-logo'>facebook</h1>
          <input
            type='text'
            className='header-search'
            placeholder='🔍 Buscar en Facebook'
          />
        </div>
        <div className='header-right'>
          <button className='header-icon-btn'>👤</button>
          <button className='header-icon-btn'>💬</button>
          <button className='header-icon-btn'>🔔</button>
          <button className='logout-btn' onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <div className='home-content'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Home