import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import './App.css'
import Blog from './components/Blog'
import Page from './components/Page'
import { useSelector } from 'react-redux'
import { updateStyles } from './utils/helpers'
import { styles } from './styles/styles'

const App = () => {
  const dark = useSelector(state => state.config.dark)
  useEffect(() => {
    document.body.style.backgroundColor = dark ? styles.dark.backgroundColor : styles.light.backgroundColor
    updateStyles(dark)
  }, [dark])

  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path="/pages/:page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:namespace/:post" element={<Post namespaced />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="/not-found" element={<PageNotFound />}/>
        <Route path="/" element={<Page main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
