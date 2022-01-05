import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'
import { getPost } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/blogSlice'
import Helmet from './Helmet'
import { isUrlValid } from '../utils/helpers'
import PageNotFound from './PageNotFound'
import remarkGfm from 'remark-gfm'
import { styles } from '../utils/styles'

const Post = () => {
  const posts = useSelector(state => state.blog.posts)
  const [data, setData] = useState(undefined)
  const params = useParams()
  const dispatch = useDispatch()
  const [notFound, setNotFound] = useState(false)
  const dark = useSelector(state => state.config.dark)

  useEffect(async () => {
    const post = posts.find(p => p.file === params['post'])
    if (post) setData(post)
    else {
      const source = await getPost(params['post'])
      if (source) {
        dispatch(addPost(source))
        setData(source)
      } else setNotFound(true)
    }
  }, [notFound])

  if (notFound) return <PageNotFound />

  if (!data) return <></>
  const acceptedLangs = ['jsx']

  return (
    <Container className='separator'>
      <Helmet meta={data.meta} />
      <Container className='page' style={{ color: dark ? styles.white : 'black' }}>
        {data.markdown.split('```').map((r, i) => {
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
            const pieces = r.split('<img src="').map(p => p.split('">')).flat(1)
            return pieces.map((p, j) => {
              if (isUrlValid(p)) {
                return (
                  <div key={j} style={{ textAlign: 'center', marginBottom: 20 }}>
                    <img src={p} style={{ maxWidth: '100%' }} />
                  </div>
                )
              } else {
                return <ReactMarkdown
                  key={j}
                  remarkPlugins={[remarkGfm]}
                >
                  {p}
                </ReactMarkdown>
              }
            })
          }
        })}
      </Container>
    </Container>
  )
}

export default Post