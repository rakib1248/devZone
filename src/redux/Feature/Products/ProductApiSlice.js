import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/axios";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      const response = await API.post("/product", data);
      return response.data;
    } catch (error) {
      return error.massege;
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (updateData, { rejectWithValue }) => {
    

    try {
      const res = await API.put(`/product/${updateData.id}`, {
        title: updateData.title,
        sellPrice: updateData.sellPrice,
        offerPrice: updateData.offerPrice,
        dec: updateData.dec,
      });
      return res.data; // শুধু মূল data ফেরত দাও
    } catch (error) {
      // Axios error হলে error.response?.data.message থাকতে পারে
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// Delete Product
export const DeleteProduct = createAsyncThunk(
  "product/DeleteProduct",
  async ({ id, publicId }) => {
    try {
      await API.delete(`/product/${id}`);
      await API.post(`/delete-image/${publicId}`);

      return id;
    } catch (error) {
      return error.massege;
    }
  }
);

// Lode All Products

export const allProducts = createAsyncThunk(
  "product/allProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/product"); // নিশ্চিত হও endpoint সঠিক

      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
