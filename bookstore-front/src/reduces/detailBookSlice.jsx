import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books: [
    {
      id: 0,
      title: "생각보다 힘들다",
      author: "이창우",
      summary: "진짜 생각보다 힘들다..",
      detail: "디테일한게 디테일해요잉",
      price: 9999,
      likes: 0,
      img: "그런거없다",
    },
  ],
};

const getDetailBook = createAsyncThunk(
  "books/detailBooks",
  async (bookId, thunkAPI) => {
    let url = "books/" + bookId;
    try {
      const response = await API.get(url);
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
  async ({ bookId}, thunkAPI) => {
    try {
      const response = await API.delete(`/likes/${bookId}`)
      return response.data;
    } catch (err) {
      console.log(err)
    }
  }


)

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
          state.books.likes++;
        }
      })
      .addCase(removeLikes.fulfilled, (state, action) => {
        if (action.payload) {
          state.books.likes--;
        }
      });
  },
});

export { getDetailBook, addLikes, removeLikes};
export default detailBookSlice.reducer;
