import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './features/blogSlice'
import pageSlice from './features/pageSlice'

export default configureStore({
  reducer: {
    blog: blogSlice,
    pages: pageSlice
  }
})