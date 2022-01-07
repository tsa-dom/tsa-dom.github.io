import React from 'react'
import { Button, Offcanvas, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styles } from '../styles/styles'

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const dark = useSelector(state => state.config.dark)
  const mode = dark ? styles.dark : styles.light

  const to = (path) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Offcanvas
      show={open}
      onHide={() => setOpen(false)}
      placement='start'
      style={{ marginTop: 50, height: window.innerHeight - 49, ...mode, width: window.innerWidth }}
      backdrop={false}
    >
      <Offcanvas.Header>
        <Offcanvas.Title style={{ fontSize: 25, textAlign: 'center' }}>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row style={{ marginTop: -15, marginLeft: 2, marginRight: 2 }}>
          <Button variant={dark ? 'dark' : 'light'} onClick={() => to('/')} style={styles.mobileMenuButton}>Home</Button>
          <Button variant={dark ? 'dark' : 'light'} onClick={() => to('/blog')} style={styles.mobileMenuButton}>Blog</Button>
          <Button variant={dark ? 'dark' : 'light'} onClick={() => to('/pages/contributors')} style={styles.mobileMenuButton}>Contributors</Button>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default MobileMenu