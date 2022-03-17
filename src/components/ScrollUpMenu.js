import React, { useContext } from 'react'
import MenuBar from './MenuBar'
import { Globals } from '../App'
import styled from 'styled-components'

const MenuProvider = styled.div`
  margin-top: ${props => props.showMenu ? '0' : '-50px' };
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: margin-top 0.3s linear;
`

const ScrollUpMenu = () => {
  const { showMenu } = useContext(Globals)

  return (
    <MenuProvider showMenu={showMenu}>
      <MenuBar />
    </MenuProvider>
  )
}

export default ScrollUpMenu