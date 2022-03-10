import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getConfig, getPost } from '../../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../../features/blogSlice'
import PageNotFound from '../PageNotFound'
import { setResources } from '../../features/configSlice'
import PageView from './PageView'

const Post = ({ namespaced }) => {
  const params = useParams()
  const file = namespaced ? `${params['namespace']}/${params['post']}` : params['post']
  const post = useSelector(state => state.blog.posts.find(p => p.file === file))
  const config = useSelector(state => state.config?.resources?.[params['namespace']])
  const exec = useDispatch()
  const [pageNotFound, setPageNotFound] = useState(false)

  useEffect(async () => {
    setPageNotFound(false)
    !config && exec(setResources(await getConfig('resources')))
    if (!post) {
      const source = await getPost(file)
      source ? exec(addPost(source)) : setPageNotFound(true)
    }
  }, [window.location.href])

  if (pageNotFound) return <PageNotFound />

  if (!post) return <></>

  return (
    <PageView page={post} path='blog' config={config} />
  )
}

export default Post