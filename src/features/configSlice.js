import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    groups: null,
    pages: null,
    blog: null,
    dark: true//localStorage.getItem('darkmode') ? true : false
  },
  reducers: {
    setGroups: (state, groups) => {
      state.groups = groups.payload
    },
    setPages: (state, pages) => {
      state.pages = pages.payload
    },
    setBlog: (state, blog) => {
      state.blog = blog.payload
    },
    setDarkMode: (state, status) => {
      localStorage.setItem('darkmode', true)
      state.dark = status.payload
    }
  }
})

export const {
  setGroups,
  setPages,
  setBlog,
  setDarkMode
} = configSlice.actions

export default configSlice.reducer