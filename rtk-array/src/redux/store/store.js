import { configureStore } from "@reduxjs/toolkit";
import note_reducer from "../slices/notes_slice.js";

const store = configureStore({
  reducer: {
    notes: note_reducer,
  },
});

export default store;
