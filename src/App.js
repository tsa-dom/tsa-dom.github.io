import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Post from './components/Pages/Post'
import PageNotFound from './components/PageNotFound'
import './App.css'
import Blog from './components/Blog'
import Page from './components/Pages/Page'
import { useSelector } from 'react-redux'
import { updateStyles } from './utils/helpers'
import { styles } from './styles/styles'
import ScrollUpMenu from './components/ScrollUpMenu'
import _ from 'lodash'
export const Globals = createContext()

const App = () => {
  const dark = useSelector(state => state.config.dark)
  const [showMenu, setShowMenu] = useState(true)
  useEffect(() => {
    document.body.style.backgroundColor = dark ? styles.dark.backgroundColor : styles.light.backgroundColor
    updateStyles(dark)
  }, [dark])

  let scrollPos = 0
  useEffect(() => {
    window.addEventListener('scroll', _.debounce(() => {
      const top = document.body.getBoundingClientRect().top
      if (top >= scrollPos) setShowMenu(true)
      else setShowMenu(false)
      scrollPos = top
    }, 50))
  }, [])

  return (
    <Globals.Provider value={{ showMenu }}>
      <ScrollUpMenu />
      <div style={{ height: 50 }}></div>
      <Routes>
        <Route path="/pages/main" element={<Navigate replace to='/'/>} />
        <Route path="/pages/:page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:namespace/:post" element={<Post namespaced />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="/not-found" element={<PageNotFound />}/>
        <Route path="/" element={<Page main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Globals.Provider>
  )
}

export default App
