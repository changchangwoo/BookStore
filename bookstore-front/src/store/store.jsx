import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reduces/modalSlice"
import userReducer from "../reduces/userSlice";
export const store = configureStore({
  reducer: {
    modal : modalReducer,
    user : userReducer
  },
});
