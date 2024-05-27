import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";
import { closeModal } from "./modalSlice";
import { openMessage } from "./messageSlice";

const initialState = {
  loginCheck: false,
  isDark : false,
  loginMessage: "아이디와 비밀번호를 입력해주세요",
};

const userLogin = createAsyncThunk(
  "users/userLogin",
  async ({ userEmail, userPassword }, thunkAPI) => {
    try {
      const response = await API.post("users/login", {
        email: userEmail,
        password: userPassword,
      });
      if (response.status === 200) {
        thunkAPI.dispatch(closeModal());
        thunkAPI.dispatch(openMessage({message : `로그인에 성공하셨습니다!`}))
        return response.status;
      }
    } catch (err) {
      return err.response.status;
    }
  }
);

const checkLogin = createAsyncThunk(
  "users/checkLogin",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("users/check");
      return response.status;
    } catch (err) {
      return err.response.status;
    }
  }
);

const userLogout = createAsyncThunk(
  "users/userLogout",
  async (_, thunkAPI) => {
    try {
      const response = await API.post("users/logout");
      return response.status;
    } catch (err) {
      return err.response.status
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginMessage: (state) => {
      state.loginMessage = "아이디와 비밀번호를 입력해주세요";
    },
    setDarkMode: (state) => {
      state.isDark = !state.isDark
      console.log(state.isDark)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.loginCheck = true;
      } else if (action.payload === 400) {
        state.loginMessage = "아이디와 비밀번호가 일치하지 않습니다";
      }
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.loginCheck = true;
      } else {
        state.loginCheck = false;
      }
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      if (action.payload === 200) {
        state.loginCheck = false
      }
    });
  },
});

export { userLogin, checkLogin, userLogout };
export const { setLoginMessage, setDarkMode } = userSlice.actions;
export default userSlice.reducer;
