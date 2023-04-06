import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  books: [],
  getBooks: {
    success: false,
    loading: false,
    failed: false,
  }
}

export const getBooks = createAsyncThunk('getBooks', async () => {
  const response = await fetch('http://localhost:2000/books')
  const data = await response.json()
  return data
})

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(action)
      state.books = action.payload
      state.getBooks.success = true
      state.getBooks.loading = false
    })
    builder.addCase(getBooks.pending, (state, action) => {
      console.log(action)
      state.getBooks.loading = true
    })
    builder.addCase(getBooks.rejected, (state, action) => {
      console.log(action)
    })
  }
})

export const booksActions = booksSlice.actions

export default booksSlice.reducer