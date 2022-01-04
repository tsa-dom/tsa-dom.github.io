/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'

const MenuBar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className='menu'>
      <Container className="nav-menu" fluid>
        <Nav className='nav-container'>
          <Nav.Link className='nav-button' onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/about')}>About</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/blog')}>Blog</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/contributors')}>Contributors</Nav.Link>
        </Nav>
        <div style={{ paddingTop: 2 }} className='mobile-hamburger'>
          <Hamburger color='white' toggled={open} toggle={setOpen} />
        </div>
      </Container>
    </div>
  )
}

export default MenuBar