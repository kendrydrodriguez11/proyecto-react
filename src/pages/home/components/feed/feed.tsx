import { useState } from 'react'
import PostCard from '../post-card/post-card'
import './feed.css'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Juan Pérez',
      avatar: '👤',
      timestamp: 'Hace 2 horas',
      content: '¡Hola a todos! Feliz de estar en esta red social.',
      likes: 45,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: 'María García',
      avatar: '👩',
      timestamp: 'Hace 4 horas',
      content: 'Acabamos de terminar un proyecto increíble en el trabajo. Estoy muy emocionada.',
      likes: 120,
      comments: 25,
      shares: 15
    },
    {
      id: 3,
      author: 'Carlos López',
      avatar: '👨',
      timestamp: 'Hace 6 horas',
      content: 'Disfrutando de un hermoso día en la playa con mi familia.',
      likes: 200,
      comments: 40,
      shares: 30
    }
  ])

  const [newPost, setNewPost] = useState('')

  const handlePostClick = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'Tu Nombre',
        avatar: '👤',
        timestamp: 'Ahora',
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0
      }
      setPosts([post, ...posts])
      setNewPost('')
    }
  }

  return (
    <div className='feed'>
      <div className='feed-composer'>
        <div className='composer-header'>
          <div className='composer-avatar'>👤</div>
          <input
            type='text'
            className='composer-input'
            placeholder='¿Qué estás pensando?'
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePostClick()}
          />
        </div>
        <div className='composer-divider'></div>
        <div className='composer-actions'>
          <button className='composer-action-btn'>
            <span>🎬</span> Video en directo
          </button>
          <button className='composer-action-btn'>
            <span>🖼️</span> Foto
          </button>
          <button className='composer-action-btn'>
            <span>😊</span> Sentimiento
          </button>
        </div>
        <button className='composer-post-btn' onClick={handlePostClick}>
          Publicar
        </button>
      </div>

      <div className='feed-posts'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed