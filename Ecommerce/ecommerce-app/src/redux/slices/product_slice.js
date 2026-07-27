import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils.js";

export const addProduct = createAsyncThunk("product/add", async (product) => {
  const res = await axios.post(`${base_url}/product`, product);
  return res.data;
});
export const getProduct = createAsyncThunk("product/get", async () => {
  const res = await axios.get(`${base_url}/product`);
  return res.data;
});
export const updateProduct = createAsyncThunk(
  "product/update",
  async (product) => {
    const res = await axios.put(`${base_url}/product/${product.id}`, product);
    return res.data;
  },
);
export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  const res = await axios.delete(`${base_url}/product/${id}`);
  return res.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
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
    builder.addCase(addProduct.pending, pending);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    });
    builder.addCase(addProduct.rejected, rejected);

    // update
    builder.addCase(updateProduct.pending, pending);
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      //   state.products.forEach((val) => {
      //     if (val.id == action.payload.id) {
      //       val = action.payload;
      //     }
      //   });
      state.products = state.products.map((val) => {
        if (val.id == action.payload.id) {
          return action.payload;
        }
      });
    });
    builder.addCase(updateProduct.rejected, rejected);
    // get
    builder.addCase(getProduct.pending, pending);
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, rejected);
    // delete
    builder.addCase(deleteProduct.pending, pending);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (val) => val.id != action.payload.id,
      );
    });
    builder.addCase(deleteProduct.rejected, rejected);
  },
});

export default productSlice.reducer;
