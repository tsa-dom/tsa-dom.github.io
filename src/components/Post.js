import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/blogSlice'

const Post = () => {
  const posts = useSelector(state => state.blog.posts)
  const [markdown, setMarkdown] = useState(undefined)
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(async () => {
    const post = posts.find(p => p.file === params['post'])
    if (post) setMarkdown(post.markdown)
    else {
      const source = await getPost(params['post'])
      if (source) {
        dispatch(addPost({
          markdown: source,
          file: params['post']
        }))
        setMarkdown(source)
      } else navigate('/not-found')
    }
  }, [])

  if (!markdown) return <></>

  return (
    <Container className='page'>
      {markdown.split('```').map((r, i) => {
        const lang = r.split('\n')[0]
        const code = r.substr(lang.length + 1, r.length - 5)
        if (lang === 'jsx') {
          return (
            <SyntaxHighlighter
              key={i}
              language={lang}
              style={vscDarkPlus}
              wrapLines={true}
              lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            >{code}</SyntaxHighlighter>
          )
        } else return (
          <ReactMarkdown key={i}>{r}</ReactMarkdown>
        )
      })}
    </Container>
  )
}

export default Post