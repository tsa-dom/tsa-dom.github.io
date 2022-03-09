import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { getConfig } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { setBlog } from '../features/configSlice'
import PostListMobile from './PostListMobile'
import PostList from './PostList'

const Blog = () => {
  const config = useSelector(state => state.config.blog)
  const exec = useDispatch()

  useEffect(async () => !config && exec(setBlog(await getConfig('blog'))), [])

  if (!config) return <></>
  const sortedPosts = [...config].sort((a, b) => new Date(b.created) - new Date(a.created))

  return (
    <Container className='page-card'>
      <h4 style={{ marginBottom: 15 }}>All blog posts</h4>
      <PostListMobile posts={sortedPosts} />
      <PostList posts={sortedPosts} />
    </Container>
  )
}

export default Blog