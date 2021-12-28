import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MenuBar = () => {
  const navigate = useNavigate()

  const toAbout = () => {
    navigate('/pages/about')
  }

  const toBlogs = () => {
    navigate('/blogs')
  }

  const toMain = () => {
    navigate('/')
  }

  return (
    <div className='menu'>
      <Container style={{ maxWidth: 1080, fontSize: 23 }}>
        <Nav style={{ marginLeft: -15, marginRight: -15 }}>
          <Nav.Link className='nav-button' onClick={toMain}>Main</Nav.Link>
          <Nav.Link className='nav-button' onClick={toAbout}>About me</Nav.Link>
          <Nav.Link className='nav-button' onClick={toBlogs}>Blogs</Nav.Link>
        </Nav>
      </Container>
    </div>
  )
}

export default MenuBar