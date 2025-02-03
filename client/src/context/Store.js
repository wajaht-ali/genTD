import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loading/loadingSlice.jsx";
import counterSlice from "./features/counter/counterSlice.jsx";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    counter: counterSlice,
  },
});
