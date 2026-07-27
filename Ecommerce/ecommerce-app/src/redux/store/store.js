import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "../slices/auth_slice.js";
import product_slice from "../slices/product_slice.js";
import cart_slice from "../slices/cart_slice.js";
import order_slice from "../slices/order_slice.js";

const store = configureStore({
  reducer: {
    auth: auth_reducer,
    product: product_slice,
    cart: cart_slice,
    order: order_slice,
  },
});

export default store;
