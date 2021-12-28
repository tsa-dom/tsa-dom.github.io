import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { getPage } from '../services/blogs'
import ReactMarkdown from 'react-markdown'

const MainPage = () => {
  // This component is almost same as About.js, fix later
  const [markdown, setMarkdown] = useState(undefined)

  useEffect(async () => {
    const contents = await getPage('main')
    setMarkdown(contents)
  }, [setMarkdown])

  return (
    <Container className='page'>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </Container>
  )
}

export default MainPage