import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/fetch", async () => {
  const res = await axios.get("http://localhost:3000/books");
  return res.data;
});

export const postBook = createAsyncThunk("books/post", async (book) => {
  const res = await axios.post("http://localhost:3000/books", book);
  return res.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  // sync
  reducers: {},
  // async = delay = network request
  // pending
  // fulfilled
  // rejected
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postBook.fulfilled, (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    });
  },
});

export default bookSlice.reducer;
