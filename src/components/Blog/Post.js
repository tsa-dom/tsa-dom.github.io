import { format } from 'date-fns'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getMonthName } from '../../utils/helpers'

const Post = ({ post }) => {
  const navigate = useNavigate()
  const created = new Date(post.created)

  return (
    <>
      {post.committers.map((c, i) => (
        <a key={i} href={`https://github.com/${c.user}`} target="_blank" rel="noopener noreferrer">
          <img
            src={c.avatar_url}
            style={{ width: 25, borderRadius: '50%', marginRight: 7, marginBottom: 5 }}
            alt='Avatar'
          />
        </a>
      ))}
      <a style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => navigate(`/blog/${post.file}`)} >
        <span>{post.author}</span>
        <h4>{post.title}</h4>
        <div style={{ color: 'rgb(120,120,120)' }}>
          <div>{post.description}</div>
          <div style={{ marginTop: 5 }}>
            {getMonthName(created)} {format(created, 'd, yyyy')}
            <span style={{ marginLeft: 5 }}></span>
          </div>
        </div>
      </a>
      <hr></hr>
    </>
  )
}

export default Post
