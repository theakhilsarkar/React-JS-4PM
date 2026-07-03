import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: ["default value"],
    count: 0,
  },
  reducers: {
    add: (state, action) => {
      state.notes.push(action.payload);
    },
    remove: (state, action) => {
      state.notes.pop();
    },
  },
});

export default noteSlice.reducer;
export const { add, remove } = noteSlice.actions;

// redux toolkit - CRUD project : todo,notes,task,inventory,ecom,....

// form -> input -> slice-state -> display on UI.

// ECommerce

// auth_slice - signin,signup,signout
// product_slice - add,delete,edit
// cart_slice - add,delete,edit
// order_slice - add, delete, edit

// LinkedIn...

// app - react native-js, flutter-dart, android-java/kotlin, iOS-swift

// application = solution/usecase

// application of .....
