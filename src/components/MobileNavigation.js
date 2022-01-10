import React from 'react'
import { Accordion, Nav, Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MobileNavigation = ({ config, activeKey, path='pages' }) => {
  const navigate = useNavigate()

  if (!config) return <></>
  const conf = config.find(c => c.file === activeKey)

  if (!conf) return <></>
  const title = conf.title

  return (
    <Accordion className="mobile-menu">
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        <Tab.Container activeKey={activeKey}>
          {config &&
            <Nav variant="pills" className="flex-row">
              {[...config].sort((a, b) => a.priority - b.priority).map((c, i) => {
                return <Nav.Item key={i} style={{ width: '100%' }}>
                  <Nav.Link
                    className="mobile-link"
                    eventKey={c.file}
                    onClick={() => navigate(`/${path}/${c.file}`)}
                  >{c.title}</Nav.Link>
                </Nav.Item>
              })}
            </Nav>
          }
        </Tab.Container>
      </Accordion.Body>
    </Accordion>
  )
}

export default MobileNavigation