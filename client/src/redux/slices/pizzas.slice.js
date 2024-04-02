import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async () => {
  try {
    const response = await fetch("/pizzas");
    const pizzas = await response.json();
    return pizzas;
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    throw error;
  }
});

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzasList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.loading = false;
      state.pizzasList = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const pizzas = (state) => state.pizzas;

export default pizzasSlice.reducer;
