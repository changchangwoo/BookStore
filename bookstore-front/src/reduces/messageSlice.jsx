import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message : "",
  isOpen: false,
};

export const messageSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openMessage: (state, actions) => {
      const { message } = actions.payload;
      state.message = message;
      state.isOpen = true;
    },
    closeMessage: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openMessage, closeMessage } = messageSlice.actions;
export default messageSlice.reducer;
