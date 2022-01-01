import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { getPage } from '../services/blogs'
import remarkGfm from 'remark-gfm'

const About = () => {
  const [markdown, setMarkdown] = useState(undefined)

  useEffect(async () => {
    const contents = await getPage('about')
    setMarkdown(contents)
  }, [setMarkdown])

  return (
    <Container className='page' remarkPlugins={[remarkGfm]}>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </Container>
  )
}

export default About