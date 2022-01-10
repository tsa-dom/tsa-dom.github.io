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
  const [data, setData] = useState(undefined)
  const pages = useSelector(state => state.pages.entries)
  const pageConfig = useSelector(state => state.config.pages)
  const groupConfig = useSelector(state => state.config.groups)
  const [config, setConfig] = useState(undefined)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [notFound, setNotFound] = useState(false)

  useEffect(navScrollEvent)

  useEffect(async () => {
    setNotFound(false)
    if (!pageConfig) {
      const conf = await getConfig('pages')
      dispatch(setPages(conf))
    }
    if (!groupConfig) {
      const conf = await getConfig('groups')
      dispatch(setGroups(conf))
    }
    const fileName = main ? 'main' : params['page']
    if (params['page'] === 'main') navigate('/')
    const page = pages.find(p => p.file === fileName)
    if (page) setData(page)
    else {
      const source = await getPage(fileName)
      if (source) {
        dispatch(addPage(source))
        setData(source)
      } else setNotFound(true)
    }
  }, [params])

  useEffect(() => {
    if (data && pageConfig && groupConfig) {
      const page = pageConfig.find(c => c.file === data.file)
      if (page) {
        setConfig(groupConfig[page.group])
      } else setConfig(undefined)
    }
  }, [setConfig, data])

  if(notFound) return <PageNotFound />

  if (!data) return <></>
  const param = main ? 'main' : params['page']

  return (
    <Container className='separator'>
      <Helmet meta={data.meta} />
      <Container className='page'>
        <MobileNavigation activeKey={param} config={config} />
        <hr className="mobile" />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {data.markdown}
        </ReactMarkdown>
      </Container>
      <Container className='tab'>
        <Navigation activeKey={param} config={config}/>
      </Container>
    </Container>
  )
}

export default Page