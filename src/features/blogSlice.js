import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: []
  },
  reducers: {
    addPost: (state, post) => {
      state.posts = state.posts.concat(post.payload)
    }
  }
})

export const {
  addPost,
  setConfig
} = blogSlice.actions

export default blogSlice.reducer