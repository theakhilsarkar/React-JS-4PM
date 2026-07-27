import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils.js";

export const addOrder = createAsyncThunk("order/add", async (product) => {
  const res = await axios.post(`${base_url}/order`, product);
  return res.data;
});
export const getOrder = createAsyncThunk("order/get", async () => {
  const res = await axios.get(`${base_url}/order`);
  return res.data;
});
export const updateOrder = createAsyncThunk("order/update", async (product) => {
  const res = await axios.put(`${base_url}/order/${product.id}`, product);
  return res.data;
});
export const deleteOrder = createAsyncThunk("order/delete", async (id) => {
  const res = await axios.delete(`${base_url}/order/${id}`);
  return res.data;
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
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
    builder.addCase(addOrder.pending, pending);
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders.push(action.payload);
    });
    builder.addCase(addOrder.rejected, rejected);

    // update
    builder.addCase(updateOrder.pending, pending);
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      //   state.products.forEach((val) => {
      //     if (val.id == action.payload.id) {
      //       val = action.payload;
      //     }
      //   });
      state.orders = state.orders.map((val) => {
        if (val.id == action.payload.id) {
          return action.payload;
        }
      });
    });
    builder.addCase(updateOrder.rejected, rejected);
    // get
    builder.addCase(getOrder.pending, pending);
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrder.rejected, rejected);
    // delete
    builder.addCase(deleteOrder.pending, pending);
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = state.orders.filter((val) => val.id != action.payload.id);
    });
    builder.addCase(deleteOrder.rejected, rejected);
  },
});

export default orderSlice.reducer;

// amazon - cancel - delete
// edit - 2 qty, 150.

// product | cart | order

// status:pending,dispatch,on-dilivery,dilivered

// DB - Backend

//
