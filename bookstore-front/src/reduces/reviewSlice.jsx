import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  reviews: [
    {
      id: 0,
      userEmail: "김창우",
      comment: "빨리 끝내고 다른 프로젝트 하고 싶다..",
      date: "2024-05-26",
      rgb : "rgb(255,3,1)"
    },
  ],
};

export const recentBookSlice = createSlice({
  name: "recentBook",
  initialState,
  reducers: {},
  },
);
export { getRecentCategoryBook };
export default recentBookSlice.reducer;
