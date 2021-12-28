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
        <Route path="/pages/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog" element={<Page />} />
        <Route path="/not-found" element={<PageNotFound />}/>
        <Route path="/pages/main" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
