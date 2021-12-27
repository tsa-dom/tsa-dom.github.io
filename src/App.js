import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import MenuBar from './components/MenuBar'
import Page from './components/Page'
import PageNotFound from './components/PageNotFound'
import About from './components/About'
import './App.css'
import Blogs from './components/Blogs'

const App = () => {

  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/gh-pages/about" element={<About />} />
        <Route path="/gh-pages/blogs" element={<Blogs />} />
        <Route path="/gh-pages/blogs/:blog" element={<Page />} />
        <Route path="/gh-pages/not-found" element={<PageNotFound />}/>
        <Route path="/gh-pages/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
