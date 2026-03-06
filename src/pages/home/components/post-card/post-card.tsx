import { useState } from 'react'
import './post-card.css'

type Post = {
  id: number
  author: string
  avatar: string
  timestamp: string
  content: string
  likes: number
  comments: number
  shares: number
}

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div className='post-card'>
      <div className='post-header'>
        <div className='post-author-info'>
          <div className='post-avatar'>{post.avatar}</div>
          <div className='post-author-details'>
            <p className='post-author-name'>{post.author}</p>
            <p className='post-timestamp'>{post.timestamp}</p>
          </div>
        </div>
        <button className='post-more-btn'>⋯</button>
      </div>

      <div className='post-content'>
        <p>{post.content}</p>
      </div>

      <div className='post-stats'>
        <span className='stat'>{likes} Me gusta</span>
        <span className='stat'>{post.comments} Comentarios</span>
        <span className='stat'>{post.shares} Compartencias</span>
      </div>

      <div className='post-divider'></div>

      <div className='post-actions'>
        <button
          className={`post-action-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <span>{liked ? '👍' : '🤍'}</span>
          Me gusta
        </button>
        <button className='post-action-btn'>
          <span>💬</span>
          Comentar
        </button>
        <button className='post-action-btn'>
          <span>🔗</span>
          Compartir
        </button>
      </div>
    </div>
  )
}

export default PostCard