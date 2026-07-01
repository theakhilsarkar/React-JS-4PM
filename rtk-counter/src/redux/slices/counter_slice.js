import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    add2: (state) => {
      state.count += 2;
    },
  },
});

export const { increment, decrement,add2 } = counterSlice.actions; // named - multiple
export default counterSlice.reducer; // default - single

// store -> reducer
// ui -> action
//npm i @reduxjs/toolkit react-redux
