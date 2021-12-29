import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    entries: [],
    selected: null
  },
  reducers: {
    addPage: (state, page) => {
      state.entries = state.entries.concat(page.payload)
    },
  }
})

export const {
  addPage,
} = pageSlice.actions

export default pageSlice.reducer