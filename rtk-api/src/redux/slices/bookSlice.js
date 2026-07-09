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

export const deleteBook = createAsyncThunk("books/delete", async (id) => {
  const res = await axios.delete("http://localhost:3000/books/" + id);
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
  reducers: {
    searchBook: (state, action) => {
      state.books = state.books.filter((book) => book.title == action.payload);
    },
  },
  // async = delay = network request
  // pending
  // fulfilled
  // rejected
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter(
          (book) => book.id != action.payload.id,
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { searchBook } = bookSlice.actions;
export default bookSlice.reducer;
