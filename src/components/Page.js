import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { getPage } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPage } from '../features/pageSlice'

const Page = ({ main }) => {
  const [markdown, setMarkdown] = useState(undefined)
  const pages = useSelector(state => state.pages.entries)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(async () => {
    const fileName = main ? 'main' : params['page']
    if (params['page'] === 'main') navigate('/')
    const page = pages.find(p => p.file === fileName)
    if (page) setMarkdown(page.markdown)
    else {
      const source = await getPage(fileName)
      if (source) {
        dispatch(addPage({
          markdown: source,
          file: fileName
        }))
        setMarkdown(source)
      } else navigate('/not-found')
    }
  })

  return (
    <Container className='page'>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </Container>
  )
}

export default Page