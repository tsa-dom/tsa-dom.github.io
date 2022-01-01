import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    groups: null,
    pages: null,
    blog: null
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
    }
  }
})

export const {
  setGroups,
  setPages,
  setBlog
} = configSlice.actions

export default configSlice.reducer