import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books : [{
    id : 0,
    title : "생각보다 힘들다",
    author : "이창우",
    summary : "진짜 생각보다 힘들다..",
    detail : "베스트 셀러가 제일 잘팔려요잉",
    price : 9999,
    img : "그런거없다"
  }],
};

const getBestBooks = createAsyncThunk('books/bestBooks',
    async (thunkAPI) => {
      let url = "books/best"
        try {
            const response = await API.get(url);
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const bestBookSlice = createSlice({
  name: "bestBook",
  initialState,
  reducers: {
  },
  extraReducers: async (builder) => {
    builder.addCase(getBestBooks.fulfilled, (state, action) => {
      if(action.payload) {
        state.books = action.payload
      }
    })
  }
});
export {getBestBooks}
export default bestBookSlice.reducer;
