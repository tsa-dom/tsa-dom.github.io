import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { getPage } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPage } from '../features/pageSlice'
import Helmet from './Helmet'

const Page = ({ main }) => {
  const [data, setData] = useState(undefined)
  const pages = useSelector(state => state.pages.entries)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(async () => {
    const fileName = main ? 'main' : params['page']
    if (params['page'] === 'main') navigate('/')
    const page = pages.find(p => p.file === fileName)
    if (page) setData(page)
    else {
      const source = await getPage(fileName)
      if (source) {
        dispatch(addPage(source))
        setData(source)
      } else navigate('/not-found')
    }
  })

  if (!data) return <></>

  return (
    <Container className='page'>
      <Helmet meta={data.meta} />
      <ReactMarkdown>
        {data.markdown}
      </ReactMarkdown>
    </Container>
  )
}

export default Page