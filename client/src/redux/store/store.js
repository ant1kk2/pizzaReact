import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../slices/cart.slice.js";
import pizzas, { fetchPizzas } from "./../slices/pizzas.slice.js";
import coffes, { fetchCoffes } from "./../slices/coffes.slice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pizzas: pizzas,
    coffes: coffes
  },
});

store.dispatch(fetchPizzas());
store.dispatch(fetchCoffes());

store.subscribe(() => {
  window.localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.products)
  );
});
