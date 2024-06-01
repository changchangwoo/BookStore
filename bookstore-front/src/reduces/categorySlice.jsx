import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
  category: [
    {
      category_id: 0,
      category_name: "hello",
    },
  ],
};

const getCategory = createAsyncThunk("cateogry", async () => {
  try {
    const response = await API.get("/category");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.category = action.payload
      }
    });
  },
});
export { getCategory };
export default categorySlice.reducer;
