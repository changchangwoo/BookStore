import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books: [
    {
      id: 0,
      title: "생각보다 힘들다",
      author: "이창우",
      summary: "진짜 생각보다 힘들다..",
      detail: "베스트 셀러가 제일 잘팔려요잉",
      price: 9999,
      img: "그런거없다",
    },
  ],
};

const getRecentCategoryBook = createAsyncThunk(
  "books/recentBooks",
  async (categoryId, thunkAPI) => {
    try {
      console.log(categoryId)
      const response = await API.get("books/", {
        params: {
          limit : 12,
          currentPage : 1,
          category_id: categoryId
        }
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const recentBookSlice = createSlice({
  name: "recentBook",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getRecentCategoryBook.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload;
      }
    });
  },
});
export { getRecentCategoryBook };
export default recentBookSlice.reducer;
