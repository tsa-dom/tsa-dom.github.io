import React from 'react'
import { Col, Nav, Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styles } from '../styles/styles'

const Navigation = ({ config, activeKey, path='pages' }) => {
  const navigate = useNavigate()
  const dark = useSelector(state => state.config.dark)

  if (!config) return <></>

  return (
    <Tab.Container activeKey={activeKey} >
      <Col id="sticky-col">
        <h4 id="sticky-col-head">Resources</h4>
        <Nav
          variant="pills"
          className="flex-row"
          style={{ width: 276, maxHeight: '50vw', overflowY: 'auto', overflowX: 'hidden' }}
        >
          {[...config].sort((a, b) => a.priority - b.priority).map((c, i) => {
            return <Nav.Item key={i} style={{ width: 256 }}>
              <Nav.Link style={{ color: dark ? styles.dark.linkColor : undefined }}
                className="tab-link"
                eventKey={c.file}
                onClick={() => navigate(`/${path}/${c.file}`)}
              >{c.title}</Nav.Link>
            </Nav.Item>
          })}
        </Nav>
      </Col>
    </Tab.Container>
  )
}

export default Navigation
