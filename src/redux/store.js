import { configureStore } from "@reduxjs/toolkit";
import product from "./Feature/Products/ProductSlice";

const store = configureStore({
  reducer: {
    product: product,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
