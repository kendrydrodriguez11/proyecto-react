import './sidebar.css'

const Sidebar = () => {
  const menuItems = [
    { icon: '👤', label: 'Amigos' },
    { icon: '👥', label: 'Grupos' },
    { icon: '🎬', label: 'Video' },
    { icon: '🌐', label: 'Página' },
    { icon: '📚', label: 'Recuerdos' },
    { icon: '⭐', label: 'Guardado' },
    { icon: '⚙️', label: 'Configuración' }
  ]

  return (
    <aside className='sidebar'>
      <div className='sidebar-profile'>
        <div className='profile-avatar'>👤</div>
        <div className='profile-info'>
          <p className='profile-name'>Tu Nombre</p>
          <p className='profile-status'>En línea</p>
        </div>
      </div>

      <nav className='sidebar-menu'>
        {menuItems.map((item, index) => (
          <div key={index} className='menu-item'>
            <span className='menu-icon'>{item.icon}</span>
            <span className='menu-label'>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className='sidebar-suggestions'>
        <h3>Sugerencias para ti</h3>
        {[1, 2, 3].map((i) => (
          <div key={i} className='suggestion-item'>
            <div className='suggestion-avatar'>👤</div>
            <div className='suggestion-content'>
              <p className='suggestion-name'>Usuario {i}</p>
              <button className='suggestion-btn'>Añadir</button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar