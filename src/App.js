import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <Routes>
      <Route path="/gh-pages/test" element={<div>this is test page</div>} />
      <Route path="/gh-pages/" element={<div>this is main page</div>} />
    </Routes>
  )
}

export default App
