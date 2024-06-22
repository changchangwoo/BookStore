import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";
import { openMessage } from "./messageSlice";

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

const deleteUserCartBooks = createAsyncThunk(
  "books/delteBooks",
  async (thunkAPI) => {
    try { 
      const response = await API.delete(`carts/`);
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
    oneChecked: (state, action) => {
      const {checkType, id} = action.payload
      state.books = state.books.map((book)=>{
        if(book.id === id) {
          return { ...book, checked : checkType}
        }
        return book
      })
    },
    allChecked: (state, action) => {
      state.books = state.books.map((book) => {
        return {...book, checked : action.payload}
      })
    },
  },
  extraReducers: async (builder) => {
    builder.addCase(getUserCartBooks.fulfilled, (state, action) => {
      if (action.payload) {
        state.books = action.payload.map(book => ({...book, checked : false}))
      }
    });
    builder.addCase(deleteUserCartBooks.fulfilled, (state, action) => {
      state.books = []
    })
  },
});
export const { upCount, downCount, oneChecked, allChecked } = cartBookSlice.actions;
export { getUserCartBooks, deleteUserCartBooks };
export default cartBookSlice.reducer;
