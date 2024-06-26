import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isOpen: false,
  timerCheck: null
};

export const openMessage = createAsyncThunk(
  'message/openMessage',
  async (str, { dispatch, getState }) => {
    const { message } = str;
    const state = getState().message;

    if (state.timerCheck) {
      clearTimeout(state.timerCheck);
      dispatch(closeMessage());
    }

    dispatch(setMessage(message));

    const timerCheck = setTimeout(() => {
      dispatch(closeMessage());
    }, 2000);

    return { timerCheck };
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
      state.isOpen = true;
    },
    closeMessage: (state) => {
      state.isOpen = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(openMessage.fulfilled, (state, action) => {
      state.timerCheck = action.payload.timerCheck;
    });
  }
});

export const { closeMessage, setMessage } = messageSlice.actions;
export default messageSlice.reducer;
