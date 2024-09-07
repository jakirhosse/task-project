import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/features/apiSlice";
import cartReducer from "../redux/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
