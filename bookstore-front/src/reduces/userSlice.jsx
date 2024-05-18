import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";
import modalSlice, { closeModal } from "./modalSlice";

const initialState = {
  loginCheck : false,
  loginMessage : '아이디와 비밀번호를 입력해주세요'
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
      return response.status
    }
  } catch (err) {
    return err.response.status
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
      if(action.payload === 200) {
        state.loginCheck = true
      } else if(action.payload === 400) {
        state.loginMessage = "아이디와 비밀번호가 일치하지 않습니다"
      }
    })
  }
});
export {userLogin}
export const {userLogout} = userSlice.actions;
export default userSlice.reducer;
