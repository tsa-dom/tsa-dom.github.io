import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import MobileMenu from './MobileMenu'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setDarkMode } from '../features/configSlice'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const MenuBar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const dark = useSelector(state => state.config.dark)
  const dispatch = useDispatch()

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 450) setOpen(false)
    }
  }, [])

  return (
    <div className='menu'>
      <Container className="nav-menu" fluid>
        <Nav className='nav-container'>
          <Nav.Link className='nav-button' onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/blog')}>Blog</Nav.Link>
          <Nav.Link className='nav-button' onClick={() => navigate('/pages/contributors')}>Contributors</Nav.Link>
        </Nav>
        <Nav.Link style={{ position: 'absolute', right: 0 }} onClick={() => dispatch(setDarkMode(!dark))}>
          {dark && <BsMoonStarsFill style={{ color: 'white', marginTop: -5 }}/>}
          {!dark && <BsSunFill style={{ color: 'white', marginTop: -5 }}/>}
          <span className="switch" style={{ marginLeft: 10 }}>
            <input
              style={{ visibility: 'hidden' }}
              checked={dark}
              type="checkbox"
              onChange={() => {}}
            />
            <div className="slider round"></div>
          </span>
        </Nav.Link>
        <div style={{ paddingTop: 2 }} className='mobile-hamburger'>
          <Hamburger color='white' toggled={open} toggle={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </Container>
    </div>
  )
}

export default MenuBar