import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  books: [
    {
      id: 0,
      book_id: 0,
      title: "투썸플레이스",
      author: "김똘똘",
      quantity: 20,
      price: 3000,
      img: "그런거없다",
      checked: false,
    },
  ],
};

const getSearchBooks = createAsyncThunk(
  "books/searchBooks",
  async (inputSearch, thunkAPI) => {
    const url = "books/search";
    try {
      const response = await API.get(url, {
        params: {
          query: inputSearch,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);


export const searchSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getSearchBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload;
      }
    });
  },
});
export { getSearchBooks };
export default searchSlice.reducer;
