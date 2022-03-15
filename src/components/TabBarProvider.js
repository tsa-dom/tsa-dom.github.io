/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash'
import { Globals } from '../App'

const TabBarProvider = ({ children }) => {
  const { showMenu } = useContext(Globals)

  return (
    <div style={{ position: 'fixed' }} className={showMenu ? 'show-menu' : 'hide-menu'}>
      {children}
    </div>
  )
}

export default TabBarProvider
