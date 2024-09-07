import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.total += parseFloat(product.discountPrice);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const productToRemove = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.total -=
        parseFloat(productToRemove.discountPrice) * productToRemove.quantity;
    },
    increment: (state, action) => {
      const id = action.payload;
      const product = state.items.find((item) => item.id === id);
      product.quantity += 1;
      state.total += parseFloat(product.discountPrice);
    },
    decrement: (state, action) => {
      const id = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product.quantity > 1) {
        product.quantity -= 1;
        state.total -= parseFloat(product.discountPrice);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
