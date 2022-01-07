import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { getConfig } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { setBlog } from '../features/configSlice'
import PostListMobile from './PostListMobile'
import PostList from './PostList'

const Blog = () => {
  const config = useSelector(state => state.config.blog)
  const dispatch = useDispatch()
  const dark = useSelector(state => state.config.dark)

  useEffect(async () => {
    if (!config) {
      const conf = await getConfig('blog')
      dispatch(setBlog(conf))
    }
  }, [])

  if (!config) return <></>
  const sortedPosts = [...config].sort((a, b) => new Date(b.created) - new Date(a.created))

  return (
    <Container className='page-card' style={{ color: dark ? 'rgb(230, 230, 230)' : 'black' }}>
      <h4 style={{ marginBottom: 15, marginTop: -5 }}>All blog posts</h4>
      <PostListMobile posts={sortedPosts} />
      <PostList posts={sortedPosts} />
    </Container>
  )
}

export default Blog