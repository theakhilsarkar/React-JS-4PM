import CounterReducer from "../slices/counter_slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default store;
