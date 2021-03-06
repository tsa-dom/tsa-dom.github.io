import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import MobileMenu from './MobileMenu'
import DarkLightButton from './Embeds/DarkLightButton'


const MenuBar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => window.onresize = () => window.innerWidth > 450 && setOpen(false), [])

  return (
    <div className='menu'>
      <Container className="nav-menu" fluid>
        <Nav className='nav-container'>
          <Nav.Link className='nav-button' onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/blog')}>Blog</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/contributors')}>Contributors</Nav.Link>
        </Nav>
        <div style={{ position: 'relative' }}>
          <Nav.Link className='nav-button-dark'>
            <DarkLightButton />
          </Nav.Link>
        </div>
        <div className='mobile-hamburger'>
          <Hamburger color='white' toggled={open} toggle={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </Container>
    </div>
  )
}

export default MenuBar