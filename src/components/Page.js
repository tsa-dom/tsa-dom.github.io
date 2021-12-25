import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
//import ReactMarkdown from 'react-markdown'

const Page = () => {
  const [markdown, setMarkdown] = useState(undefined)

  useEffect(async () => {
    const res = await fetch('/gh-pages/blogs/test.html')
    setMarkdown(await res.text())
  }, [setMarkdown])

  console.log(markdown)

  return (
    <Container>{markdown}</Container>
  )
  /* return (
    <Container>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </Container>
  ) */
}

export default Page