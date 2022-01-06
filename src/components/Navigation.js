import React from 'react'
import { Col, Nav, Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Navigation = ({ config, activeKey }) => {
  const navigate = useNavigate()

  return (
    <Tab.Container activeKey={activeKey} >
      {config &&
        <Col id="sticky-col">
          <h4 id="sticky-col-head">Navigation</h4>
          <Nav variant="pills" className="flex-row" style={{ width: 276, maxHeight: '50vw', overflowY: 'auto', overflowX: 'hidden' }}>
            {[...config].sort((a, b) => a.priority - b.priority).map((c, i) => {
              return <Nav.Item key={i} style={{ width: 256 }}>
                <Nav.Link className="tab-link" eventKey={c.file} onClick={() => navigate(`/pages/${c.file}`)}>{c.title}</Nav.Link>
              </Nav.Item>
            })}
          </Nav>
        </Col>
      }
    </Tab.Container>
  )
}

export default Navigation
