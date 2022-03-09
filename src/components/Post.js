import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'
import { getConfig, getPost } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/blogSlice'
import Helmet from './Helmet'
import PageNotFound from './PageNotFound'
import remarkGfm from 'remark-gfm'
import Navigation from './Navigation'
import { setResources } from '../features/configSlice'
import MobileNavigation from './MobileNavigation'
import YouTube from './YouTube'
import { isValidUrl, textAndTypes } from '../utils/helpers'

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
    const source = await getPost(file)
    source ? exec(addPost(source)) : setPageNotFound(true)
  }, [window.location.href])

  if (pageNotFound) return <PageNotFound />

  if (!post) return <></>
  const acceptedLangs = ['jsx', 'css']

  return (
    <Container className='separator'>
      <Helmet meta={post.meta} />
      <Container className='page'>
        <MobileNavigation activeKey={file} config={config} path='blog' />
        <hr className="mobile" />
        {post.markdown.split('```').map((r, i) => {
          const lang = r.split('\n')[0]
          if (acceptedLangs.includes(lang)) {
            const code = r.substr(lang.length + 1, r.length - 5)
            return (
              <SyntaxHighlighter
                key={i}
                language={lang}
                style={vscDarkPlus}
                wrapLines={true}
              //lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
              >{code}</SyntaxHighlighter>
            )
          } else {
            const elements = textAndTypes(r)
            return elements.map((e, j) => {
              if (e.type === 'md') {
                return <ReactMarkdown
                  key={j}
                  remarkPlugins={[remarkGfm]}
                >
                  {e.value}
                </ReactMarkdown>
              } else if (e.type === 'youtube') {
                return <YouTube key={j} id={e.value} />
              } else if (e.type === 'image' && isValidUrl(e.value)) {
                return <img style={{ width: '100%' }} key={j} src={e.value} />
              }
            })
          }
        })}
      </Container>
      <Container className='tab'>
        <Navigation activeKey={file} config={config} path='blog' />
      </Container>
    </Container>
  )
}

export default Post