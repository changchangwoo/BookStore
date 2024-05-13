import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";
import modalSlice, { closeModal } from "./modalSlice";

const initialState = {
  loginCheck : false,
};

const userLogin = createAsyncThunk('users/userLogin',
  async ({userEmail, userPassword}, thunkAPI) => {
    try {
    const response = await API.post("users/login", {
      email: userEmail,
      password: userPassword,
    });
    if(response.status === 200) {
      thunkAPI.dispatch(closeModal())
      return true
    }
  } catch (err) {
    console.log(err)
    throw err;
  }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.loginCheck = false
    }
  },
  extraReducers: async (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      if(action.payload) {
        state.loginCheck = true
      }
    })
  }
});
export {userLogin}
export const {userLogout} = userSlice.actions;
export default userSlice.reducer;
