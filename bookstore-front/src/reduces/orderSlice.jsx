import { createSlice } from "@reduxjs/toolkit";
import API from "../utils/api";

const initialState = {
    orderInfo : {
        name : '이창우',
        address : '서울시 도봉구 방학동',
        contact : '010-8539-2067'
    }
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderInfo : (state,action) => {
        const {name, address, contact} = action.payload
        state.orderInfo.name = name;
        state.orderInfo.address = address;
        state.orderInfo.contact = contact
    },
  },
});
export const { setOrderInfo } = orderSlice.actions;
// export {  };
export default orderSlice.reducer;
