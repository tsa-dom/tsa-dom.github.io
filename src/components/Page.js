/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useNavigate, useParams } from 'react-router-dom'

const Page = () => {
  const [markdown, setMarkdown] = useState(undefined)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(async () => {
    const res = await fetch(`/gh-pages/assets/${params['blog']}.md`)
    const text = await res.text()
    if (text.includes('DOCTYPE')) {
      navigate('/gh-pages/not-found')
    } else setMarkdown(text)
  }, [setMarkdown])

  if (!markdown) return <></>

  return (
    <Container className='page'>
      {markdown.split('```').map((r, i) => {
        const lang = r.split('\r')[0]
        const code = r.substr(lang.length + 2, r.length - 6)
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

export default Page