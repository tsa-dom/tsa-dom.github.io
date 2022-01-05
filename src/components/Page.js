/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Tab } from 'react-bootstrap'
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
import { styles } from '../utils/styles'

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
  const dark = useSelector(state => state.config.dark)

  useEffect(() => {
    window.onscroll = () => {
      const element = document.getElementById('sticky-col')
      if (element && window.pageYOffset > 50) {
        element.style.position = 'fixed'
        element.style.top = 0
        element.style.marginTop = '30px'
      } else {
        element.style.position = 'static'
        element.style.top = 'initial'
        element.style.marginTop = 0
      }
    }
  }, [])

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

  return (
    <Container className='separator'>
      <Helmet meta={data.meta} />
      <Container className='page' style={{ color: dark ? styles.white : styles.dark }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {data.markdown}
        </ReactMarkdown>
      </Container>
      <Container className='tab'>
        <Tab.Container activeKey={main ? 'main' : params['page']} >
          {config &&
            <Col id="sticky-col">
              <h4 id="sticky-col-head">Navigation</h4>
              <Nav variant="pills" className="flex-row" style={{ width: 276, maxHeight: '50vw', overflowY: 'auto', overflowX: 'hidden' }}>
                {config.map((c, i) => {
                  return <Nav.Item key={i} style={{ width: 256 }}>
                    <Nav.Link className="tab-link" eventKey={c.file} onClick={() => navigate(`/pages/${c.file}`)}>{c.title}</Nav.Link>
                  </Nav.Item>
                })}
              </Nav>
            </Col>
          }
        </Tab.Container>
      </Container>
    </Container>
  )
}

export default Page