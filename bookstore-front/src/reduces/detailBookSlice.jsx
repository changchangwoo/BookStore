import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books : [{
    id : 0,
    title : "생각보다 힘들다",
    author : "이창우",
    summary : "진짜 생각보다 힘들다..",
    price : 9999,
    img : "그런거없다"
  }],

};

const getDetailBook = createAsyncThunk('books/detailBooks',
    async (bookId, thunkAPI) => {
      let url = "books/" + bookId
        try {
            const response = await API.get(url);
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
)

export const detailBookSlice = createSlice({
  name: "detailBook",
  initialState,
  reducers: {
  },
  extraReducers: async (builder) => {
    builder.addCase(getDetailBook.fulfilled, (state, action) => {
      if(action.payload) {
        state.books = action.payload.books
      }
      console.log(state.books)
    })
  }
});
export {getDetailBook}
export default detailBookSlice.reducer;
