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
      img: "그런거없다"
        },
  ],
  totalCount : 0
};

const getSearchBooks = createAsyncThunk(
  "books/searchBooks",
  async ({inputSearch, currentPage, totalCount }, thunkAPI) => {
    const url = "books/search";
    try {
      const response = await API.get(url, {
        params: {
          query: inputSearch,
          limit: 8,
          currentPage: currentPage,
          totalCount : totalCount
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const getSearchCategory = createAsyncThunk(
  "books/searchCategory",
  async ({categoryId, currentPage, totalCount}, thunkAPI) => {
    const url = "/books"
    try {
      const response = await API.get(url, {
        params : {
          category_id : categoryId,
          limit : 8,
          currentPage : currentPage,
          totalCount : totalCount
        }
      });
      return response.data
    }
    catch(err) {
      console.log(err);
    }
  }
)

export const searchSlice = createSlice({
  name: "searchBook",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getSearchBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.books;
        state.totalCount = action.payload.totalCount;
      }
    });
    builder.addCase(getSearchCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.books;
        state.totalCount = action.payload.pagination.totalCount;

      }
    });
  },
});
export { getSearchBooks, getSearchCategory };
export default searchSlice.reducer;
