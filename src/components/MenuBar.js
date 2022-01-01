import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MenuBar = () => {
  const navigate = useNavigate()

  const toAbout = () => {
    navigate('/pages/about')
  }

  const toBlogs = () => {
    navigate('/blog')
  }

  const toMain = () => {
    navigate('/')
  }

  return (
    <div className='menu'>
      <Container className='nav-menu'>
        <Nav style={{ marginLeft: -15, marginRight: -10, overflow: 'hidden' }}>
          <Nav.Link className='nav-button' onClick={toMain}>Main</Nav.Link>
          <Nav.Link className='nav-button' onClick={toAbout}>About me</Nav.Link>
          <Nav.Link className='nav-button' onClick={toBlogs}>Blog</Nav.Link>
        </Nav>
      </Container>
    </div>
  )
}

export default MenuBar