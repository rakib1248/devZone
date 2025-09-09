import { createSlice } from "@reduxjs/toolkit";
import {
  allProducts,
  createProduct,
  DeleteProduct,
  updateProduct,
} from "./ProductApiSlice";
import { alertToast } from "../../../utils/alart";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoader: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.fulfilled, (state, action) => {
        state.products = [...action.payload];
        state.isLoader = false;
      })
      .addCase(allProducts.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoader = true;
        alertToast({ text: "Creating Product ...", type: "info" });
      })
      .addCase(createProduct.rejected, (state) => {
        state.isLoader = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
        state.isLoader = false;
        alertToast({ text: "Your Product Create Successfully" });
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoader = false;
        alertToast({ text: action.payload, type: "error" });
      })
      .addCase(DeleteProduct.pending, (state) => {
        state.isLoader = true;
        alertToast({ text: "Waiting For Deleting...", type: "info" });
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.isLoader = false;
        alertToast({ text: "Your Product Deletet Successfully" });
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        alertToast({ text: action.payload, type: "error" });
        state.isLoader = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((item) =>
          item.id == action.payload.id ? { ...item, ...action.payload } : item
        );
        state.isLoader = false;
        alertToast({ text: "Your Product Update Successfully" });
      });
  },
});

// export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
