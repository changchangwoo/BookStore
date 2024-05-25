import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reduces/modalSlice"
import userReducer from "../reduces/userSlice";
import categoryBookReducer from "../reduces/categoryBookSlice";
import detailBookReducer from "../reduces/detailBookSlice";
import bestBookReducer from "../reduces/bestBookSlice";
import recentBookReducer from "../reduces/recentBookSlice";
import cartBookReducer from "../reduces/cartBookSlice"
import messageReducer from "../reduces/messageSlice";
import orderReducer from "../reduces/orderSlice";
import searchBookReducer from "../reduces/searchBookSlice";

export const store = configureStore({
  reducer: {
    modal : modalReducer,
    user : userReducer,
    message : messageReducer,
    order : orderReducer,
    categoryBook : categoryBookReducer,
    detailBook : detailBookReducer,
    bestBook : bestBookReducer,
    recentBook : recentBookReducer,
    cartBook : cartBookReducer,
    searchBook : searchBookReducer

  },
});
