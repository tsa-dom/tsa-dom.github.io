import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import MenuBar from './components/MenuBar'
import Page from './components/Page'

const App = () => {

  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/gh-pages/" element={<MainPage />} />
        <Route path="/gh-pages/blogs/:blog" element={<Page />} />
      </Routes>
    </>
  )
}

export default App
