import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MenuBar = () => {
  const navigate = useNavigate()

  return (
    <div className='menu'>
      <Container className='nav-menu'>
        <Nav style={{ marginLeft: -15, marginRight: -10, overflow: 'hidden' }}>
          <Nav.Link className='nav-button' onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/about')}>About</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/blog')}>Blog</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/contributors')}>Contributors</Nav.Link>
        </Nav>
      </Container>
    </div>
  )
}

export default MenuBar