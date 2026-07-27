import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils.js";

export const addCart = createAsyncThunk("cart/add", async (product) => {
  const res = await axios.post(`${base_url}/cart`, product);
  return res.data;
});
export const getCart = createAsyncThunk("cart/get", async () => {
  const res = await axios.get(`${base_url}/cart`);
  return res.data;
});
export const updateCart = createAsyncThunk("cart/update", async (product) => {
  const res = await axios.put(`${base_url}/cart/${product.id}`, product);
  return res.data;
});
export const deleteCart = createAsyncThunk("cart/delete", async (id) => {
  const res = await axios.delete(`${base_url}/cart/${id}`);
  return res.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    err: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    const pending = (state, action) => {
      state.isLoading = true;
    };
    const rejected = (state, action) => {
      state.isLoading = false;
      state.err = action.error.message;
      alert(state.err);
    };

    // add
    builder.addCase(addCart.pending, pending);
    builder.addCase(addCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts.push(action.payload);
    });
    builder.addCase(addCart.rejected, rejected);

    // update
    builder.addCase(updateCart.pending, pending);
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.isLoading = false;
      //   state.products.forEach((val) => {
      //     if (val.id == action.payload.id) {
      //       val = action.payload;
      //     }
      //   });
      state.carts = state.carts.map((val) => {
        if (val.id == action.payload.id) {
          return action.payload;
        }
      });
    });
    builder.addCase(updateCart.rejected, rejected);
    // get
    builder.addCase(getCart.pending, pending);
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    });
    builder.addCase(getCart.rejected, rejected);
    // delete
    builder.addCase(deleteCart.pending, pending);
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts = state.carts.filter((val) => val.id != action.payload.id);
    });
    builder.addCase(deleteCart.rejected, rejected);
  },
});

export default cartSlice.reducer;
