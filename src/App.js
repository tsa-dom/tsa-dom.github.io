import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
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
        <Route path="/platform/pages/about" element={<About />} />
        <Route path="/platform/blogs" element={<Blogs />} />
        <Route path="/platform/blogs/:blog" element={<Page />} />
        <Route path="/platform/not-found" element={<PageNotFound />}/>
        <Route path="/platform/pages/main" element={<Navigate to="/platform" />} />
        <Route path="/platform/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
