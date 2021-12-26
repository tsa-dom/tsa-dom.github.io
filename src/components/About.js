import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

const About = () => {
  const [markdown, setMarkdown] = useState(undefined)

  useEffect(async () => {
    const res = await fetch('/gh-pages/about.md')
    const text = await res.text()
    setMarkdown(text)
  }, [setMarkdown])

  return (
    <Container className='page'>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </Container>
  )
}

export default About