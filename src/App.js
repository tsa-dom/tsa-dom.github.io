import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import './App.css'
import './Dark.css'
import Blog from './components/Blog'
import Page from './components/Page'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
const DarkTheme = lazy(() => import('./styles/dark/Dark'))
const LightTheme = lazy(() => import('./styles/light/Light'))

const App = () => {
  const dark = useSelector(state => state.config.dark)
  useEffect(() => {
    document.body.style.backgroundColor = dark ? 'rgb(18, 18, 18)' : 'white'
  }, [dark])

  return (
    <div className={clsx({ 'body-dark': dark })}>
      <Suspense fallback={<></>}>
        {dark && <DarkTheme />}
        {!dark && <LightTheme />}
      </Suspense>
      <MenuBar />
      <Routes>
        <Route path="/pages/:page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:post" element={<Post />} />
        <Route path="/not-found" element={<PageNotFound />}/>
        <Route path="/" element={<Page main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
