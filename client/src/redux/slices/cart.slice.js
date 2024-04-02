import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCartProduct: (state, { payload }) => {
      const existingProductIndex = state.products.findIndex((product) => {
        return (
          product.id === payload.id &&
          product.isPromotions === payload.isPromotions &&
          product.currentSize === payload.currentSize
        );
      });

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = payload;
      } else {
        state.products.push(payload);
      }
    },
    delFromCartProduct: (state, { payload }) => {
      state.products = [
        ...state.products.filter((product) => {
          return (
            product.id !== payload.id ||
            product.isPromotions !== payload.isPromotions ||
            product.currentSize !== payload.currentSize
          );
        }),
      ];
    },
    addProductsFromLocalStorage: (state, { payload }) => {
      state.products =  payload
    }
  },
});

export const { addToCartProduct, delFromCartProduct, addProductsFromLocalStorage } = cartSlice.actions;

export default cartSlice.reducer;
