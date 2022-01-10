import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    groups: null,
    pages: null,
    blog: null,
    dark: localStorage.getItem('darkmode') ? true : false,
    resources: null
  },
  reducers: {
    setGroups: (state, groups) => {
      state.groups = groups.payload
    },
    setResources: (state, resources) => {
      state.resources = resources.payload
    },
    setPages: (state, pages) => {
      state.pages = pages.payload
    },
    setBlog: (state, blog) => {
      state.blog = blog.payload
    },
    setDarkMode: (state, status) => {
      const payload = status.payload
      if (payload) localStorage.setItem('darkmode', true)
      else localStorage.removeItem('darkmode')
      state.dark = status.payload
    }
  }
})

export const {
  setGroups,
  setPages,
  setBlog,
  setDarkMode,
  setResources
} = configSlice.actions

export default configSlice.reducer