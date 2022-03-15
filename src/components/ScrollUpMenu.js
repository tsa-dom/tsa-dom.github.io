import React, { useContext } from 'react'
import { Offcanvas } from 'react-bootstrap'
import MenuBar from './MenuBar'
import { Globals } from '../App'

const ScrollUpMenu = () => {
  const { showMenu } = useContext(Globals)

  return (
    <Offcanvas
      show={showMenu}
      placement='top'
      scroll={true}
      backdrop={false}
      style={{ height: 51 }}
    >
      <MenuBar />
    </Offcanvas>
  )
}

export default ScrollUpMenu