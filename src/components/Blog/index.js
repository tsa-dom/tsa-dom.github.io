import React, { useEffect } from 'react'
import { getConfig } from '../../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { setBlog } from '../../features/configSlice'
import PostList from './PostList'

const Blog = () => {
  const config = useSelector(state => state.config.blog)
  const exec = useDispatch()

  useEffect(async () => !config && exec(setBlog(await getConfig('blog'))), [])

  if (!config) return <></>
  const sortedPosts = [...config].sort((a, b) => new Date(b.created) - new Date(a.created))

  return (
    <PostList posts={sortedPosts} />
  )
}

export default Blog