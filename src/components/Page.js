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

const Page = ({ main }) => {
  const [data, setData] = useState(undefined)
  const pages = useSelector(state => state.pages.entries)
  const pageConfig = useSelector(state => state.config.pages)
  const groupConfig = useSelector(state => state.config.groups)
  const [config, setConfig] = useState(undefined)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(async () => {
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
      } else navigate('/not-found')
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

  if (!data) return <></>

  return (
    <Container className='separator'>
      <Helmet meta={data.meta} />
      <Container className='page'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.markdown}
        </ReactMarkdown>
      </Container>
      <Container className='tab'>
        <Tab.Container activeKey={main ? 'main' : params['page']} >
          {config &&
            <Col style={{ position: 'fixed', width: 276 }}>
              <h4>Navigation</h4>
              <Nav variant="pills" className="flex-column">
                {config.map((c, i) => {
                  return <Nav.Item key={i}>
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