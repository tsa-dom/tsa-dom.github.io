import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import './App.css'
import Blog from './components/Blog'
import Page from './components/Page'

const App = () => {

  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/pages/:page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="/not-found" element={<PageNotFound />}/>
        <Route path="/" element={<Page main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
