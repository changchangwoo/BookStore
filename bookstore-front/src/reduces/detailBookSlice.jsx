import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books : [{
    id : 0,
    title : "생각보다 힘들다",
    author : "이창우",
    summary : "진짜 생각보다 힘들다..",
    detail : "디테일한게 디테일해요잉",
    price : 9999,
    img : "그런거없다",
  }],
  rendering : false
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
  rerender: (state) => {
      state.rendering = !state.rendering
    },
  },
  extraReducers: async (builder) => {
    builder.addCase(getDetailBook.fulfilled, (state, action) => {
      if(action.payload) {
        localStorage.setItem('recentBook', JSON.stringify(action.payload));
        state.books = action.payload
      }
    })
  }
});
export {getDetailBook}
export const {rerender} = detailBookSlice.actions
export default detailBookSlice.reducer;
