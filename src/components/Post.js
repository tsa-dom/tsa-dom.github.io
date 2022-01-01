import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/blogSlice'
import Helmet from './Helmet'
import { isUrlValid } from '../utils/helpers'

const Post = () => {
  const posts = useSelector(state => state.blog.posts)
  const [data, setData] = useState(undefined)
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(async () => {
    const post = posts.find(p => p.file === params['post'])
    if (post) setData(post)
    else {
      const source = await getPost(params['post'])
      if (source) {
        dispatch(addPost(source))
        setData(source)
      } else navigate('/not-found')
    }
  }, [])

  if (!data) return <></>
  const acceptedLangs = ['jsx']

  return (
    <Container className='separator'>
      <Helmet meta={data.meta} />
      <Container className='page'>
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
                return <ReactMarkdown key={j}>{p}</ReactMarkdown>
              }
            })
          }
        })}
      </Container>
    </Container>
  )
}

export default Post