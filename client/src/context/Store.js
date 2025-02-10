import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loading/loadingSlice.jsx";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
