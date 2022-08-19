import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductAsync = createAsyncThunk(
  "products/fetchProductAsync",
  async () => {
    const response = await fetch(`http://localhost:5000/products`);
    if (response.ok) {
      const products = await response.json();
      return { products };
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isloading: false,
    products: [],
    isError: null,
  },
  extraReducers: {
    [fetchProductAsync.pending]: (state, action) => {
      state.isloading = true;
    },
    [fetchProductAsync.fulfilled]: (state, action) => {
      state.isloading = false;
      state.products.concat(action.payload);
    },
    [fetchProductAsync.rejected]: (state, action) => {
      state.isloading = false;
      state.products = [];
      state.error = action.payload;
    },
  },
});

export default productSlice.actions;
