import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoffes = createAsyncThunk("coffes/fetchCoffes", async () => {
  try {
    const response = await fetch("/coffes");
    const coffes = await response.json();
    return coffes;
  } catch (error) {
    console.error("Error fetching coffes:", error);
    throw error;
  }
});

const coffesSlice = createSlice({
  name: "coffes",
  initialState: {
    coffesList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoffes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCoffes.fulfilled, (state, action) => {
      state.loading = false;
      state.coffesList = action.payload;
    });
    builder.addCase(fetchCoffes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const coffes = (state) => state.coffes;

export default coffesSlice.reducer;
