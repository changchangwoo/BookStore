import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reduces/modalSlice"
export const store = configureStore({
  reducer: {
    modal : modalReducer,
  },
});
