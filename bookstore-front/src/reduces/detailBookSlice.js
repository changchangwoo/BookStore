import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books: [
    {
      id: 0,
      title: "생각보다 힘들다",
      author: "이창우",
      summary: "진짜 생각보다 힘들다..",
      detail: "디테일한게 디테일해요",
      price: 9999,
      liked: 0,
      likes: 0,
      img: "없음",
    },
  ],
};

const getDetailBook = createAsyncThunk(
  "books/detailBooks",
  async (bookId, thunkAPI) => {
    let url = "books/" + bookId;
    try {
      const response = await API.get(url);
      console.log(response.data)
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const addLikes = createAsyncThunk(
  "books/addLikes",
  async ({ bookId }, thunkAPI) => {
    try {
      const response = await API.post("/likes", {
        id: bookId,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const removeLikes = createAsyncThunk(
  "books/removeLikes",
  async ({ bookId }, thunkAPI) => {
    try {
      const response = await API.delete(`/likes/${bookId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const detailBookSlice = createSlice({
  name: "detailBook",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDetailBook.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem("recentBook", JSON.stringify(action.payload));
          state.books = action.payload;
        }
      })
      .addCase(addLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.books.liked = 1;
          state.books.likes++;
        }
      })
      .addCase(removeLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.books.liked = 0;
          state.books.likes--;
        }
      });
  },
});

export { getDetailBook, addLikes, removeLikes };
export default detailBookSlice.reducer;
