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

const getUserCartBooks = createAsyncThunk(
  "books/cartBooks",
  async (thunkAPI) => {
    try {
      const response = await API.get("carts/");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const cartBookSlice = createSlice({
  name: "cartBook",
  initialState,
  reducers: {
    upCount : (state, action) => {
      const {id} = action.payload
      state.books = state.books.map((book) => {
        if(book.id === id) {
          return {...book, quantity : book.quantity + 1}
        }
        return book
      })
    },
    downCount : (state, action) => {
      const {id} = action.payload
      state.books = state.books.map((book) => {
        if(book.id === id) {
          if(book.quantity <= 0) return
          return {...book, quantity : book.quantity - 1}
        }
        return book
      })
    },
    checked: (state, action) => {
      const {checked, id} = action.payload
      state.books = state.books.map((book)=>{
        if(book.id === id) {
          return { ...book, checked : checked}
        }
        return book
      })
    },
  },
  extraReducers: async (builder) => {
    builder.addCase(getUserCartBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.map(book => ({...book, checked : false}))

      }
    });
  },
});
export const { upCount, downCount, checked } = cartBookSlice.actions;
export { getUserCartBooks };
export default cartBookSlice.reducer;
