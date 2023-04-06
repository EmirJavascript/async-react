import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  books: []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
})

export const booksActions = booksSlice.actions

export default booksSlice.reducer