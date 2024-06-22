import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books : [{
    id : 0,
    title : "생각보다 힘들다",
    author : "이창우",
    summary : "요약입니다",
    price : 9999,
    img : "없음"
  }],
  pagination : {
  }
};

const getCategoryBook = createAsyncThunk('books/categoryBooks',
    async (categoryId, thunkAPI) => {
        try {
            const response = await API.get("books/", {
                params: {
                    limit : 12,
                    currentPage : 1,
                    category_id : categoryId
                  }
              });
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const categoryBookSlice = createSlice({
  name: "categoryBook",
  initialState,
  reducers: {
  },
  extraReducers: async (builder) => {
    builder.addCase(getCategoryBook.fulfilled, (state, action) => {
      if(action.payload) {
        state.books = action.payload.books
        state.pagination = action.payload.pagenation
      }
    })
  }
});
export {getCategoryBook}
export default categoryBookSlice.reducer;
