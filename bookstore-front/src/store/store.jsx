import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reduces/modalSlice"
import userReducer from "../reduces/userSlice";
import categoryBookReducer from "../reduces/categoryBookSlice";
import detailBookReducer from "../reduces/detailBookSlice";

export const store = configureStore({
  reducer: {
    modal : modalReducer,
    user : userReducer,
    categoryBook : categoryBookReducer,
    detailBook : detailBookReducer
  },
});
