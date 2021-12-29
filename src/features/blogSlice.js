import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    config: null
  },
  reducers: {
    addPost: (state, post) => {
      state.posts = state.posts.concat(post.payload)
    },
    setConfig: (state, config) => {
      state.config = config.payload
    },
  }
})

export const {
  addPost,
  setConfig
} = blogSlice.actions

export default blogSlice.reducer