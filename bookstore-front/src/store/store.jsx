import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reduce/modalSlice"
export const store = configureStore({
  reducer: {
    modal : modalReducer,
  },
});
