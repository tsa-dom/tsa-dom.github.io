import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styles } from '../../styles/styles'
import TabBarProvider from '../TabBarProvider'

const Navigation = ({ config, activeKey, path='pages' }) => {
  const navigate = useNavigate()
  const dark = useSelector(state => state.config.dark)

  if (!config) return <></>

  return (
    <TabBarProvider>
      <Tab.Container activeKey={activeKey} >
        <h4>Resources</h4>
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
      </Tab.Container>
    </TabBarProvider>
  )
}

export default Navigation
