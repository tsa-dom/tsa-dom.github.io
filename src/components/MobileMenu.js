import React from 'react'
import { Button, Offcanvas, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { styles } from '../utils/styles'

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate()

  const to = (path) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Offcanvas
      show={open}
      onHide={() => setOpen(false)}
      placement='start'
      style={{ marginTop: 50, height: window.innerHeight - 49, ...styles.dark }}
      backdrop={false}
    >
      <Offcanvas.Header>
        <Offcanvas.Title style={{ fontSize: 25, textAlign: 'center' }}>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row style={{ marginTop: -15, marginLeft: 2, marginRight: 2 }}>
          <Button variant="dark" onClick={() => to('/')} style={styles.mobileMenuButton}>Home</Button>
          <Button variant="dark" onClick={() => to('/pages/about')} style={styles.mobileMenuButton}>About</Button>
          <Button variant="dark" onClick={() => to('/blog')} style={styles.mobileMenuButton}>Blog</Button>
          <Button variant="dark" onClick={() => to('/pages/contributors')} style={styles.mobileMenuButton}>Contributors</Button>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default MobileMenu