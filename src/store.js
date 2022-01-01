import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './features/blogSlice'
import pageSlice from './features/pageSlice'
import configSlice from './features/configSlice'

export default configureStore({
  reducer: {
    blog: blogSlice,
    pages: pageSlice,
    config: configSlice,
  }
})