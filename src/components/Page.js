import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { getPage } from '../services/blog'
import { useSelector, useDispatch } from 'react-redux'
import { addPage } from '../features/pageSlice'
import Helmet from './Helmet'
import remarkGfm from 'remark-gfm'
import { getConfig } from '../services/blog'
import { setPages, setGroups } from '../features/configSlice'
import PageNotFound from './PageNotFound'
import { navScrollEvent } from '../utils/helpers'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Page = ({ main }) => {
  const params = useParams()
  const param = main ? 'main' : params['page']
  const page = useSelector(state => state.pages.entries.find(p => p.file === param))
  const config = useSelector(state => {
    const conf = state.config
    return conf?.groups?.[conf?.pages.find(c => c.file === param)?.group]
  })
  const navigate = useNavigate()
  const exec = useDispatch()
  const [pageNotFound, setPageNotFound] = useState(false)

  useEffect(navScrollEvent)

  useEffect(async () => {
    params['page'] === 'main' && navigate('/')
    setPageNotFound(false)
    !config && exec(setPages(await getConfig('pages')))
    !config && exec(setGroups(await getConfig('groups')))
    const source = await getPage(param)
    source ? exec(addPage(source)) : setPageNotFound(true)
  }, [params])

  if(pageNotFound) return <PageNotFound />

  if (!page) return <></>

  return (
    <Container className='separator'>
      <Helmet meta={page.meta} />
      <Container className='page'>
        <MobileNavigation activeKey={param} config={config} />
        <hr className="mobile" />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {page.markdown}
        </ReactMarkdown>
      </Container>
      <Container className='tab'>
        <Navigation activeKey={param} config={config}/>
      </Container>
    </Container>
  )
}

export default Page