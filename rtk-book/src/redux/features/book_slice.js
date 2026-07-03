import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [
      {
        title: "7 Habits",
        author: "Stephen Covey",
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { i, book } = action.payload;
      state.books[i] = book;
    },
    removeBook: (state, action) => {
      state.books.splice(action.payload, 1);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, updateBook, removeBook } = bookSlice.actions;
